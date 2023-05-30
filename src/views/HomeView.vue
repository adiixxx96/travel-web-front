<template>
      <v-main>
      <HomeCarousel></HomeCarousel>
      <HomeBenefits></HomeBenefits>
    </v-main>
</template>

<script>
import HomeCarousel from '../components/Home/Carousel.vue'
import HomeBenefits from '../components/Home/Benefits.vue'
export default {
    name: 'App',
    components: {
    HomeCarousel,
    HomeBenefits
  }
}
</script>

<style>

</style>