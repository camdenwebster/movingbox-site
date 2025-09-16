<template>
  <div class="card">
    <div class="card-icon" v-if="icon">
      <i :class="`icon-${icon}`"></i>
    </div>
    <div class="card-content">
      <h3 class="card-title" v-if="title">
        <a :href="href" v-if="href">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </h3>
      <div class="card-description">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  icon?: string
  href?: string
}

defineProps<Props>()
</script>

<style scoped>
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  border-color: #4EB86F;
  box-shadow: 0 4px 12px rgba(78, 184, 111, 0.15);
}

.card-icon {
  width: 48px;
  height: 48px;
  background: #f0f9ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 20px;
  color: #4EB86F;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1f2937;
}

.card-title a {
  color: inherit;
  text-decoration: none;
}

.card-title a:hover {
  color: #4EB86F;
}

.card-description {
  color: #6b7280;
  line-height: 1.6;
  flex: 1;
}

html.dark .card {
  background: #1f2937;
  border-color: #374151;
}

html.dark .card:hover {
  border-color: #4EB86F;
}

html.dark .card-title {
  color: #f9fafb;
}

html.dark .card-description {
  color: #d1d5db;
}

html.dark .card-icon {
  background: #374151;
}
</style>