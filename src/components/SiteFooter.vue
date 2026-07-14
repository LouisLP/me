<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import IconMail from '~icons/lucide/mail'
import IconGithub from '~icons/simple-icons/github'
import IconLinkedin from '~icons/simple-icons/linkedin'
import { profile } from '@/content/profile'

const built = new Date(__BUILD_DATE__)
const buildDate = built.toLocaleString('en-US', { month: 'long', year: 'numeric' })

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
            <IconMail />
          </a>
        </li>
        <li>
          <a class="tile" :href="profile.linkedin" target="_blank" rel="noopener" aria-label="Louis on LinkedIn">
            <IconLinkedin />
          </a>
        </li>
        <li>
          <a class="tile" :href="profile.github" target="_blank" rel="noopener" aria-label="Louis on GitHub">
            <IconGithub />
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
  /* Arched top edge: the band crests at the center and slips away at the sides */
  border-top-left-radius: 50% var(--radius-arch);
  border-top-right-radius: 50% var(--radius-arch);
  background-color: var(--color-bg-brand);
  color: var(--color-text-on-accent);
  padding-block: calc(var(--space-3xl) + var(--radius-arch) / 2) var(--space-3xl);
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
