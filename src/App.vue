<template>
  <v-app>
    <HeaderApp></HeaderApp>
    <v-main>
      <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h3 white--text">
              Find out here all our amazing trips!
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      
      <v-card flat tile class="flex-column mx-auto" width="90%">
        <div align="center" justify="center">
          <div class="text-h3 my-8">
            Our benefits
          </div>
        </div>
        <v-row class="flex-row justify-center mb-10">
          <v-card class="mx-auto" width="380">
          <div align="center" justify="center">
            <v-icon color="blue-grey darken-4" size="70" class="mt-3">mdi-airplane</v-icon>
          </div>
          <v-card-text align="center" justify="center">
          <p class="text-h5 text--primary">
            We find your flight
          </p>
          <div class="text--primary">
            We help you find the flight that suits you <br>
            better and best fits your budget
          </div>
          </v-card-text>
        <div align="center" justify="center" class="mb-4">
          <router-link to="/trips">
          <v-btn color="blue-grey darken-4" class="ml-4" elevation="2" rounded outlined to="/trips">See more
          </v-btn>
        </router-link>
        </div>
        </v-card>

        <v-card class="mx-auto" width="380">
          <div align="center" justify="center">
            <v-icon color="blue-grey darken-4" size="70" class="mt-3">mdi-airplane</v-icon>
          </div>
          <v-card-text align="center" justify="center">
          <p class="text-h5 text--primary">
            More than 30 destinations
          </p>
          <div class="text--primary">
            We work everyday to find new destinations<br>
            in which to live incredible adventures
          </div>
          </v-card-text>
        <div align="center" justify="center" class="mb-4">
          <router-link to="/trips">
          <v-btn color="blue-grey darken-4" class="ml-4" elevation="2" rounded outlined to="/trips">See more
          </v-btn>
        </router-link>
        </div>
        </v-card>

        <v-card class="mx-auto" width="380">
          <div align="center" justify="center">
            <v-icon color="blue-grey darken-4" size="70" class="mt-3">mdi-airplane</v-icon>
          </div>
          <v-card-text align="center" justify="center">
          <p class="text-h5 text--primary">
            Full travel assistance
          </p>
          <div class="text--primary">
           You won't be travelling alone as you will <br>
           be accompanied by an expert coordinator
          </div>
          </v-card-text>
        <div align="center" justify="center" class="mb-4">
          <router-link to="/trips">
          <v-btn color="blue-grey darken-4" class="ml-4" elevation="2" rounded outlined to="/trips">See more
          </v-btn>
        </router-link>
        </div>
        </v-card>
      </v-row>
      </v-card>
    <FooterApp></FooterApp>
    </v-main>
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

  data: () => ({
    items: [
      {
        src: require("./assets/vietnam.png"),
      },
      {
        src: require("./assets/jordania.png"),
      },
      {
        src: require("./assets/costarica.jpg"),
      },
      {
        src: require("./assets/islandia.jpg"),
      },
    ],
  }),
};
</script>
