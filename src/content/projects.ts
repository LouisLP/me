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
 * Every entry is real except Timeline scrubber, the remaining PLACEHOLDER:
 * a plausible shape to design against until real work is ready to show.
 */

import agileDataHubHero from '@/assets/screenshots/agile-data-hub-hero.webp'
import agileDataHubOrderReceiptCode from '@/assets/screenshots/agile-data-hub-order-receipt-code.webp'
import agileDataHubOrderReceipt from '@/assets/screenshots/agile-data-hub-order-receipt.webp'
import agileUiFolderStructure from '@/assets/screenshots/agile-ui-folder-structure.webp'
import agileUiStorybook from '@/assets/screenshots/agile-ui-storybook.webp'
import kakiHero from '@/assets/screenshots/kaki-hero.webp'
import kakiPlayground from '@/assets/screenshots/kaki-playground.webp'
import kakiStickerSheet from '@/assets/screenshots/kaki-sticker-sheet.webp'

export interface ProjectHero {
  src: string
  alt: string
}

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
  /** Card hero screenshot carrying the project's look; placeholder frame until set. */
  hero?: ProjectHero
  /** Written detail for the project page, one entry per paragraph. */
  body: string[]
  screenshots: ProjectScreenshot[]
  href?: string
}

export const projects: Project[] = [
  // {
  //   slug: 'kabuki',
  //   title: 'Kabuki',
  //   description: 'The design system this site runs on: an oklch token architecture with a palette sampled from a kabuki theatre curtain, themed with light-dark() all the way down.',
  //   meta: 'CSS · design tokens',
  //   hero: { src: kabukiHero, alt: 'The site hero card in the Kabuki dark theme' },
  //   body: [
  //     'Kabuki is the token system behind this site. The palette comes from the joshiki-maku theatre curtain: sumi ink for the surfaces, kaki persimmon and seiji pine-green as two co-equal interactive hues (rather than the usual accent-plus-status arrangement).',
  //     'The architecture is two layers deep. Primitives hold the raw oklch scales; a semantic layer maps them to intent (canvas, surface, accent, success) and wraps every color in light-dark(), so the whole site retheming is one color-scheme declaration. Components are only allowed to touch the semantic layer.',
  //     'It started as scaffolding for this portfolio and turned into the thing I enjoy explaining.',
  //   ],
  //   screenshots: [
  //     { caption: 'primitive scales, sampled from the curtain', alt: 'Color scale swatches for sumi, kaki, and seiji' },
  //     { caption: 'the same tokens in both themes', alt: 'Side-by-side of the site in dark and light mode' },
  //   ],
  //   href: 'https://github.com/LouisLP/me',
  // },
  {
    slug: 'agile-ui',
    title: 'Agile UI',
    description: 'The component library I built at Agile Robots: Reka UI underneath, a design system of our own on top, and a Figma file that matches the CSS one-to-one.',
    meta: 'Vue · Figma · Storybook',
    hero: { src: agileUiStorybook, alt: 'Storybook showing the AgileCheckbox component and its controls' },
    body: [
      'Agile UI is the component library I built at Agile Robots. Underneath about 75% of the components is Reka UI, a headless/unstyled library. On top sits a design system of our own, with primitive, semantic, and component-level tokens.',
      'Components were always built at a "base", "specialized" or "composite" level. They were placed in their own folders containing the Vue component itself, a test file, and a Storybook story. Therefore, test and Storybook coverage was 100%, which made it easy to keep the library in a healthy state.',
      'The decision that paid off most was keeping Figma and the CSS strictly one-to-one. Every variable in the design file had an exact counterpart in code, which is what made Figma\'s MCP server useful: copy-paste a link to a design into an AI agent harness, and what came out was a predictable recreation using the exact same tokens and base building-blocks.',
      'Storybook became the source of truth, and was a place anyone could browse a component\'s variants and states without digging through source. And because the base was headless, accessibility came built in. Keyboard behavior and semantics arrived with the primitives, and our styling never got a chance to break them.',
    ],
    screenshots: [
      { caption: 'browsing components in Storybook', alt: 'Storybook showing the AgileCheckbox component, its docs, and its controls', src: agileUiStorybook },
      { caption: 'one folder per component', alt: 'VS Code file tree of the Agile UI component library, one folder per Agile-prefixed component', src: agileUiFolderStructure },
    ],
  },
  {
    slug: 'agile-data-hub',
    title: 'Agile Data Hub',
    description: 'A marketplace for robot task datasets: operators browse pre-recorded robot actions and buy the ones their factory needs. From nothing to a working payment system in a month.',
    meta: 'Nuxt · Tailwind · Stripe',
    hero: { src: agileDataHubHero, alt: 'The Agile Data Hub marketing hero, "Datasets for training general-purpose AI models in robotics"' },
    body: [
      'Agile Data Hub is a marketplace for robot task datasets at Agile Robots. Operators browse pre-recorded robot actions and buy the ones their factory needs, the way you\'d license a stock photo.',
      'We built it from scratch as a full-stack product (Nuxt and Tailwind up front, Prisma and BetterAuth underneath, Stripe handling real payments) in about a month. Francis Gurr led the build, and I joined alongside one other designer. The team staying that small is most of why it moved that fast.',
      'A month is a short runway for anything with a payment system in it, but we pulled it off, keeping a consistent design system throughout. I can\'t show much of the end-product itself, as it\'s under NDA, but I hope my description can convey the scope.',
    ],
    screenshots: [
      { caption: 'a real Stripe payment, receipt and all', alt: 'Agile Data Hub order receipt confirming a successful Stripe payment for a robot task dataset', src: agileDataHubOrderReceipt },
      { caption: 'part of the receipt component\'s template', alt: 'OrderReceipt.vue template source for the order receipt component', src: agileDataHubOrderReceiptCode },
    ],
  },
  {
    slug: 'kaki',
    title: 'kaki: Easing Playground',
    description: 'An easing playground: grab the curve by its handles, watch a persimmon act it out, copy the CSS.',
    meta: 'Svelte · cubic-bezier()',
    hero: { src: kakiHero, alt: 'The kaki curve editor and stage, with an overshooting curve loaded' },
    body: [
      'kaki is a small easing playground: you drag a cubic-bezier curve around and a persimmon acts it out on the stage next to it. The stage runs a real CSS animation with the current curve, so the preview is exactly what the copied CSS will do. There\'s no JavaScript reimplementation that could drift from the real thing.',
      'It shares this site\'s Kabuki tokens (vendored, so the copy is free to drift), but the design is a lot more playful than this site with chunkier shapes and such. The name is a coincidence I ran with, since kaki is both the Japanese word for persimmon and the name of the palette\'s orange.',
      'I kept the scope small on purpose. It only handles curves a single cubic-bezier() can express, so no bounce and no elastic. The current curve lives in the URL, which makes every curve a shareable link, and the tests cover just the pure logic (bezier math, the URL codec, preset integrity).',
    ],
    screenshots: [
      { caption: 'an out-back curve on the stage', alt: 'The kaki curve editor with an overshooting out-back curve, and the persimmon mascot on the stage', src: kakiPlayground },
      { caption: 'the sticker sheet of presets', alt: 'A grid of easing presets drawn as tilted sticker cards', src: kakiStickerSheet },
    ],
    href: 'https://github.com/LouisLP/kaki',
  },
]
