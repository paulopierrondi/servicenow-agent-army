import { err, type ToolResult } from "./types.js";

const SAFE_HOST_FRAGMENTS = ["dev", "uat", "test", "sandbox"];

export interface ProdGuardOk {
  instance: string;
  isProdLike: boolean;
  allowedByOverride: boolean;
}

export function checkProdGuard(): ToolResult<ProdGuardOk> {
  const instance = process.env.SERVICENOW_INSTANCE_URL;
  if (!instance) {
    return err("auth", "SERVICENOW_INSTANCE_URL is not set", {
      message_pt_br: "SERVICENOW_INSTANCE_URL nao esta definido",
    });
  }

  let host: string;
  try {
    host = new URL(instance).hostname.toLowerCase();
  } catch {
    return err("validation", "SERVICENOW_INSTANCE_URL is not a valid URL", {
      details: { value: instance },
    });
  }

  const isSafeName = SAFE_HOST_FRAGMENTS.some((f) => host.includes(f));
  const allowProd = process.env.MCP_WRITE_ALLOW_PROD === "true";

  if (!isSafeName && !allowProd) {
    return err(
      "instance_unsafe",
      `Instance hostname ${host} does not look like dev/uat/test/sandbox and MCP_WRITE_ALLOW_PROD is not 'true'`,
      {
        message_pt_br:
          "Instancia parece ser de producao e MCP_WRITE_ALLOW_PROD nao esta como 'true'",
        details: { host },
      },
    );
  }

  return {
    ok: true,
    data: {
      instance,
      isProdLike: !isSafeName,
      allowedByOverride: allowProd,
    },
  };
}
