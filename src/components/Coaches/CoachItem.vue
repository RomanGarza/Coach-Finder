<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>$ {{ rate }}/hour</h4>

    <div>
      <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
    </div>
    <div class="actions">
      <router-link class="btn btn-outline btn-info mx-1.5" :to="coachContactLink">Contact</router-link>
      <router-link class="btn btn-info" :to="coachDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

    BaseBadge
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
