# CONTEXT.md

What this site is, who it's for, and the decisions already made. Read this before building or changing anything user-facing.

## Purpose

A minimal single-page portfolio for Louis LP, published at `louislp.github.io/me`. Its job is to land Design Engineer interviews. The site itself is the primary work sample: a hiring manager should feel the craft (motion, typography, polish) before they've read a word. Every choice optimizes for that first impression, not for breadth of content.

Louis's arc: video editor, then motion designer, then roughly two years as a frontend-oriented developer. Design Engineer roles are the target because they bridge those two domains. The site's argument is that the bridge already exists.

## Audience and win condition

Hiring managers and design engineers deciding whether to interview Louis. Assume a 30-second first scan. The win is: "this person clearly has both taste and engineering ability, let's talk." Everything on the page is curated for that reader; there is no secondary audience to serve.

## Page anatomy

One page, no router. Top to bottom:

1. **Hero.** The name "Louis LP" plus a short role framing. This is also the `<title>`.
2. **The arc, in one paragraph.** A single tight paragraph telling the story: video editor, motion designer, frontend developer, design engineer. Stated once, plainly. The site's behavior does the rest of the arguing.
3. **Selected projects.** Three to five hand-picked pieces. Each entry is a title, a one-sentence framing, and a link out (GitHub or live site). Data lives in a simple typed array in the repo. No CMS, no GitHub API fetching. Curation over completeness.
4. **Contact.** GitHub, LinkedIn, email. Links out, nothing clever.

There is deliberately no showreel, video archive, or "past life" gallery. The motion-design history is proven by how the site moves, not by hosting old video work.

## Motion doctrine

This is the part that carries the portfolio argument, so it's doctrine, not suggestion:

- **One choreographed entrance.** A single well-directed page-load sequence (staggered, editorial) where the motion-design eye shows. Impressive once.
- **Calm after.** Past the entrance, restraint: fast micro-interactions on hover and focus, quality easing, interruptible transitions. Nothing ambient, nothing looping, nothing that moves while the user reads.
- **Reduced motion is non-negotiable.** `prefers-reduced-motion` gets a fully usable, dignified experience, not a broken one.
- **Tokens, not magic numbers.** Durations and easings come from the design tokens (`--duration-*`, `--ease-*`). If a new motion value is needed, add a token.

## Voice

Plain and warm. First person, confident without buzzwords, reads like a person rather than a brand. Something in the spirit of "I spent years making video move; now I build interfaces that do." Placeholder copy written by agents should match this register.

## Design system: Kabuki

The token system in `src/styles/` is called Kabuki. Its palette comes from the joshiki-maku kabuki theatre curtain: sumi (ink), kaki (persimmon), seiji (pine green). Dark-first, oklch, `light-dark()` throughout, primitives consumed only through the semantic layer.

Two rules about it:

- **The palette and token architecture are canon.** Extend the system; don't replace or second-guess it. New components consume semantic tokens only.
- **The theatre metaphor is not a design concept.** No curtain reveals, no stage or performance language in the UI. Kabuki is a palette with a good origin story, nothing more.

## Recorded decisions

- **Plain Vite + Vue SPA, no framework migration.** For one page the payload is tiny and static meta tags in `index.html` cover link previews. Revisit only if the site ever grows real pages (writing, case studies), in which case prerendering or Nuxt becomes worth discussing.
- **Hosting: GitHub Pages, project path.** The site serves from `louislp.github.io/me`. Setting up deployment will require `base: '/me/'` in `vite.config.ts`.
- **No router.** One page. Anchor links at most.
- **Project data in the repo.** A typed array, edited by hand. Curation is the feature.
- **Docs split.** `README.md` is the short human-facing intro (the repo is public and recruiters may read it), this file holds the vision, and `CLAUDE.md` stays thin with pointers. Substantial architecture decisions from here on should start `docs/adr/`.
