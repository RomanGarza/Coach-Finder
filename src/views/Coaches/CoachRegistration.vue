<template>
  <section>
    <base-card>
      <h2 class="card-title">Register as a Coach</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/Coaches/CoachForm.vue";

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
