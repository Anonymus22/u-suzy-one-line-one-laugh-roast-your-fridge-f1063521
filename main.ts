// Roast Your Fridge — one-line roast entry.
//
// Joke structure:
//   * Specific, recognisable detail: the fridge hums all night, as if it is
//     working hard (overtime) — every fridge owner knows that constant hum.
//   * Twist / double meaning in the last few words: a fridge's whole job is
//     keeping things "fresh", but the only thing it has ever kept fresh is
//     the owner's disappointment at finding nothing good inside.
//   * Reads aloud as a single flowing line, no setup needing a second sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line itself — original, written for this competition.
const ENTRY =
  "My fridge hums all night like it's on overtime, yet the only thing it's ever kept fresh is my disappointment.";

function validateEntry(entry: string): void {
  // Gate validation: 1–200 characters, not only whitespace, no internal newline.
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
}

validateEntry(ENTRY);

function reportEntry(entry: string): void {
  console.error(`entry: ${entry.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
reportEntry(ENTRY);
