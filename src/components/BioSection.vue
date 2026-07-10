<template>
  <div class="bio">
    <p>
      I started in video: editing, motion graphics, the long nights of
      nudging keyframes until a cut finally breathed. Years of that leave
      you with strong opinions about timing, and a habit of noticing the
      half-second where an experience wins or loses someone.
    </p>
    <p>
      About two years ago I moved to building interfaces full-time.
      Frontend work turned out to be the same discipline in a different
      medium: hierarchy, rhythm, restraint, and a thousand small decisions
      nobody should ever have to notice. The difference is that here, the
      audience can touch the work.
    </p>
    <p>
      Design engineer is the first job title I've seen that describes both
      halves at once. I care about the seam where a designer's intent
      becomes a running interface, and I like owning that seam end to end.
      This site is my working example.
    </p>
  </div>
</template>

<style scoped>
.bio {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  max-width: 42rem;
}

.bio p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* The opening line carries the section — let it read a shade stronger */
.bio p:first-child {
  color: var(--color-text-primary);
}
</style>
