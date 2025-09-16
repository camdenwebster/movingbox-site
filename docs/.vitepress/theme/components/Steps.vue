<template>
  <div class="steps">
    <slot></slot>
  </div>
</template>

<style scoped>
.steps {
  counter-reset: step-counter;
  margin: 1.5rem 0;
}

.steps :deep(.step) {
  counter-increment: step-counter;
  position: relative;
  padding-left: 3rem;
  margin-bottom: 2rem;
}

.steps :deep(.step:last-child) {
  margin-bottom: 0;
}

.steps :deep(.step::before) {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  background: #4EB86F;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
}

.steps :deep(.step-title) {
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1f2937;
}

.steps :deep(.step-content) {
  color: #6b7280;
  line-height: 1.6;
}

html.dark .steps :deep(.step-title) {
  color: #f9fafb;
}

html.dark .steps :deep(.step-content) {
  color: #d1d5db;
}
</style>