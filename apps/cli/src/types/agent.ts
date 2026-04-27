export type Agent = {
  id: string;
  name: string;
  role: string;
  mission: string;
  primaryUsers: string[];
  triggers: string[];
  outputs: string[];
  guardrails: string[];
  path: string;
};

export type Workflow = {
  id: string;
  name: string;
  serviceNowSurface: string;
  trigger: string;
  agents: string[];
  steps: number;
  path: string;
};

export type Domain = "ITSM" | "ITOM" | "CSM" | "HR" | "Platform";

export type DiagnosisResult = {
  problem: string;
  domain: Domain | "Unknown";
  council: Array<{
    agent: string;
    role: string;
    contribution: string;
  }>;
  agentSpec: {
    id: string;
    name: string;
    role: string;
    mission: string;
    primaryUsers: string[];
    triggers: string[];
    outputs: string[];
    guardrails: string[];
  };
  workflowSteps: string[];
  skillPrompt: string;
  sdkScaffold: {
    command: string;
    files: string[];
    notes: string[];
  };
  nowAssistHook: {
    surface: string;
    family: string;
    guardian: boolean;
    notes: string[];
  };
};
