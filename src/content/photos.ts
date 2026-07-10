/**
 * Photo strips punctuating the bio — two sets of five, one per paragraph.
 *
 * All entries are PLACEHOLDERS until real photos are dropped in: set `src`
 * (imported asset or public path) and the frame renders the image instead
 * of the empty-print placeholder. Captions are visible either way.
 */

export interface BioPhoto {
  caption: string
  alt: string
  src?: string
}

/** Set one: the video-editing and esports years. */
export const editingEraPhotos: BioPhoto[] = [
  { caption: 'the edit bay', alt: 'Editing workstation with a timeline open' },
  { caption: 'render night', alt: 'Progress bar crawling late at night' },
  { caption: 'esports finals', alt: 'Broadcast control room at an esports event' },
  { caption: 'keyframes', alt: 'Motion graphics curves in an editor' },
  { caption: 'back to school', alt: 'UBC campus' },
]

/** Set two: the engineering years, Munich, and what's next. */
export const engineeringEraPhotos: BioPhoto[] = [
  { caption: 'munich', alt: 'Street scene in Munich' },
  { caption: 'robots at work', alt: 'Robot arm on the lab floor' },
  { caption: 'design reviews', alt: 'Sketches and a laptop on a desk' },
  { caption: 'component work', alt: 'Code editor with a Vue component open' },
  { caption: 'berlin, october', alt: 'Berlin skyline' },
]
