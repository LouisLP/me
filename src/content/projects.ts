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
 * Kabuki, Agile UI, and Agile Data Hub are real. The last two entries are
 * PLACEHOLDERS: plausible shapes to design against until real work is ready
 * to show. Swap them out.
 */

export type ProjectPreview = 'tokens' | 'library' | 'marketplace' | 'scrubber' | 'easing'

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
    slug: 'agile-ui',
    title: 'Agile UI',
    description: 'A component library for Agile Robots, grown into a full design system: a headless Reka UI base, three layers of tokens, and a Figma file that matches the CSS one-to-one.',
    meta: 'Vue · Reka UI · Storybook',
    preview: 'library',
    body: [
      'Agile UI is the component library I built at Agile Robots. Underneath is Reka UI, headless and unstyled; on top sits a design system of our own with primitive, semantic, and component-level tokens — the same layering as this site, at company scale.',
      'The decision that paid off most was keeping Figma and the CSS strictly one-to-one. Every variable in the design file had an exact counterpart in code, so when we pointed Figma’s MCP server at a design, what came out was predictable rather than approximate. Designers and engineers stopped negotiating pixel values; the tokens did it for them.',
      'Storybook became the source of truth — the place anyone could browse a component’s variants and states without reading source. And because the base was headless, accessibility was a starting condition rather than a retrofit: keyboard behavior and semantics came with the primitives, and the styling never got a chance to break them.',
    ],
    screenshots: [
      { caption: 'browsing button variants in Storybook', alt: 'Storybook showing Agile UI button variants and controls' },
      { caption: 'tokens in Figma and CSS, one-to-one', alt: 'Figma variables panel beside the matching CSS custom properties' },
    ],
  },
  {
    slug: 'agile-data-hub',
    title: 'Agile Data Hub',
    description: 'A marketplace for robot task datasets — operators browse pre-recorded robot actions and buy the ones their fleet needs. From nothing to a working payment system in a month.',
    meta: 'Nuxt · Stripe · Prisma',
    preview: 'marketplace',
    body: [
      'Agile Data Hub is a marketplace for robot task datasets at Agile Robots: operators browse pre-recorded robot actions and purchase the ones their fleet needs, the way you’d license a stock photo.',
      'We built it from scratch as a full-stack product — Nuxt and Tailwind up front, Prisma and BetterAuth underneath, Stripe handling real payments — in about a month. Francis Gurr led the build; I joined alongside one designer, and the team staying that small is most of why it moved that fast.',
      'A month is a short runway for anything with a payment system in it, so the architecture had to stay boring on purpose: few moving parts, each one chosen to scale past the demo without a rewrite.',
    ],
    screenshots: [
      { caption: 'the dataset catalogue', alt: 'Agile Data Hub grid of robot task datasets' },
      { caption: 'checkout, powered by Stripe', alt: 'Dataset purchase flow with Stripe checkout' },
    ],
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
]
