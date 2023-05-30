<template>
    <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-row class="fill-height" align="center" justify="center">
            <router-link to="/trips">
            <div class="text-h3 white--text">
              Find out here all our amazing trips!
            </div>
          </router-link>
          </v-row>
        </v-carousel-item>
      </v-carousel>
</template>

<script>
export default {
    name: 'HomeCarousel',
    data: () => ({
        items: [
      {
        src: require("../../assets/vietnam.png"),
      },
      {
        src: require("../../assets/jordania.png"),
      },
      {
        src: require("../../assets/costarica.jpg"),
      },
      {
        src: require("../../assets/islandia.jpg"),
      },
    ],  
    }),
}
</script>

<style>

</style>