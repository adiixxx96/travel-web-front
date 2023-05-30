<template>
  <v-header>
      <v-app-bar color="blue-grey darken-4" height="80px">
        <div class="d-flex align-center">
          <router-link to="/">
            <v-img alt="Nomads Adventure Logo" class="shrink mr-2" contain src="../assets/logo.png"
            transition="scale-transition" width="65" to="/"/>
          </router-link>
          <router-link to="/">
            <v-toolbar-title class="logo-title white--text" to="/">Nomads Adventures</v-toolbar-title>
          </router-link> 
        </div>

        <v-spacer></v-spacer>
        
        <v-btn to="/" v-show="$route.name!=='home'" text class="white--text mr-1">Home</v-btn>
        <v-btn to="/trips" v-show="$route.name!=='trips'" text class="white--text mr-5">All trips</v-btn>
        <span v-if="$store.state.isAdmin===1">
        <router-link to="/admin">
          <v-icon color="amber lighten-2" to="/admin" large>mdi-cog
          </v-icon>
        </router-link>
        </span>
        <span v-if="$store.state.user===null">
          <router-link to="/register">
          <v-btn color="amber lighten-2" class="ml-4 white--text" elevation="2" rounded to="/register">Sign Up
          </v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn color="blue-grey darken-1" class="mx-4 white--text" elevation="2" rounded to="/login">Log In
          </v-btn>
        </router-link>
        </span>
        <span v-else>
          <router-link to="/user">
          <v-btn color="amber lighten-2" class="ml-4 white--text" elevation="2" rounded to="/user">My personal area
          </v-btn>
        </router-link>
          <v-btn @click="$store.dispatch('logout')" color="blue-grey darken-1" class="mx-4 white--text" elevation="2" rounded>Log Out
          </v-btn>
        </span>     
      </v-app-bar>
    </v-header>
</template>

<script>
export default {
    name: 'HeaderApp'
}
</script>

<style>
  .v-application a{
    text-decoration: none;
  }

</style>