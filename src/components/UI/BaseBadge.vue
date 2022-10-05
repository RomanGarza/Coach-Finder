<template>
  <span v-if="text == 'FRONTEND'" class="badge badge-primary">{{ text }}</span>
  <span v-else-if="text == 'BACKEND'" class="badge badge-secondary">{{ text }}</span>
  <span v-else-if="text == 'CAREER'" class="badge badge-accent">{{ text }}</span>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
