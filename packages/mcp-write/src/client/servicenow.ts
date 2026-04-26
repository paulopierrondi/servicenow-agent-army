import { err, ok, type ToolResult } from "../lib/types.js";

export interface ServiceNowClient {
  instance: string;
  /** Stub: simulates patch and returns mock affected rows. */
  applyPatch<T>(args: { table: string; mockResult: T }): Promise<ToolResult<T>>;
}

export function getServiceNowClient(): ToolResult<ServiceNowClient> {
  const instance = process.env.SERVICENOW_INSTANCE_URL;
  const token = process.env.SERVICENOW_TOKEN;
  if (!instance) {
    return err("auth", "SERVICENOW_INSTANCE_URL is not set");
  }
  if (!token) {
    return err("auth", "SERVICENOW_TOKEN is not set");
  }
  return ok<ServiceNowClient>({
    instance,
    async applyPatch({ mockResult }) {
      return ok(mockResult);
    },
  });
}
