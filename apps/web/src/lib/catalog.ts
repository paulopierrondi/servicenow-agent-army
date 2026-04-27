import { readFile } from "node:fs/promises";
import path from "node:path";
import { type Agent, AgentsSchema, type Workflow, WorkflowsSchema } from "@/types/agent";

const ROOT = path.resolve(process.cwd(), "../../");

export async function loadAgents(): Promise<Agent[]> {
  const raw = await readFile(path.join(ROOT, "catalog/agents.json"), "utf8");
  return AgentsSchema.parse(JSON.parse(raw));
}

export async function loadWorkflows(): Promise<Workflow[]> {
  const raw = await readFile(path.join(ROOT, "catalog/workflows.json"), "utf8");
  return WorkflowsSchema.parse(JSON.parse(raw));
}

type GalleryItem = {
  slug: string;
  title: string;
  domain: string;
  summary: string;
  problem: string;
  artifacts: { type: string; preview: string }[];
};

export async function loadGallery(): Promise<GalleryItem[]> {
  try {
    const raw = await readFile(path.join(ROOT, "catalog/gallery.json"), "utf8");
    return JSON.parse(raw) as GalleryItem[];
  } catch {
    return [];
  }
}
