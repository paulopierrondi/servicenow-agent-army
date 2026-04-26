import { randomBytes } from "node:crypto";

export interface Snapshot {
  snapshot_id: string;
  taken_at: number;
  table: string;
  sys_id?: string;
  before: Record<string, unknown> | null;
}

const STORE = new Map<string, Snapshot>();
const AUDIT_TO_SNAPSHOT = new Map<string, string>();

export function takeSnapshot(args: {
  table: string;
  sys_id?: string;
  before: Record<string, unknown> | null;
}): Snapshot {
  const snap: Snapshot = {
    snapshot_id: `snap_${randomBytes(8).toString("hex")}`,
    taken_at: Date.now(),
    table: args.table,
    ...(args.sys_id !== undefined ? { sys_id: args.sys_id } : {}),
    before: args.before,
  };
  STORE.set(snap.snapshot_id, snap);
  return snap;
}

export function linkAuditToSnapshot(audit_id: string, snapshot_id: string): void {
  AUDIT_TO_SNAPSHOT.set(audit_id, snapshot_id);
}

export function getSnapshotByAuditId(audit_id: string): Snapshot | undefined {
  const sid = AUDIT_TO_SNAPSHOT.get(audit_id);
  if (!sid) return undefined;
  return STORE.get(sid);
}

export function _resetSnapshotsForTests(): void {
  STORE.clear();
  AUDIT_TO_SNAPSHOT.clear();
}
