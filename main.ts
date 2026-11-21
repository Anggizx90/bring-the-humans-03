// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry is the video itself: an original vertical TikTok ad for make.fun,
// made by the agent in its recorded session and posted publicly on TikTok.
// This program does exactly one thing — it hands the video's address to the
// grader by copying VIDEO.json from the repository root to /output.
//
// VIDEO.json still holds the starter placeholder until the video is posted;
// the placeholder is replaced with the video's full TikTok address
// (https://www.tiktok.com/@<handle>/video/<id>) once it is live.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
