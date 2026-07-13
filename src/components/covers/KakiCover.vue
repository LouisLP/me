<script setup lang="ts">
</script>

<template>
  <svg
    class="cover"
    viewBox="0 0 400 300"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    aria-label="A persimmon mascot riding an overshooting easing curve"
  >
    <defs>
      <pattern id="kaki-dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.4" fill="var(--sumi-700)" />
      </pattern>
    </defs>

    <rect width="400" height="300" fill="var(--sumi-950)" />
    <rect width="400" height="300" fill="url(#kaki-dots)" />

    <!-- Kept inside y 90-210: the band that survives the crop on wide cards,
         since preserveAspectRatio="slice" trims top/bottom, not the sides. -->
    <line x1="40" y1="205" x2="330" y2="150" class="baseline" />
    <path d="M40,205 C140,55 220,55 330,150" class="curve" />

    <g transform="translate(330 150)">
      <circle r="46" class="mascot-body" />
      <path d="M-10,-42 Q0,-62 10,-42 Q0,-50 -10,-42 Z" class="mascot-leaf" />
      <path d="M22,-40 L26,-30 L36,-26 L26,-22 L22,-12 L18,-22 L8,-26 L18,-30 Z" class="mascot-sparkle" />
      <circle cx="-14" cy="2" r="3.4" class="mascot-eye" />
      <circle cx="14" cy="2" r="3.4" class="mascot-eye" />
      <path d="M-12,16 Q0,24 12,16" class="mascot-mouth" />
    </g>

    <text x="26" y="200" class="label">cubic-bezier()</text>
  </svg>
</template>

<style scoped>
.cover {
  display: block;
  width: 100%;
  height: 100%;
}

.baseline {
  stroke: var(--sumi-600);
  stroke-dasharray: 5 5;
  stroke-width: 2;
}

.curve {
  fill: none;
  stroke: var(--kaki-500);
  stroke-linecap: round;
  stroke-width: 5;
}

.mascot-body {
  fill: var(--kaki-400);
  stroke: var(--sumi-950);
  stroke-width: 3;
}

.mascot-leaf {
  fill: var(--seiji-500);
}

.mascot-sparkle {
  fill: var(--seiji-300);
}

.mascot-eye {
  fill: var(--sumi-950);
}

.mascot-mouth {
  fill: none;
  stroke: var(--sumi-950);
  stroke-linecap: round;
  stroke-width: 2.5;
}

.label {
  fill: var(--kaki-300);
  font-family: var(--font-code);
  font-size: 14px;
}
</style>
