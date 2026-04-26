import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import {
  _resetConsumedTokensForTests,
  signApprovalToken,
  verifyApprovalToken,
} from "../src/lib/approval-token.js";

beforeAll(() => {
  process.env.MCP_WRITE_SIGNING_KEY = "test-signing-key-min-16-chars-long";
});

beforeEach(() => {
  _resetConsumedTokensForTests();
});

const baseTarget = {
  instance: "https://dev123.service-now.com",
  table: "incident",
  op: "update" as const,
  sys_ids: ["abc"],
};

describe("approval-token", () => {
  it("signs and verifies a valid token", () => {
    const signed = signApprovalToken({ sn_target: baseTarget });
    const verified = verifyApprovalToken(signed.token);
    expect(verified.ok).toBe(true);
    if (verified.ok) {
      expect(verified.payload.patch_id).toBe(signed.payload.patch_id);
      expect(verified.payload.sn_target.table).toBe("incident");
    }
  });

  it("rejects an expired token", () => {
    const past = Date.now() - 30 * 60 * 1000;
    const signed = signApprovalToken({
      sn_target: baseTarget,
      ttlMs: 60 * 1000,
      now: past,
    });
    const verified = verifyApprovalToken(signed.token);
    expect(verified.ok).toBe(false);
    if (!verified.ok) {
      expect(verified.reason).toBe("expired");
    }
  });

  it("rejects a tampered token", () => {
    const signed = signApprovalToken({ sn_target: baseTarget });
    const parts = signed.token.split(".");
    const body = parts[0] ?? "";
    const sig = parts[1] ?? "";
    const flippedSig = sig.startsWith("A") ? `B${sig.slice(1)}` : `A${sig.slice(1)}`;
    const tampered = `${body}.${flippedSig}`;
    const verified = verifyApprovalToken(tampered);
    expect(verified.ok).toBe(false);
    if (!verified.ok) {
      expect(["tampered", "malformed"]).toContain(verified.reason);
    }
  });
});
