<template>
  <section>Filter</section>
  <section>
    <base-card>
    <div class="flex justify-between">
      <button>Refresh</button>
      <button>
        <router-link to="/register">Register as a Coach</router-link>
      </button>
    </div>
    <ul v-if="hasCoaches" class="m-0 p-0 list-none">
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      ></coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "../../components/Coaches/CoachItem.vue";
import BaseCard from "../../components/UI/BaseCard.vue";
export default {
  components: { CoachItem, BaseCard },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style></style>
