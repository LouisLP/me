/**
 * Selected projects — hand-curated, edited in place (see CONTEXT.md:
 * a typed array, no CMS, curation over completeness).
 *
 * Cards are showcases, not links: each renders an example design vignette
 * (`preview`) drawn in CSS/SVG inside the card. `href` is optional and
 * shows as a small "view source" link when present.
 *
 * All entries below except Kabuki are PLACEHOLDERS: plausible shapes to
 * design against until real work is ready to show. Swap them out.
 */

export type ProjectPreview = 'tokens' | 'scrubber' | 'easing' | 'type'

export interface Project {
  title: string
  /** One-sentence framing, plain and warm. */
  description: string
  /** Short mono meta line: stack, medium, or year. */
  meta: string
  /** Which vignette the card draws inside itself. */
  preview: ProjectPreview
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Kabuki',
    description: 'The design system this site runs on: an oklch token architecture with a palette sampled from a kabuki theatre curtain, themed with light-dark() all the way down.',
    meta: 'CSS · design tokens',
    preview: 'tokens',
    href: 'https://github.com/LouisLP/me',
  },
  {
    title: 'Timeline scrubber',
    description: 'A video-editor-style scrubber for browsing long content in the browser, because some habits are worth keeping.',
    meta: 'TypeScript · Canvas',
    preview: 'scrubber',
  },
  {
    title: 'Easing playground',
    description: 'A small tool for comparing easing curves side by side, the way an editor compares takes.',
    meta: 'Vue · SVG',
    preview: 'easing',
  },
  {
    title: 'Title cards',
    description: 'Interface type treatments rebuilt from old title-sequence work, one cut at a time.',
    meta: 'CSS · motion study',
    preview: 'type',
  },
]
