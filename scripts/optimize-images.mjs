#!/usr/bin/env node
/**
 * Optimize images into the site's asset folders.
 *
 * Usage:
 *   pnpm images:photo photos-inbox/IMG_4821.jpg [more files...]
 *   pnpm images:screenshot photos-inbox/scrubber.png [more files...]
 *
 * Flags:
 *   --name=<slug>   Output filename (single input only; default: slugified input name)
 *   --force         Overwrite an existing output
 *
 * Presets:
 *   photo       → src/assets/photos/<name>.webp      480×600 (4:5), cover-cropped
 *   screenshot  → src/assets/screenshots/<name>.webp fits inside 1600×900, no crop
 *
 * Notes:
 *   - Drop originals in photos-inbox/ (gitignored); only optimized output is committed.
 *   - HEIC isn't supported — export from Photos as JPEG/PNG first.
 *   - Use the result via an import, e.g. in src/content/photos.ts:
 *       import munich from '@/assets/photos/munich.webp'
 */

import { existsSync } from 'node:fs'
import { mkdir, stat } from 'node:fs/promises'
import { basename, extname, join } from 'node:path'
import process from 'node:process'
import sharp from 'sharp'

const PRESETS = {
  photo: {
    dir: 'src/assets/photos',
    // 2x the largest rendered print (8.5rem), with headroom; 4:5 like the frames
    resize: { width: 480, height: 600, fit: 'cover', position: 'attention' },
  },
  screenshot: {
    dir: 'src/assets/screenshots',
    // Fits the 44rem reading column at 2x; never crops, never upscales
    resize: { width: 1600, height: 900, fit: 'inside', withoutEnlargement: true },
  },
}

const QUALITY = 80

function slugify(filename) {
  return basename(filename, extname(filename))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function fmtKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} kB`
}

async function run() {
  const [preset, ...rest] = process.argv.slice(2)
  const config = PRESETS[preset]
  const flags = rest.filter(arg => arg.startsWith('--'))
  const inputs = rest.filter(arg => !arg.startsWith('--'))

  if (!config || inputs.length === 0) {
    console.error('Usage: node scripts/optimize-images.mjs <photo|screenshot> <files...> [--name=<slug>] [--force]')
    process.exit(1)
  }

  const force = flags.includes('--force')
  const nameFlag = flags.find(arg => arg.startsWith('--name='))?.slice('--name='.length)
  if (nameFlag && inputs.length > 1) {
    console.error('--name only makes sense with a single input file')
    process.exit(1)
  }

  await mkdir(config.dir, { recursive: true })
  let failures = 0

  for (const input of inputs) {
    const name = nameFlag ?? slugify(input)
    const output = join(config.dir, `${name}.webp`)

    if (existsSync(output) && !force) {
      console.error(`skip  ${output} exists (use --force to overwrite)`)
      continue
    }

    try {
      const before = (await stat(input)).size
      const result = await sharp(input)
        .rotate() // apply EXIF orientation before stripping metadata
        .resize(config.resize)
        .webp({ quality: QUALITY })
        .toFile(output)
      const saved = Math.max(0, Math.round((1 - result.size / before) * 100))
      console.log(`ok    ${input} → ${output}  ${result.width}×${result.height}  ${fmtKb(before)} → ${fmtKb(result.size)} (−${saved}%)`)
    }
    catch (error) {
      failures += 1
      console.error(`fail  ${input}: ${error.message}`)
    }
  }

  process.exit(failures > 0 ? 1 : 0)
}

run()
