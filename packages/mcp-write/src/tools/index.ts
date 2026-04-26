import { commit_audit_event } from "./commit_audit_event.js";
import { request_human_approval } from "./request_human_approval.js";
import { rollback_last_change } from "./rollback_last_change.js";
import { sn_table_patch } from "./sn_table_patch.js";
import { sn_table_patch_dryrun } from "./sn_table_patch_dryrun.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tools: Array<import("../lib/types.js").ToolDefinition<any, any>> = [
  sn_table_patch_dryrun,
  sn_table_patch,
  request_human_approval,
  commit_audit_event,
  rollback_last_change,
];

export {
  commit_audit_event,
  request_human_approval,
  rollback_last_change,
  sn_table_patch,
  sn_table_patch_dryrun,
};
