<template>
  <div class="card-group" :class="`cols-${cols || 2}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  cols?: number
}

defineProps<Props>()
</script>

<style scoped>
.card-group {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.cols-1 {
  grid-template-columns: 1fr;
}

.cols-2 {
  grid-template-columns: repeat(1, 1fr);
}

.cols-3 {
  grid-template-columns: repeat(1, 1fr);
}

.cols-4 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 640px) {
  .cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .cols-4 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>