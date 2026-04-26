import { err, ok, type ToolResult } from "../lib/types.js";

export interface ServiceNowClientConfig {
  instanceUrl?: string;
  token?: string;
}

export interface ServiceNowClient {
  instance: string;
  /** Stub: returns mock data envelope. Real impl will hit /api/now/table. */
  query<T>(args: { table: string; mockData: T }): Promise<ToolResult<T>>;
}

export function getServiceNowClient(
  config: ServiceNowClientConfig = {},
): ToolResult<ServiceNowClient> {
  const instance = config.instanceUrl ?? process.env.SERVICENOW_INSTANCE_URL;
  const token = config.token ?? process.env.SERVICENOW_TOKEN;

  if (!instance) {
    return err("auth", "SERVICENOW_INSTANCE_URL is not set", {
      message_pt_br: "SERVICENOW_INSTANCE_URL nao esta definido",
    });
  }
  if (!token) {
    return err("auth", "SERVICENOW_TOKEN is not set", {
      message_pt_br: "SERVICENOW_TOKEN nao esta definido",
    });
  }

  return ok<ServiceNowClient>({
    instance,
    async query({ mockData }) {
      // Stub. Real implementation will call ServiceNow Table REST API with Bearer token.
      return ok(mockData);
    },
  });
}
