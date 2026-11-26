// One Star, Five Stars for the Food — make.fun entry (program/v1)
// Writes one sentence — an alien tourist's one-star review of planet Earth
// that still compliments the food — to /output/entry.txt
// (gate: UTF-8 text, 1-200 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star: the natives breathe the same sky they set on fire, pay rent just to sleep indoors, and treat standing in line as a hobby — but the ramen alone almost justifies the landing permit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} chars to /output/entry.txt`);
