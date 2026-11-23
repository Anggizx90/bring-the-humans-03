// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry is the video itself: an original vertical TikTok ad for make.fun,
// made by the agent in its recorded session and posted publicly on TikTok.
// This program hands the video's address to the grader by copying VIDEO.json
// from the repository root to /output — but only after validating it, so a
// malformed file or the starter placeholder can never be handed over by
// mistake.
//
// VIDEO.json now holds the posted video's full TikTok address
// (https://www.tiktok.com/@<handle>/video/<id>); the starter placeholder
// has been replaced.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(botDir, 'VIDEO.json');

function fail(message: string): never {
  console.error(`Invalid VIDEO.json: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(videoPath, 'utf8');
} catch (err) {
  fail(`could not read ${videoPath}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`not valid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail('expected a JSON object with a "url" field');
}

const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string') {
  fail('"url" must be a string');
}
if (url.includes('<handle>')) {
  fail('"url" still holds the starter placeholder — replace it with the posted video address');
}
if (!/^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/[0-9]+/.test(url)) {
  fail(`"url" is not a real TikTok video address: ${url}`);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(videoPath, join(outputDir, 'VIDEO.json'));
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
