import type { DomainId } from "./domains";

export type DeliberationEvent =
  | { type: "agent_start"; agent: string; label: string }
  | { type: "agent_thought"; agent: string; text: string }
  | { type: "agent_done"; agent: string }
  | { type: "complete"; artifacts: Artifacts }
  | { type: "error"; message: string };

export type Artifacts = {
  agentSpec: Record<string, unknown>;
  workflow: {
    name: string;
    trigger: string;
    steps: { id: number; title: string; detail: string }[];
  };
  skillPrompt: string;
  sdkScaffold: { description: string; commands: string[] };
  nowAssistHook: { surface: string; rationale: string };
};

const COUNCIL: {
  id: string;
  label: string;
  reasoning: (problem: string, domain: string) => string[];
}[] = [
  {
    id: "business-analyst-agent",
    label: "Business Analyst",
    reasoning: (p, d) => [
      `Restating the ask in ${d.toUpperCase()} terms: "${p.slice(0, 80)}".`,
      "Listing actors, inputs, outputs, and acceptance criteria.",
      "Flagging missing business rules to confirm with the requester.",
    ],
  },
  {
    id: "cta-agent",
    label: "CTA",
    reasoning: (_p, d) => [
      `Picking platform boundary for ${d.toUpperCase()}: AI Agent Studio + Now Assist surface.`,
      "Mapping data fit to OOTB tables; no schema extension yet.",
      "Calling out three architecture alternatives with cost/complexity trade-offs.",
    ],
  },
  {
    id: "enterprise-architect-agent",
    label: "Enterprise Architect",
    reasoning: () => [
      "Checking lifecycle ownership and integration blast radius.",
      "Confirming write paths stay behind dry-run + approval token.",
      "No cross-domain writes without an ADR; flagging dependency map.",
    ],
  },
  {
    id: "workflow-composer",
    label: "Workflow Composer",
    reasoning: (_p, d) => [
      `Drafting AI Agent Studio steps with explicit handoffs for ${d.toUpperCase()}.`,
      "Each step gets a typed input/output and a test outline.",
      "Adding human-approval step before any production write.",
    ],
  },
  {
    id: "now-assist-coach",
    label: "Now Assist Coach",
    reasoning: (_p, d) => [
      `Routing to the right surface: AI Agent Studio + Now Assist for ${d.toUpperCase()}.`,
      "Recommending Guardian policy when PII or regulated data is in scope.",
      "Pinning credit budget to keep cost defensible.",
    ],
  },
  {
    id: "guardrails-reviewer",
    label: "Guardrails Reviewer",
    reasoning: () => [
      "Applying dry-run + signed approval token + append-only audit + per-record rollback.",
      "Reviewing ACLs and role boundaries; refusing ambiguous write paths.",
      "Locking sub-prod testing window before production rollout.",
    ],
  },
  {
    id: "token-saver-specialist",
    label: "Token Saver",
    reasoning: () => [
      "Compressing the agent prompt while preserving guardrails and tests.",
      "Trimming context: removing examples already covered by typed steps.",
      "Targeting <40% of original token count without behavior loss.",
    ],
  },
];

const SURFACE_BY_DOMAIN: Record<DomainId, { surface: string; rationale: string }> = {
  itsm: {
    surface: "AI Agent Studio + Now Assist for ITSM",
    rationale:
      "Incident/Change/Problem/Request flows already have OOTB Now Assist skills; reuse before extending.",
  },
  itom: {
    surface: "AI Agent Studio + AIOps + CMDB read API",
    rationale:
      "CMDB write-back needs identification + reconciliation rules approved before automation.",
  },
  csm: {
    surface: "AI Agent Studio + Now Assist for CSM",
    rationale: "B2C cases with PII require Now Assist Guardian policy plus ACL review.",
  },
  hr: {
    surface: "AI Agent Studio + Now Assist for HRSD",
    rationale: "Employee-data scope demands strict ACLs and a deflection target before automation.",
  },
  platform: {
    surface: "AI Agent Studio core + NASK custom skill",
    rationale: "Cross-domain logic belongs in a NASK skill so domain apps stay clean.",
  },
};

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function generateArtifacts(problem: string, domain: DomainId): Artifacts {
  const seed = hashString(`${problem}|${domain}`);
  const domainCfg = SURFACE_BY_DOMAIN[domain];
  const slug = `${domain}-${(seed % 9000) + 1000}`;

  return {
    agentSpec: {
      id: `${domain}-agent-${(seed % 9000) + 1000}`,
      name: `${domain.toUpperCase()} agent draft`,
      role: `Drafted from a one-line ${domain.toUpperCase()} problem`,
      mission: problem.slice(0, 240),
      surface: domainCfg.surface,
      inputs: ["record sys_id", "user context", "domain hint"],
      outputs: ["plan", "linked records", "audit trail entry"],
      guardrails: [
        "Dry-run before any write.",
        "Signed approval token required for production-side actions.",
        "Append-only audit log of every step.",
      ],
      tools: ["sn_table_query", "sn_table_describe", "sn_search_schema"],
    },
    workflow: {
      name: `${domain.toUpperCase()} draft workflow`,
      trigger: `Manual run from a sub-prod instance for ${domain.toUpperCase()} review`,
      steps: [
        { id: 1, title: "Capture intent", detail: "Parse the requester ask into typed fields." },
        {
          id: 2,
          title: "Read context",
          detail: "Read-only Table API queries against the relevant OOTB tables.",
        },
        {
          id: 3,
          title: "Reason",
          detail: "AI Agent Studio reasoning step grounded in retrieved context.",
        },
        {
          id: 4,
          title: "Propose plan",
          detail: "Return three options with cost/complexity/time-to-value.",
        },
        {
          id: 5,
          title: "Human approval",
          detail: "Pause for signed approval before any write.",
        },
        {
          id: 6,
          title: "Execute (sub-prod only)",
          detail: "Dry-run path; production rollout happens via change record.",
        },
        {
          id: 7,
          title: "Audit + rollback hooks",
          detail: "Emit JSONL audit event and per-record rollback handle.",
        },
      ],
    },
    skillPrompt: [
      `Skill: ${domain}-${slug}`,
      "",
      "Goal:",
      problem,
      "",
      "Inputs (typed):",
      "- record_sys_id: glide_record",
      "- domain_hint: simple_array",
      "- user_context: json_object",
      "",
      "Output:",
      "- json_object with { plan, alternatives[3], audit_ref }",
      "",
      "Behavior:",
      "1. Read-only retrieval of related records.",
      "2. Produce three alternatives with explicit trade-offs.",
      "3. Refuse production writes; propose a change record instead.",
      "4. Cite each retrieved record by sys_id in the audit ref.",
    ].join("\n"),
    sdkScaffold: {
      description: "ServiceNow SDK 4.6 scaffold using Fluent. Run inside an empty folder.",
      commands: [
        "now-sdk init --name sn-army-draft --scope x_sn_army_draft",
        "now-sdk add ai-agent --id ${domain}-agent-${slug}",
        "now-sdk add nask-skill --id ${domain}-${slug} --input-types glide_record,json_object,simple_array",
        "now-sdk build",
        "now-sdk deploy --target sub-prod",
      ].map((c) => c.replace("${domain}", domain).replace("${slug}", slug)),
    },
    nowAssistHook: domainCfg,
  };
}

export function pickCouncil() {
  return COUNCIL;
}
