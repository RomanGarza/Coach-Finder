<template>
  <li tabindex="0" class="collapse collapse-arrow border border-base-300 bg-slate-300 rounded-box">
    <div class="collapse-title text-xl font-medium bg-primary text-white">
      <a :href="emailLink">Email: {{ email }}</a>
    </div>
    <div class="collapse-content">
      <p>Message: {{ message }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return `mailto:` + this.email
    }
  }
}
</script>

<style scoped>
/* li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
} */
</style>