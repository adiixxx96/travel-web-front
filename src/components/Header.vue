<template>
  <v-header>
      <v-app-bar color="blue-grey darken-4" height="80px">
        <div class="d-flex align-center">
          <v-img alt="Nomads Adventure Logo" class="shrink mr-2" contain src="../assets/logo.png"
            transition="scale-transition" width="65" />
          <v-toolbar-title class="white--text">Nomads Adventures</v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <router-link to="/about">
          <v-icon color="amber lighten-2" to="/about" large>mdi-information
          </v-icon>
        </router-link>

        <router-link to="/register">
          <v-btn color="amber lighten-2" class="ml-4 white--text" elevation="2" rounded to="/register">Sign Up
          </v-btn>
        </router-link>

        <router-link to="/login">
          <v-btn color="blue-grey darken-1" class="mx-4 white--text" elevation="2" rounded to="/login">Log In
          </v-btn>
        </router-link>
      </v-app-bar>
    </v-header>
</template>

<script>
export default {
    name: 'HeaderApp'
}
</script>

<style>

</style>