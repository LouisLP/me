/**
 * Selected projects — hand-curated, edited in place (see CONTEXT.md:
 * a typed array, no CMS, curation over completeness).
 *
 * All entries below except Kabuki are PLACEHOLDERS: plausible shapes to
 * design against until real work is ready to show. Swap them out.
 */

export interface Project {
  title: string
  /** One-sentence framing, plain and warm. */
  description: string
  href: string
  /** Short mono meta line: stack, medium, or year. */
  meta: string
}

export const projects: Project[] = [
  {
    title: 'Kabuki',
    description: 'The design system this site runs on: an oklch token architecture with a palette sampled from a kabuki theatre curtain.',
    href: 'https://github.com/LouisLP/me',
    meta: 'CSS · design tokens',
  },
  {
    title: 'Timeline scrubber',
    description: 'A video-editor-style scrubber for browsing long content in the browser, because some habits are worth keeping.',
    href: 'https://github.com/LouisLP',
    meta: 'TypeScript · Canvas',
  },
  {
    title: 'Easing playground',
    description: 'A small tool for comparing easing curves side by side, the way an editor compares takes.',
    href: 'https://github.com/LouisLP',
    meta: 'Vue · SVG',
  },
  {
    title: 'Title cards',
    description: 'Interface transitions rebuilt from old title-sequence work, one cut at a time.',
    href: 'https://github.com/LouisLP',
    meta: 'CSS · motion study',
  },
]
