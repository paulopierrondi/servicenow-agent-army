import { type DeliberationEvent, generateArtifacts, pickCouncil } from "@/lib/deliberate-mock";
import { type DomainId, isDomain } from "@/lib/domains";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Body = z.object({
  problem: z.string().min(3).max(2000),
  domain: z.string().refine(isDomain, "Unknown domain"),
  hasSubProd: z.boolean().optional(),
});

export async function POST(req: Request) {
  let parsed: z.infer<typeof Body>;
  try {
    parsed = Body.parse(await req.json());
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid body" },
      { status: 400 },
    );
  }

  const { problem, domain } = parsed;
  const council = pickCouncil();

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const send = (event: DeliberationEvent) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
      };
      const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

      try {
        for (const agent of council) {
          send({ type: "agent_start", agent: agent.id, label: agent.label });
          await sleep(180);
          const lines = agent.reasoning(problem, domain);
          for (const line of lines) {
            send({ type: "agent_thought", agent: agent.id, text: line });
            await sleep(220);
          }
          send({ type: "agent_done", agent: agent.id });
          await sleep(140);
        }

        const artifacts = generateArtifacts(problem, domain as DomainId);
        send({ type: "complete", artifacts });
      } catch (err) {
        send({
          type: "error",
          message: err instanceof Error ? err.message : "Mock deliberation failed",
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
