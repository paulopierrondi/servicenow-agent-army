import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export interface ApprovalTokenPayload {
  patch_id: string;
  dryrun_at: number;
  expires_at: number;
  sn_target: {
    instance: string;
    table: string;
    op: "create" | "update" | "delete";
    sys_ids?: string[];
  };
}

export interface SignedApprovalToken {
  token: string;
  payload: ApprovalTokenPayload;
}

const DEFAULT_TTL_MS = 15 * 60 * 1000;

function getKey(): string {
  const key = process.env.MCP_WRITE_SIGNING_KEY;
  if (!key || key.length < 16) {
    throw new Error(
      "MCP_WRITE_SIGNING_KEY is not set or is shorter than 16 chars; refusing to sign tokens",
    );
  }
  return key;
}

function base64url(input: Buffer | string): string {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64url(input: string): Buffer {
  const pad = input.length % 4 === 0 ? "" : "=".repeat(4 - (input.length % 4));
  return Buffer.from(input.replace(/-/g, "+").replace(/_/g, "/") + pad, "base64");
}

function sign(payload: string, key: string): string {
  return base64url(createHmac("sha256", key).update(payload).digest());
}

export interface SignOptions {
  patch_id?: string;
  ttlMs?: number;
  now?: number;
  sn_target: ApprovalTokenPayload["sn_target"];
}

export function signApprovalToken(opts: SignOptions): SignedApprovalToken {
  const key = getKey();
  const now = opts.now ?? Date.now();
  const ttl = opts.ttlMs ?? DEFAULT_TTL_MS;
  const payload: ApprovalTokenPayload = {
    patch_id: opts.patch_id ?? `patch_${randomBytes(8).toString("hex")}`,
    dryrun_at: now,
    expires_at: now + ttl,
    sn_target: opts.sn_target,
  };
  const body = base64url(JSON.stringify(payload));
  const sig = sign(body, key);
  return { token: `${body}.${sig}`, payload };
}

export type VerifyResult =
  | { ok: true; payload: ApprovalTokenPayload }
  | { ok: false; reason: "malformed" | "tampered" | "expired" | "no_key" };

export function verifyApprovalToken(token: string, now: number = Date.now()): VerifyResult {
  let key: string;
  try {
    key = getKey();
  } catch {
    return { ok: false, reason: "no_key" };
  }
  const parts = token.split(".");
  if (parts.length !== 2) return { ok: false, reason: "malformed" };
  const [body, sig] = parts as [string, string];
  if (!body || !sig) return { ok: false, reason: "malformed" };

  const expected = sign(body, key);
  const a = fromBase64url(sig);
  const b = fromBase64url(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: "tampered" };
  }

  let payload: ApprovalTokenPayload;
  try {
    payload = JSON.parse(fromBase64url(body).toString("utf8")) as ApprovalTokenPayload;
  } catch {
    return { ok: false, reason: "malformed" };
  }

  if (
    typeof payload.expires_at !== "number" ||
    typeof payload.dryrun_at !== "number" ||
    typeof payload.patch_id !== "string" ||
    !payload.sn_target ||
    typeof payload.sn_target.instance !== "string" ||
    typeof payload.sn_target.table !== "string"
  ) {
    return { ok: false, reason: "malformed" };
  }

  if (payload.expires_at < now) {
    return { ok: false, reason: "expired" };
  }
  return { ok: true, payload };
}

// One-time consumption registry. In-process only; production deploy needs distributed store.
const consumedTokens = new Set<string>();

export function consumeToken(token: string): boolean {
  if (consumedTokens.has(token)) return false;
  consumedTokens.add(token);
  return true;
}

export function _resetConsumedTokensForTests(): void {
  consumedTokens.clear();
}
