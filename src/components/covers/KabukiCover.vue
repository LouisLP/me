<script setup lang="ts">
const steps = ['50', '100', '200', '300', '500', '600', '800', '950']
const rows = ['sumi', 'kaki', 'seiji']
const colWidth = 400 / steps.length
</script>

<template>
  <svg
    class="cover"
    viewBox="0 0 400 300"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    aria-label="Kabuki's primitive color scales: sumi, kaki, and seiji swatch rows"
  >
    <g v-for="(row, rowIndex) in rows" :key="row">
      <rect
        v-for="(step, stepIndex) in steps"
        :key="step"
        :x="stepIndex * colWidth"
        :y="rowIndex * 100"
        :width="colWidth"
        height="100"
        :style="{ fill: `var(--${row}-${step})` }"
      />
    </g>

    <!-- Kept inside y 90-210: the band that survives the crop on wide cards,
         since preserveAspectRatio="slice" trims top/bottom, not the sides. -->
    <rect x="20" y="118" width="150" height="64" rx="8" fill="rgb(0 0 0 / 55%)" />
    <text x="34" y="150" class="wordmark">kabuki</text>
    <text x="34" y="168" class="subtitle">oklch · design tokens</text>
  </svg>
</template>

<style scoped>
.cover {
  display: block;
  width: 100%;
  height: 100%;
}

.wordmark {
  fill: white;
  font-family: var(--font-code);
  font-size: 22px;
  font-weight: 600;
}

.subtitle {
  fill: rgb(255 255 255 / 75%);
  font-family: var(--font-code);
  font-size: 11px;
  letter-spacing: 0.04em;
}
</style>
