<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl"><router-link to="/home ">Find a Coach</router-link></a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/requests">Requests</router-link></li>
        <li v-else><router-link to="/auth">Login</router-link></li>
        <li v-if="isLoggedIn"><button class="btn btn-secondary" to="/auth" @click="logout">Logout</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/coaches");
    },
  }
}
</script>