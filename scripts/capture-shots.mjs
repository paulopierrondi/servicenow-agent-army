import puppeteer from "puppeteer-core";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:3003";
const OUT = path.resolve("marketing/video-2026-04-27/screenshots");

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  args: ["--hide-scrollbars", "--disable-features=TranslateUI"],
});

const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);

async function shot(name, opts = {}) {
  const file = path.join(OUT, name);
  await page.screenshot({ path: file, type: "png", ...opts });
  console.log("ok", file);
}

console.log("→ home hero");
await page.goto(`${BASE}/`, { waitUntil: "networkidle0" });
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 500));
await shot("01-hero.png");

console.log("→ home full page (long)");
await shot("02-home-full.png", { fullPage: true });

console.log("→ form filled");
await page.click("#problem");
await page.type(
  "#problem",
  "800 incidents/day in FSI banking. p95 incident-to-assignment is 7 minutes. Resolution suggestions land without KB cite. Risk blocks any Now Assist that touches customer data. Fix it.",
  { delay: 8 },
);
await page.evaluate(() => {
  const el = document.querySelector("form");
  el?.scrollIntoView({ behavior: "instant", block: "center" });
});
await new Promise((r) => setTimeout(r, 250));
await shot("03-form-filled.png");

console.log("→ deliberation in progress");
await page.click('button[type="submit"]');
await new Promise((r) => setTimeout(r, 1100));
await page.evaluate(() => {
  const stream = document.querySelector("[ref], main");
  window.scrollTo({ top: 540, behavior: "instant" });
});
await new Promise((r) => setTimeout(r, 100));
await shot("04-deliberation-mid.png");

console.log("→ wait for complete");
await page.waitForFunction(
  () => {
    const tags = Array.from(document.querySelectorAll(".tag"));
    return tags.some((t) => /complete/i.test(t.textContent || ""));
  },
  { timeout: 30000 },
);
await page.evaluate(() => window.scrollTo({ top: 540, behavior: "instant" }));
await new Promise((r) => setTimeout(r, 200));
await shot("05-deliberation-complete.png");

console.log("→ output cards top");
await page.evaluate(() => {
  const code = document.querySelector("pre.code");
  code?.scrollIntoView({ behavior: "instant", block: "start" });
  window.scrollBy({ top: -160, left: 0 });
});
await new Promise((r) => setTimeout(r, 200));
await shot("06-output-cards-top.png");

console.log("→ output cards mid");
await page.evaluate(() => window.scrollBy({ top: 600, left: 0 }));
await new Promise((r) => setTimeout(r, 200));
await shot("07-output-cards-mid.png");

console.log("→ output cards bottom");
await page.evaluate(() => window.scrollBy({ top: 600, left: 0 }));
await new Promise((r) => setTimeout(r, 200));
await shot("08-output-cards-bottom.png");

console.log("→ /agents page");
await page.goto(`${BASE}/agents`, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 500));
await shot("09-agents.png");

console.log("→ /gallery page");
await page.goto(`${BASE}/gallery`, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 500));
await shot("10-gallery.png");

await browser.close();
console.log("done");
