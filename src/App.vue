<template>
  <v-app>
    <HeaderApp></HeaderApp>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterApp></FooterApp>
  </v-app>
</template>

<script>
import HeaderApp from './components/Header.vue'
import FooterApp from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp
  },
  created() {
    this.$store.dispatch('listTrips')
    this.$store.dispatch('listAllBookings')
    this.$store.dispatch('listAllUsers')
  },
};
</script>
