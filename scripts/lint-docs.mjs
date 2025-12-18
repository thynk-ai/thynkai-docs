import { readFileSync, existsSync } from "node:fs";

const required = [
  "docs/VISION.md",
  "docs/PRINCIPLES.md",
  "docs/ARCHITECTURE.md",
  "docs/ROADMAP.md",
  "docs/GOVERNANCE_PREVIEW.md",
  "docs/FAQ.md",
  "docs/GLOSSARY.md",
];

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

for (const p of required) {
  assert(existsSync(p), "Missing required doc: " + p);
  const body = readFileSync(p, "utf8").trim();
  assert(body.length > 200, "Doc too short (likely placeholder): " + p);
}

console.log("OK: docs lint passed.");
