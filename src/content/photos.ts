/**
 * Photo strips punctuating the bio — two sets of five, one per paragraph.
 *
 * Entries without `src` render as empty-print placeholders. To add a photo,
 * run it through `pnpm images:photo` and import it from @/assets/photos.
 */

import agileOneSelfie from '@/assets/photos/agile-one-selfie.webp'
import agileRobotsTeam from '@/assets/photos/agile-robots-team.webp'
import clgCamera from '@/assets/photos/clg-camera.webp'
import clgJersey from '@/assets/photos/clg-jersey.webp'
import clgOnStage from '@/assets/photos/clg-on-stage.webp'
import codingStation from '@/assets/photos/coding-station.webp'
import fidgetHead from '@/assets/photos/fidget-head.webp'
import jobreelTeam from '@/assets/photos/jobreel-team.webp'
import kaltenbergerRitterturnier from '@/assets/photos/kaltenberger-ritterturnier.webp'
import writingOnTable from '@/assets/photos/writing-on-table.webp'

export interface BioPhoto {
  caption: string
  alt: string
  src?: string
}

/** Set one: the video-editing and esports years. */
export const editingEraPhotos: BioPhoto[] = [
  {
    caption: 'interviews',
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
  {
    caption: 'agile robots',
    alt: 'Office selfie with the Agile Robots team, a few arms raised in celebration in the background',
    src: agileRobotsTeam,
  },
  {
    caption: 'jobreel days',
    alt: 'Sitting on wooden steps with the Jobreel team in front of a wall of loft windows',
    src: jobreelTeam,
  },
  {
    caption: 'the night desk',
    alt: 'Home desk at night: a lamp over a laptop on a stand, a monitor glowing beside a plant, everything in warm light',
    src: codingStation,
  },
  {
    caption: 'a coworker',
    alt: 'Selfie with the Agile ONE humanoid robot, flashing a peace sign next to its blue-lit face',
    src: agileOneSelfie,
  },
  {
    caption: 'medieval munich',
    alt: 'Holding a sword up towards the camera at Kaltenberger Ritterturnier, a medieval festival near Munich',
    src: kaltenbergerRitterturnier,
  },
]
