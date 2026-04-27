import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");

const REPO = "paulopierrondi/servicenow-agent-army";
const GITHUB_API = `https://api.github.com/repos/${REPO}`;

function log(message) {
  console.log(`[metrics] ${message}`);
}

function fail(message) {
  console.error(`[metrics] ${message}`);
  process.exit(1);
}

function getIsoWeek(date) {
  const target = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNumber = (target.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNumber + 3);
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const firstDayNumber = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNumber + 3);
  const week = 1 + Math.round((target.getTime() - firstThursday.getTime()) / (7 * 24 * 60 * 60 * 1000));
  return { year: target.getUTCFullYear(), week };
}

async function ghFetch(path) {
  const headers = { "User-Agent": "agent-army-metrics", Accept: "application/vnd.github+json" };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const url = `${GITHUB_API}${path}`;
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GitHub ${path} -> ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function readGithubStats() {
  const repo = await ghFetch("");
  let contributors = 0;
  try {
    const list = await ghFetch("/contributors?per_page=100&anon=1");
    contributors = Array.isArray(list) ? list.length : 0;
  } catch (error) {
    log(`contributors fetch skipped: ${error.message}`);
  }
  return {
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    watchers: repo.subscribers_count ?? 0,
    openIssues: repo.open_issues_count ?? 0,
    contributors
  };
}

function countGalleryCases() {
  const dir = resolve(root, "gallery");
  if (!existsSync(dir)) {
    return 0;
  }
  return readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).length;
}

function countCatalogAgents() {
  const path = resolve(root, "catalog/agents.json");
  if (!existsSync(path)) {
    return 0;
  }
  try {
    const data = JSON.parse(readFileSync(path, "utf8"));
    return Array.isArray(data) ? data.length : 0;
  } catch (error) {
    log(`catalog parse skipped: ${error.message}`);
    return 0;
  }
}

function countCatalogWorkflows() {
  const path = resolve(root, "catalog/workflows.json");
  if (!existsSync(path)) {
    return 0;
  }
  try {
    const data = JSON.parse(readFileSync(path, "utf8"));
    return Array.isArray(data) ? data.length : 0;
  } catch (error) {
    log(`workflows parse skipped: ${error.message}`);
    return 0;
  }
}

function buildMarkdown({ stamp, year, week, gh, gallery, agents, workflows }) {
  return `# Week ${year}-W${String(week).padStart(2, "0")}

Captured: ${stamp}

## Reach (auto)
- GitHub stars: ${gh.stars}
- GitHub forks: ${gh.forks}
- GitHub watchers: ${gh.watchers}
- GitHub open issues: ${gh.openIssues}
- GitHub contributors: ${gh.contributors}
- LinkedIn impressions (Pierrondi posts): <paste>
- LinkedIn profile views: <paste>
- LinkedIn follower delta: <paste>
- Web app sessions: <paste>
- CLI npm installs: <paste>

## Engagement
- LinkedIn reactions (sum, week): <paste>
- LinkedIn comments (sum, week): <paste>
- LinkedIn DMs received: <paste>
- Gallery submissions (new dirs in /gallery this week): <paste>
- Web app deliberations executed: <paste>

## Inbound (the bucket that funds the op)
- Buyer-persona DMs: <paste>
- Discovery calls scheduled: <paste>
- RFP mentions referencing the repo: <paste>
- Customer asks via ServiceNow Account team: <paste>

## Adoption (rolling, quarterly)
- Clients citing the repo in conversation: <paste>
- POCs Now Assist initiated: <paste>
- Now Assist credits attributed: <paste>

## Repo state (auto)
- Gallery cases on disk: ${gallery}
- Agents in catalog: ${agents}
- Workflows in catalog: ${workflows}

## Notes
- Lesson of the week: <one line>
- Decision for next week: <one line>
- Drops or LGPD/banned-word slips: <one line, or "none">
`;
}

async function main() {
  let gh = { stars: 0, forks: 0, watchers: 0, openIssues: 0, contributors: 0 };
  try {
    gh = await readGithubStats();
  } catch (error) {
    log(`github stats fetch failed: ${error.message}`);
    if (!dryRun) {
      fail("aborting: GitHub stats are required for non-dry-run");
    }
  }

  const gallery = countGalleryCases();
  const agents = countCatalogAgents();
  const workflows = countCatalogWorkflows();
  const now = new Date();
  const stamp = now.toISOString();
  const { year, week } = getIsoWeek(now);
  const markdown = buildMarkdown({ stamp, year, week, gh, gallery, agents, workflows });

  const outDir = resolve(root, "docs/metrics");
  const outPath = resolve(outDir, `${year}-W${String(week).padStart(2, "0")}.md`);

  if (dryRun) {
    log(`dry-run: would write ${outPath}`);
    log(`dry-run: stars=${gh.stars} forks=${gh.forks} contributors=${gh.contributors} gallery=${gallery} agents=${agents} workflows=${workflows}`);
    process.stdout.write(markdown);
    return;
  }

  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(outPath, markdown, "utf8");
  log(`wrote ${outPath}`);
  log(`stars=${gh.stars} forks=${gh.forks} contributors=${gh.contributors} gallery=${gallery} agents=${agents} workflows=${workflows}`);
}

main().catch((error) => {
  fail(error.message);
});
