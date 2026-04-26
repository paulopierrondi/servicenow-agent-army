import { describe_table } from "./describe_table.js";
import { list_active_flows } from "./list_active_flows.js";
import { list_ai_agents } from "./list_ai_agents.js";
import { run_readonly_query } from "./run_readonly_query.js";
import { search_schema } from "./search_schema.js";
import { sn_aggregate_count } from "./sn_aggregate_count.js";
import { sn_table_get } from "./sn_table_get.js";
import { sn_table_query } from "./sn_table_query.js";

// Use a permissive type so this list contains tools with heterogeneous input/output shapes.
// Each tool still validates its own input via the Zod schema.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tools: Array<import("../lib/types.js").ToolDefinition<any, any>> = [
  sn_table_query,
  sn_table_get,
  sn_aggregate_count,
  search_schema,
  describe_table,
  list_active_flows,
  list_ai_agents,
  run_readonly_query,
];

export {
  describe_table,
  list_active_flows,
  list_ai_agents,
  run_readonly_query,
  search_schema,
  sn_aggregate_count,
  sn_table_get,
  sn_table_query,
};
