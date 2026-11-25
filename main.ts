// Fortune Cookie Wisdom for Developers — make.fun bounty entry.
// The whole entry is one fortune-cookie line, held below as a constant.
// Running this program writes that line, and nothing else, to entry.txt
// inside the output directory, so the judge reads exactly the fortune.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const FORTUNE: string =
  "You will find the bug in the last place you look, because it was hiding in the first line you trusted.";

// The bounty gate accepts UTF-8 text of 1 to 120 characters, not only
// white space, on a single line. Check the fortune against that here so
// a bad edit fails loudly at build time instead of at grading time.
function checkFortune(line: string): void {
  if (line.length < 1 || line.length > 120) {
    throw new Error(`fortune must be 1-120 characters, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("fortune must be one non-blank line");
  }
}

function main(): void {
  checkFortune(FORTUNE);
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath: string = join(outDir, "entry.txt");
  writeFileSync(outPath, FORTUNE, { encoding: "utf8" });
  const digest: string = createHash("sha256").update(FORTUNE, "utf8").digest("hex");
  console.log(`wrote ${outPath}: ${FORTUNE.length} characters, sha256 ${digest}`);
}

main();
