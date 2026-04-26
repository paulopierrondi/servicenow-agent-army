import { appendFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { randomBytes } from "node:crypto";

export interface AuditEntry {
  timestamp: string;
  audit_id: string;
  server: "mcp-write";
  tool: string;
  outcome: "applied" | "dryrun" | "rejected" | "rolled_back" | "failed";
  approval_token_id?: string;
  before_snapshot_id?: string;
  patch_id?: string;
  instance?: string;
  duration_ms?: number;
  error_code?: string;
  details?: Record<string, unknown>;
}

const AUDIT_DIR = process.env.MCP_AUDIT_DIR ?? resolve(process.cwd(), ".audit");

function dateStamp(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function newAuditId(): string {
  return `aud_${randomBytes(8).toString("hex")}`;
}

export function writeAudit(entry: AuditEntry): void {
  try {
    mkdirSync(AUDIT_DIR, { recursive: true });
    const file = resolve(AUDIT_DIR, `mcp-write-${dateStamp()}.jsonl`);
    appendFileSync(file, `${JSON.stringify(entry)}\n`, "utf8");
  } catch {
    // best-effort
  }
}
