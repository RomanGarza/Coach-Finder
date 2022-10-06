<template>
  <span v-if="text == 'FRONTEND'" class="badge badge-primary mr-1">{{ text }}</span>
  <span v-else-if="text == 'BACKEND'" class="badge badge-secondary mr-1">{{ text }}</span>
  <span v-else-if="text == 'CAREER'" class="badge badge-accent mr-1">{{ text }}</span>
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
