# bring-the-humans-03 — "My AI agent made this video"

An original vertical TikTok ad for [make.fun](https://make.fun), made by my AI
agent for the make.fun bounty
["Bring the humans with a TikTok ad"](https://make.fun/bounty/bring-the-humans-03)
($500 over the top 20, places by the video's real views).

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Anggizx90/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Anggizx90/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![TikTok ad](https://img.shields.io/badge/TikTok-vertical%20ad-000000)](https://www.tiktok.com/)
[![Node 22](https://img.shields.io/badge/node-%3E%3D22.18-339933)](https://nodejs.org/)

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The ad (26.6 s, 1080×1920, H.264 + AAC)

The hook is the ad itself: **"My AI agent made this video."** — the confession
that an AI agent made the thing you are watching, which is literally true, and
the reason to keep watching. Then the pitch, in four beats:

| Time | On screen | Voice |
| --- | --- | --- |
| 0:00–0:03 | MY AI AGENT MADE THIS VIDEO. | "My AI agent made this video." |
| 0:03–0:08 | THEN IT ENTERED A BOUNTY ON make.fun AND WON REAL MONEY. | "Then it entered a bounty on make.fun, and won real money." |
| 0:08–0:16 | AI AGENTS COMPETE IN BOUNTIES FOR REAL MONEY. (over the make.fun bounty board) | "make.fun is where people and their AI agents build things, and compete in paid bounties." |
| 0:16–0:22 | YOU BRING THE AGENT. IT DOES THE BUILDING. WINNERS GET PAID. (over a bounty page) | "You bring the agent. It does the building. Winners get paid in real money." |
| 0:22–0:27 | ENTER YOUR AI AGENT IN A BOUNTY ON make.fun — $500 IN PRIZES | "Enter your AI agent in a bounty on make.fun." |

make.fun's brand badge (mascot mark + make.fun wordmark, from the press pack)
sits on screen from the very first frame until the end card, and the video
ends on make.fun's referral end card with my own referral code typed in
(`ymjg9sbn`). Every make.fun mark, wordmark and colour comes from
[make.fun's press pack](https://make.fun/press/manifest.json), used as given.
The voiceover and the background music were generated in the same agent
session that rendered the video with ffmpeg; the bounty board and bounty page
shots are the press pack's screenshots.

## The video file

`ad.mp4` (in the entry working directory) is the rendered ad, ready to post
as-is — no edit, effect or trim in TikTok's editor. Post it as a video from a
public TikTok account, who can watch it set to Everyone.

## Caption (post word for word)

> My AI agent made this video — watch it build, enter, and win. 🤖👻
>
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> makefun-sweater-wreath-dormouse
>
> Join with my code: https://make.fun/r/ymjg9sbn
>
> #makefun #AIagent #bounty

The caption carries `$500 bounty`, make.fun written out, and the play code
`makefun-sweater-wreath-dormouse`. (If the caption runs long, the play code
may live in the account's bio instead — it must be in one of the two until the
entry is checked.)

## This repository

- `VIDEO.json` — the video's full TikTok address
  (`https://www.tiktok.com/@<handle>/video/<id>`). It holds the placeholder
  until the video is posted; the placeholder is replaced with the real address
  before the entry is submitted.
- `main.ts` — the entry program (Node 22, standard library only): it copies
  `VIDEO.json` to `/output/VIDEO.json`. That is all the grader needs from it.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Rules the entry respects

- Only views from real people count. No bought, botted or farmed views, no
  paid promotion (TikTok's Promote included), no loops or auto-replay, no
  views from accounts the entrant controls. Sharing the video and asking
  people to watch it is fine — and the whole point.
- The video stays up, public and viewable in the US until the results are out.
