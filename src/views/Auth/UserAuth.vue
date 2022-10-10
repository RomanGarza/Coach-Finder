<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred"  @close="handleError">
      <p>{{error}}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating.... ">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password.</p>
        <button class="btn btn-primary m-1" type="submit">{{ submitButtonCaption}}</button>
        <button class="btn btn-outline btn-primary m-1" type="submit" @click="switchAuthMode">{{
        switchModeButtonCaption}}</button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Sign Up';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Sign Up';
      } else {
        return 'Login';
      }
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true; // show spinner

      try {
        if (this.mode === 'login') {
          this.login();
        } else {
          await this.$store.dispatch('signup', { email: this.email, password: this.password });
        }
      } catch (err) {
        this.error = err.message || 'Failed to authenticate. Check your login data.';
      }

      this.isLoading = false; // hide spinner
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null
    }

  }
};
</script>


<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>