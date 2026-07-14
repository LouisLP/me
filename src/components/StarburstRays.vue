<script setup lang="ts">
type Line = [x1: number, y1: number, x2: number, y2: number]

interface RaySet {
  viewBox: string
  /** Three hand-jittered redraws of the same rays; the boil cycles them */
  frames: [Line[], Line[], Line[]]
}

const { variant = 'stamp' } = defineProps<{
  variant?: keyof typeof VARIANTS
}>()

/* Lines are ordered top-to-bottom / left-to-right within each frame so the
   odd/even color alternation lands on the same ray in every redraw. */
const VARIANTS = {
  /* Compact half-arc over a stamp or badge, radiating up */
  stamp: {
    viewBox: '0 0 120 40',
    frames: [
      [
        [31, 36.2, 25.2, 34.7],
        [37, 24.7, 27.8, 17],
        [47.3, 16.8, 44.8, 11.4],
        [60, 14, 60, 2],
        [72.7, 16.8, 75.2, 11.4],
        [83, 24.7, 92.2, 17],
        [89, 36.2, 94.8, 34.7],
      ],
      [
        [31.4, 35.6, 24.6, 33.9],
        [36.6, 25.3, 28.6, 18.1],
        [47, 17.4, 44.1, 10.8],
        [60.4, 13.6, 60.2, 3],
        [73.1, 16.3, 76, 10.9],
        [83.4, 24.2, 91.5, 16.3],
        [88.6, 36.6, 95.5, 35.2],
      ],
      [
        [30.6, 36.7, 25.7, 35.4],
        [37.4, 24.2, 27.2, 16.4],
        [47.7, 16.3, 45.4, 12],
        [59.6, 14.3, 59.8, 1.4],
        [72.3, 17.2, 74.6, 11.9],
        [82.6, 25.1, 92.8, 17.7],
        [89.3, 35.8, 94.2, 34.1],
      ],
    ],
  },
  /* Large loose rays shooting left off an edge at x=100 — irregular angles,
     lengths, and spacing on purpose. Mirror with `scale: -1 1` for the
     opposite direction. */
  burst: {
    viewBox: '0 0 100 240',
    frames: [
      [
        [92, 30, 55, 12],
        [88, 70, 30, 58],
        [94, 105, 10, 100],
        [90, 140, 38, 152],
        [93, 185, 60, 200],
        [85, 218, 68, 226],
      ],
      [
        [91, 31.5, 52, 10],
        [88.5, 68, 33, 57],
        [93, 106.5, 14, 103],
        [90.5, 141.5, 35, 151],
        [92, 183.5, 57, 197],
        [85.5, 216, 66, 223],
      ],
      [
        [93, 29, 57, 14.5],
        [87.5, 71.5, 28, 60],
        [94.5, 103.5, 7, 98],
        [89.5, 138.5, 41, 154],
        [93.5, 186.5, 62, 203],
        [84.5, 219.5, 70, 228],
      ],
    ],
  },
} satisfies Record<string, RaySet>
</script>

<template>
  <!--
    Old-timey ad emphasis rays, shared wherever the site needs a starburst.
    Three hand-jittered frames swap on a stepped cycle — a cel-animation
    "line boil", so the mark reads as drawn rather than rendered.
    Size and orientation are the consumer's job (width/rotate/scale on root).
  -->
  <svg class="rays" :viewBox="VARIANTS[variant].viewBox" aria-hidden="true">
    <g v-for="(frame, i) in VARIANTS[variant].frames" :key="i" class="frame">
      <line
        v-for="([x1, y1, x2, y2], j) in frame"
        :key="j"
        :x1
        :y1
        :x2
        :y2
      />
    </g>
  </svg>
</template>

<style scoped>
.rays {
  display: block;
  stroke: var(--color-border-default);
  stroke-linecap: round;
  stroke-width: 3;
}

.rays line:nth-child(odd) {
  stroke: var(--color-secondary-default);
}

.rays line:nth-child(even) {
  stroke: var(--color-accent-default);
}

/* One frame at a time; each holds for a third of the cycle */
.frame {
  visibility: hidden;
  animation: boil-frame var(--duration-boil) steps(1) infinite;
}

.frame:nth-child(2) {
  animation-delay: calc(var(--duration-boil) / 3);
}

.frame:nth-child(3) {
  animation-delay: calc(var(--duration-boil) * 2 / 3);
}

@keyframes boil-frame {
  0% {
    visibility: visible;
  }

  33.33% {
    visibility: hidden;
  }
}

@media (prefers-reduced-motion: reduce) {
  .frame {
    animation: none;
  }

  .frame:first-child {
    visibility: visible;
  }
}
</style>
