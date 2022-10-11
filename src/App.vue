<script>
import { RouterView } from "vue-router";
import MainHeader from "../src/components/Layout/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.push("/coaches");
      }
    },
  },
};
</script>

<template>
  <MainHeader />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style>
.route-enter-from {
  opacity: 0;
  transform: "translateY(-30px)";
}

.route-leave-to {
  opacity: 0;
  transform: "translateY(30px)";
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: "translateY(0px)";
}
</style>
