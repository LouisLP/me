/**
 * Photo strips punctuating the bio — two sets of five, one per paragraph.
 *
 * Entries without `src` render as empty-print placeholders. To add a photo,
 * run it through `pnpm images:photo` and import it from @/assets/photos.
 */

import clgCamera from '@/assets/photos/clg-camera.webp'
import clgJersey from '@/assets/photos/clg-jersey.webp'
import clgOnStage from '@/assets/photos/clg-on-stage.webp'
import fidgetHead from '@/assets/photos/fidget-head.webp'
import writingOnTable from '@/assets/photos/writing-on-table.webp'

export interface BioPhoto {
  caption: string
  alt: string
  src?: string
}

/** Set one: the video-editing and esports years. */
export const editingEraPhotos: BioPhoto[] = [
  {
    caption: 'shooting interviews',
    alt: 'Behind the camera at a player interview shoot: a camera and softbox in the foreground, a player in a CLG jersey and headphones at the table',
    src: clgCamera,
  },
  {
    caption: 'the lcs stage',
    alt: 'The LCS studio during a match: two teams at their stations under a giant screen showing League of Legends, crowd in the foreground',
    src: clgOnStage,
  },
  {
    caption: 'trustyturkey',
    alt: 'Pointing both thumbs at the back of a CLG jersey with the name TrustyTurkey printed across the shoulders',
    src: clgJersey,
  },
  {
    caption: 'mascot duty',
    alt: 'Wearing the Fidget mascot head (Misfits Gaming\'s mascot), flashing a peace sign',
    src: fidgetHead,
  },
  {
    caption: 'scripting',
    alt: 'Writing on paper at a wooden table, hood up and glasses on, phone within reach',
    src: writingOnTable,
  },
]

/** Set two: the engineering years, Munich, and what's next. */
export const engineeringEraPhotos: BioPhoto[] = [
  { caption: 'munich', alt: 'Street scene in Munich' },
  { caption: 'robots at work', alt: 'Robot arm on the lab floor' },
  { caption: 'design reviews', alt: 'Sketches and a laptop on a desk' },
  { caption: 'component work', alt: 'Code editor with a Vue component open' },
  { caption: 'berlin, october', alt: 'Berlin skyline' },
]
