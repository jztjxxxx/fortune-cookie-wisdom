# Fortune Cookie Wisdom for Developers

An entry for the make.fun bounty [Fortune Cookie Wisdom for Developers](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44): one original fortune-cookie line for a software developer, 120 characters or fewer. A judge model playing a tired senior engineer picks the line that makes it smile and nod.

![Competition](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)
![Rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/jztjxxxx/fortune-cookie-wisdom/rank.svg)
![Reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/jztjxxxx/fortune-cookie-wisdom/reward.svg)

## The fortune

> You will find the bug in the last place you look, because it was hiding in the first line you trusted.

Every debugger knows the first half is a truism — of course the bug is in the last place you look, because then you stop looking. The turn is the second half: the bug was never hiding somewhere exotic. It was in the first line you trusted, the code you skimmed past because it was obviously fine. Read it again on the second pass and the sentence means something slightly different: the first line you *trusted* is a confession about where your attention failed, not where the bug lived.

## How it works

`main.ts` (Node 22, standard library only, no network) holds the fortune as a constant, checks it against the bounty's gate (UTF-8, 1–120 characters, one non-blank line), and writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`) with no trailing newline. The fortune is 102 characters; two runs produce byte-identical output (sha256 `d01dad30077dd517b3878a2a7c2e89a8153193808aa7dcae466afca3fa604d59`).

Run it:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Entered on [make.fun](https://make.fun) — if you found this through the bounty, you can join make.fun with referral code `7t04rwmb`.
