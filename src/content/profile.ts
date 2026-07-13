/**
 * Contact and identity details consumed by the card, nav, and footer.
 * One place to edit; no component hard-codes a URL.
 */

export const profile = {
  name: 'Louis LP',
  role: 'Design Engineer',
  roles: [
    'Design Engineer',
    'Software Engineer',
    'Frontend Developer',
    'Full Stack Developer',
    'Motion Designer',
    'Video Editor',
  ],
  email: 'louis.lascelles.palys@gmail.com',
  github: 'https://github.com/LouisLP',
  // TODO: confirm the real LinkedIn slug before deploying
  linkedin: 'https://www.linkedin.com/in/louislp',
  repo: 'https://github.com/LouisLP/me',
  // TODO: placeholder city — set the real one (label + IANA time zone)
  location: {
    city: 'Berlin',
    timeZone: 'Europe/Berlin',
  },
} as const
