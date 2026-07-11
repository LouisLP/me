/**
 * Selected projects — hand-curated, edited in place (see CONTEXT.md:
 * a typed array, no CMS, curation over completeness).
 *
 * Each project is a card on the home page and a detail page at
 * /projects/<slug>: `description` is the card one-liner, `body` holds the
 * written detail paragraphs, and `screenshots` render as captioned frames
 * (placeholder frames until `src` is set). `href` is optional and shows as
 * a "view source" link on the detail page only.
 *
 * All entries below except Kabuki are PLACEHOLDERS: plausible shapes to
 * design against until real work is ready to show. Swap them out.
 */

export type ProjectPreview = 'tokens' | 'scrubber' | 'easing' | 'type'

export interface ProjectScreenshot {
  caption: string
  alt: string
  src?: string
}

export interface Project {
  slug: string
  title: string
  /** One-sentence framing for the card, plain and warm. */
  description: string
  /** Short mono meta line: stack, medium, or year. */
  meta: string
  /** Which vignette the card draws inside itself. */
  preview: ProjectPreview
  /** Written detail for the project page, one entry per paragraph. */
  body: string[]
  screenshots: ProjectScreenshot[]
  href?: string
}

export const projects: Project[] = [
  {
    slug: 'kabuki',
    title: 'Kabuki',
    description: 'The design system this site runs on: an oklch token architecture with a palette sampled from a kabuki theatre curtain, themed with light-dark() all the way down.',
    meta: 'CSS · design tokens',
    preview: 'tokens',
    body: [
      'Kabuki is the token system behind this site. The palette comes from the joshiki-maku theatre curtain: sumi ink for the surfaces, kaki persimmon and seiji pine-green as two co-equal interactive hues rather than the usual accent-plus-status arrangement.',
      'The architecture is two layers deep. Primitives hold the raw oklch scales; a semantic layer maps them to intent (canvas, surface, accent, success) and wraps every color in light-dark(), so the whole site retheming is one color-scheme declaration. Components are only allowed to touch the semantic layer.',
      'It started as scaffolding for this portfolio and turned into the thing I most enjoy explaining. That felt like a sign it should be the first project on the page.',
    ],
    screenshots: [
      { caption: 'primitive scales, sampled from the curtain', alt: 'Color scale swatches for sumi, kaki, and seiji' },
      { caption: 'the same tokens in both themes', alt: 'Side-by-side of the site in dark and light mode' },
    ],
    href: 'https://github.com/LouisLP/me',
  },
  {
    slug: 'timeline-scrubber',
    title: 'Timeline scrubber',
    description: 'A video-editor-style scrubber for browsing long content in the browser, because some habits are worth keeping.',
    meta: 'TypeScript · Canvas',
    preview: 'scrubber',
    body: [
      'Placeholder copy: what the scrubber is, why an editing-timeline mental model beats a plain progress bar for long content, and what it felt like to rebuild a tool I used daily for years.',
      'Placeholder copy: the interesting technical bits — canvas rendering, pointer handling, keyboard support, and how the playhead stays interruptible.',
    ],
    screenshots: [
      { caption: 'the scrubber over a long transcript', alt: 'Timeline scrubber component in context' },
      { caption: 'zoomed to frame level', alt: 'Close-up of scrubber tick marks and playhead' },
    ],
  },
  {
    slug: 'easing-playground',
    title: 'Easing playground',
    description: 'A small tool for comparing easing curves side by side, the way an editor compares takes.',
    meta: 'Vue · SVG',
    preview: 'easing',
    body: [
      'Placeholder copy: why comparing two eases side by side (like A/B-ing two takes in an edit bay) beats staring at cubic-bezier numbers.',
      'Placeholder copy: how the curves are drawn and previewed, and what shipping it taught me about motion tokens.',
    ],
    screenshots: [
      { caption: 'two curves, one motion preview', alt: 'Easing playground comparing two curves' },
    ],
  },
  {
    slug: 'title-cards',
    title: 'Title cards',
    description: 'Interface type treatments rebuilt from old title-sequence work, one cut at a time.',
    meta: 'CSS · motion study',
    preview: 'type',
    body: [
      'Placeholder copy: taking type treatments from old title-sequence work and rebuilding them as live, accessible interface states.',
      'Placeholder copy: what survives the translation from After Effects to CSS, and what has to be rethought entirely.',
    ],
    screenshots: [
      { caption: 'a title treatment, before and after', alt: 'Type specimen rebuilt as a web component' },
    ],
  },
]
