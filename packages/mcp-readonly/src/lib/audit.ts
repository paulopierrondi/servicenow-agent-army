import { appendFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

export interface AuditEntry {
  timestamp: string;
  server: "mcp-readonly" | "mcp-write";
  tool: string;
  input_hash?: string;
  outcome: "ok" | "error" | "dryrun";
  error_code?: string;
  duration_ms?: number;
  instance?: string;
  details?: Record<string, unknown>;
}

const AUDIT_DIR = process.env.MCP_AUDIT_DIR ?? resolve(process.cwd(), ".audit");

function dateStamp(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export function writeAudit(entry: AuditEntry): void {
  try {
    mkdirSync(AUDIT_DIR, { recursive: true });
    const file = resolve(AUDIT_DIR, `${entry.server}-${dateStamp()}.jsonl`);
    appendFileSync(file, `${JSON.stringify(entry)}\n`, "utf8");
  } catch {
    // Audit best-effort — never throw from audit writer.
  }
}
