<script setup lang="ts">
import PhotoStrip from '@/components/PhotoStrip.vue'
import { editingEraPhotos, engineeringEraPhotos } from '@/content/photos'
</script>

<template>
  <div class="bio">
    <p>
      I'm a software engineer with a frontend focus, currently building a robotics IDE at Agile Robots in Munich (and plotting a return to Berlin in October). Before writing code professionally, I spent several years as a senior video editor and motion designer in the esports industry. Eventually I wanted to build the things I was designing, so I went back to school and finished a Computer Science degree at UBC.
    </p>
    <PhotoStrip :photos="editingEraPhotos" />
    <p>
      The mix between creative and technical skills shapes how I work. This tends to put me in the space between design and engineering teams. Day to day that means TypeScript and Vue (with React increasingly in the rotation), design systems, and a lot of opinions about visual hierarchy that I picked up long before I knew what a component library was.
    </p>
    <PhotoStrip :photos="engineeringEraPhotos" />
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
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
}
</style>
