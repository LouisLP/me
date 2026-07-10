<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { profile } from '@/content/profile'

function ordinal(day: number): string {
  if (day > 3 && day < 21)
    return 'th'
  switch (day % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

const built = new Date(__BUILD_DATE__)
const buildDate = `${built.toLocaleString('en-US', { month: 'long' })} ${built.getDate()}${ordinal(built.getDate())}, ${built.getFullYear()}`

function localTime(): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: profile.location.timeZone,
  })
    .format(new Date())
    .replace(' AM', ' a.m.')
    .replace(' PM', ' p.m.')
}

const clock = ref(localTime())
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    clock.value = localTime()
  }, 30_000)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <footer id="contact" class="footer">
    <h2 class="visually-hidden">
      Contact
    </h2>
    <div class="inner">
      <div class="top">
        <p class="stamp">
          <span class="stamp-label">Last updated</span>
          <span class="stamp-value">{{ buildDate }}</span>
        </p>

        <div class="note">
          <p class="note-label">
            Note from Louis
          </p>
          <p class="note-line">
            Hi, thanks for scrolling all the way down.
          </p>
          <p class="note-line">
            I think interfaces deserve the same care as a final cut.
          </p>
          <p class="note-line">
            If something here stayed with you,
            <a :href="`mailto:${profile.email}`">say hello</a>.
          </p>
        </div>

        <p class="stamp is-right">
          <span class="stamp-label">Currently</span>
          <span class="stamp-value">{{ profile.location.city }}, {{ clock }}</span>
        </p>
      </div>

      <ul class="tiles">
        <li>
          <a class="tile" :href="`mailto:${profile.email}`" aria-label="Email Louis">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </li>
        <li>
          <a class="tile" :href="profile.linkedin" target="_blank" rel="noopener" aria-label="Louis on LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </li>
        <li>
          <a class="tile" :href="profile.github" target="_blank" rel="noopener" aria-label="Louis on GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </li>
      </ul>

      <p class="colophon">
        This site is the portfolio piece;
        <a :href="profile.repo" target="_blank" rel="noopener">read the source</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-brand);
  color: var(--color-text-on-accent);
  padding-block: var(--space-3xl);
}

/* Kaki focus rings vanish on the kaki band — use ink there instead */
.footer :focus-visible {
  outline-color: var(--color-text-on-accent);
}

.inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  max-width: 68rem;
  margin-inline: auto;
  padding-inline: var(--space-gutter);
}

.top {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.stamp {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding-top: var(--space-md);
}

.stamp.is-right {
  text-align: right;
}

.stamp-label {
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  opacity: 0.75;
  text-transform: uppercase;
}

.stamp-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

/* The note card stays ink-dark in both themes, like a card laid on the band */
.note {
  max-width: 30rem;
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-inverse);
  box-shadow: var(--shadow-lg);
  color: var(--color-text-on-inverse);
  rotate: -1deg;
}

.note-label {
  margin-bottom: var(--space-sm);
  color: var(--color-text-on-inverse-muted);
  font-family: var(--font-code);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

.note-line {
  padding-block: var(--space-sm);
  border-bottom: var(--border-width-thin) solid var(--color-border-on-inverse);
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-snug);
}

.note-line a {
  color: var(--color-accent-on-inverse);
}

.tiles {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  padding: 0;
  list-style: none;
}

.tile {
  display: grid;
  width: 4.5rem;
  height: 4.5rem;
  border: var(--border-width-thick) solid var(--color-text-on-accent);
  border-radius: var(--radius-lg);
  color: var(--color-text-on-accent);
  place-items: center;
  transition:
    rotate var(--duration-normal) var(--ease-out),
    translate var(--duration-normal) var(--ease-out),
    background-color var(--duration-normal) var(--ease-out);
}

.tile svg {
  width: 2rem;
  height: 2rem;
}

/* Tiles sit slightly askew, like stickers; they settle when touched */
li:nth-child(3n + 1) .tile {
  rotate: -2deg;
}
li:nth-child(3n + 2) .tile {
  rotate: 1.5deg;
}
li:nth-child(3n) .tile {
  rotate: -1deg;
}

.tile:hover {
  background-color: oklch(from var(--color-text-on-accent) l c h / 0.08);
  rotate: 0deg;
  translate: 0 -3px;
}

@media (prefers-reduced-motion: reduce) {
  .tile:hover {
    translate: none;
  }
}

.colophon {
  font-size: var(--font-size-xs);
  opacity: 0.85;
  text-align: center;
}

.colophon a {
  color: inherit;
  text-decoration-color: currentcolor;
}

@media (max-width: 799px) {
  .top {
    grid-template-columns: 1fr;
  }

  .stamp,
  .stamp.is-right {
    padding-top: 0;
    text-align: left;
  }

  .note {
    max-width: none;
  }
}
</style>
