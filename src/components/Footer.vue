<template>
      <v-footer padless app>
      <v-card class="flex white--text" flat tile color="blue-grey darken-4">
        <v-card-title class="mx-10">
          <strong>Get connected with us on our social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="28px" color="white">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center blue-grey darken-1">
          {{ new Date().getFullYear() }} — <strong>Nomads Adventures</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterApp',

    data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ]
    }),
}

</script>

<style>

</style>