<template>
  <div class="step">
    <h3 class="step-title" v-if="title">{{ title }}</h3>
    <div class="step-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>