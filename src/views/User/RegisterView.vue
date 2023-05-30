<template>
  <v-card flat tile class="flex-column mx-auto" width="50%">
    <div align="center" justify="center">
      <div class="text-h3 my-8">Sign up</div>
    </div>

    <form @submit="submit" class="mx-auto">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
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
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree to our terms and conditions?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" type="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-card>
</template>
  
  <script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    username: { required },
    password: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    username: "",
    password: "",
    checkbox: false
  }),

  methods: {
    submit(event) {
        this.$v.$touch();
        event.preventDefault()
        const registerForm = {
            name: this.name,
            username: this.username,
            password: this.password,
            role: false,
            creationDate: new Date().toISOString()
        }
        this.$store.dispatch('addUser', registerForm)
        this.$router.push(`./`)
    },

    clear() {
      this.$v.$reset();
      this.name = "";
      this.username = "";
      this.password = "";
      this.checkbox = false;
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