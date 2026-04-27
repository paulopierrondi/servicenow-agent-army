// ASCII-only color helpers. No emojis. Compatible with NO_COLOR env.

const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m"
} as const;

let colorEnabled = process.stdout.isTTY && !process.env.NO_COLOR;

export function setColorEnabled(value: boolean) {
  colorEnabled = value;
}

function paint(code: string, text: string): string {
  if (!colorEnabled) return text;
  return `${code}${text}${ANSI.reset}`;
}

export const c = {
  bold: (t: string) => paint(ANSI.bold, t),
  dim: (t: string) => paint(ANSI.dim, t),
  red: (t: string) => paint(ANSI.red, t),
  green: (t: string) => paint(ANSI.green, t),
  yellow: (t: string) => paint(ANSI.yellow, t),
  blue: (t: string) => paint(ANSI.blue, t),
  magenta: (t: string) => paint(ANSI.magenta, t),
  cyan: (t: string) => paint(ANSI.cyan, t),
  gray: (t: string) => paint(ANSI.gray, t)
};

export function categoryColor(triggers: string[]): (t: string) => string {
  const blob = triggers.join(" ").toLowerCase();
  if (/(itsm|incident|change|problem|request)/.test(blob)) return c.cyan;
  if (/(itom|cmdb|discovery|aiops|event)/.test(blob)) return c.magenta;
  if (/(csm|case|account|b2c|b2b)/.test(blob)) return c.yellow;
  if (/(architecture|sada|trade-off|roadmap|platform)/.test(blob)) return c.blue;
  if (/(test|atf|regression|judge)/.test(blob)) return c.green;
  return c.gray;
}

export type Column = { header: string; key: string; width?: number };

export function table(rows: Record<string, string>[], columns: Column[]): string {
  const widths = columns.map((col) => {
    const headerWidth = col.header.length;
    const cellWidth = rows.reduce((max, row) => Math.max(max, (row[col.key] ?? "").length), 0);
    return Math.min(col.width ?? Math.max(headerWidth, cellWidth), 80);
  });

  const line = (cells: string[]) =>
    cells.map((cell, i) => cell.padEnd(widths[i] ?? 0).slice(0, widths[i])).join("  ");

  const divider = widths.map((w) => "-".repeat(w)).join("  ");
  const header = c.bold(line(columns.map((col) => col.header)));
  const body = rows.map((row) => line(columns.map((col) => row[col.key] ?? ""))).join("\n");

  return [header, divider, body].join("\n");
}

export function json(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

export function section(title: string): string {
  return `\n${c.bold(title)}\n${c.dim("-".repeat(title.length))}\n`;
}

export class Spinner {
  private frames = ["|", "/", "-", "\\"];
  private index = 0;
  private timer: NodeJS.Timeout | null = null;
  private label: string;
  private active = false;

  constructor(label: string) {
    this.label = label;
  }

  start(): this {
    if (!process.stdout.isTTY || process.env.NO_COLOR) {
      process.stderr.write(`${this.label}...\n`);
      return this;
    }
    this.active = true;
    this.timer = setInterval(() => {
      const frame = this.frames[this.index] ?? "";
      this.index = (this.index + 1) % this.frames.length;
      process.stderr.write(`\r${c.cyan(frame)} ${this.label}`);
    }, 80);
    return this;
  }

  stop(finalLine?: string) {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.active) {
      process.stderr.write(`\r${" ".repeat(this.label.length + 4)}\r`);
    }
    this.active = false;
    if (finalLine) process.stderr.write(`${finalLine}\n`);
  }
}
