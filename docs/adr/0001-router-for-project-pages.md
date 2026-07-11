# 0001 — Add vue-router for project detail pages

Date: 2026-07-11
Status: accepted

## Context

The original plan (recorded in CONTEXT.md) was one page with no router; project entries were cards with an optional external link. In practice most projects won't have a public link worth sending a hiring manager to — the interesting material is the written story and screenshots, which need more room than a card.

## Decision

Add vue-router with web history. Two real routes: `/` (the existing single page) and `/projects/:slug` (a focused reading column per project: paragraphs, captioned screenshot frames, optional source link). Unknown paths redirect home. Project data stays a typed array in `src/content/projects.ts`; the detail page renders from the same entry as the card.

## Consequences

- GitHub Pages doesn't know about SPA routes, so deployment needs a `404.html` that is a copy of `index.html` (standard SPA-on-Pages fallback), on top of the already-recorded `base: '/me/'`.
- The home page owns the rail/nav; project pages are deliberately chrome-light (back link, content, shared footer).
- Link previews for individual projects share the site-wide meta tags until prerendering is ever adopted; revisit only if that starts to matter.
