<template>
  <v-card flat tile class="flex-column mx-auto" width="50%">
    <div align="center" justify="center">
      <div class="text-h3 my-8">Log in</div>
    </div>

    <form @submit="login" class="mx-auto">
      <v-text-field
        v-model="username"
        :error-messages="usernameErrors"
        label="Username"
        required
        @input="$v.username.$touch()"
        @blur="$v.username.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        type="password"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>

      <v-btn class="mr-4" type="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-card>
</template>
  
  <script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    username: { required },
    password: { required },
  },

  data: () => ({
    username: "",
    password: "",
  }),

  methods: {
    login(event) {
        event.preventDefault();
        this.$store.dispatch('loginUser', {  username: this.username, password: this.password })
    },

    clear() {
      this.$v.$reset();
      this.username = "";
      this.password = "";
    },
  },


  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
  },
};
</script>
  
  <style>
</style>