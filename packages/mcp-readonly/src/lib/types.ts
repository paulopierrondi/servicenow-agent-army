import { z } from "zod";

export type ToolErrorCode =
  | "auth"
  | "permission"
  | "validation"
  | "not_found"
  | "rate_limited"
  | "instance_unsafe"
  | "internal";

export type ToolError = {
  code: ToolErrorCode;
  message: string;
  message_pt_br?: string;
  retryable: boolean;
  details?: Record<string, unknown>;
};

export type ToolResult<T> =
  | { ok: true; data: T; audit_id?: string }
  | { ok: false; error: ToolError };

export interface ToolDefinition<TInput extends z.ZodTypeAny, TOutput> {
  name: string;
  description: string;
  inputSchema: TInput;
  handler: (input: z.infer<TInput>) => Promise<ToolResult<TOutput>>;
}

export function ok<T>(data: T, audit_id?: string): ToolResult<T> {
  if (audit_id !== undefined) {
    return { ok: true, data, audit_id };
  }
  return { ok: true, data };
}

export function err(
  code: ToolErrorCode,
  message: string,
  options: { retryable?: boolean; message_pt_br?: string; details?: Record<string, unknown> } = {},
): ToolResult<never> {
  const error: ToolError = {
    code,
    message,
    retryable: options.retryable ?? false,
  };
  if (options.message_pt_br !== undefined) {
    error.message_pt_br = options.message_pt_br;
  }
  if (options.details !== undefined) {
    error.details = options.details;
  }
  return { ok: false, error };
}
