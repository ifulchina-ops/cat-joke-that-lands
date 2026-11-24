// The One-Line Cat Joke That Lands — one joke about cats, one line,
// with a setup and a turn that lands.
//
// The program writes that single line to /output/entry.txt. Nothing else:
// the judge reads two jokes at a time and keeps the funnier one.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My cat knocked my phone off the table, watched it fall, then looked up at me like I'd dropped it.";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
  // not only white space, a single line. Fail loudly here rather than
  // shipping an entry the sealed scorer would mark invalid.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
}

main();
