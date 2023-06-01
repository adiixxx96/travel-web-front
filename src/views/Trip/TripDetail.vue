<template>
  <div>
    <v-card class="mx-auto my-10" width="700">
      <v-card-title class="my-5">{{
        selectedTrip.destination
      }}</v-card-title>
      <v-img
        class="white--text align-end"
        height="300px"
        :src="require(`@/assets/${selectedTrip.image}`)"
      >
      </v-img>
      <v-card-title
        >From {{ selectedTrip.startDate | formatDate }} to
        {{ selectedTrip.endDate | formatDate }}</v-card-title
      >

      <div class="d-flex">
        <v-card-subtitle>From {{ selectedTrip.price }}€</v-card-subtitle>

        <v-card-subtitle
          >Available spots: {{ selectedTrip.availableSpots }}</v-card-subtitle
        >
      </div>

      <v-card-actions class="d-flex">
        <v-btn
          v-if="this.user != null && !this.selectedTrip.isFull"
          @click="bookTrip()"
          color="blue-grey darken-1"
          class="ma-2 mr-7 white--text"
        >
          Book trip
        </v-btn>
        <router-link to="/trips">
          <v-btn
          color="blue-grey darken-1"
          class="ma-2 white--text"
          outlined
          to="/trips"
        >
          Go back
        </v-btn>
        </router-link>
        
      </v-card-actions>
    </v-card>
    <div v-if="this.user == null" align="center" justify="center">
      <v-alert color="amber lighten-2" type="warning" width="550px"
      class="mb-12">If you want to book this trip, please log in or create a new account</v-alert>
    </div>
    <div v-if="this.selectedTrip.isFull && this.user != null" align="center" justify="center">
      <v-alert color="blue-grey darken-1" type="warning" width="550px"
      class="mx-auto mb-12">Sorry, this trip is sold out</v-alert>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["trips"]),
    ...mapState(["user"]),

    selectedTrip() {
      return this.trips.result.filter((trip) => trip.tripId == this.id)[0];
    },
  },
  methods: {
    bookTrip() {
      const idUser = parseInt(this.user.userId);
      const idTrip = parseInt(this.$route.params.id);
      const booking = { 
        userId: idUser, 
        tripId: idTrip,
       };
      this.$store.dispatch('bookTrip', { idUser, idTrip, booking })
    }
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style>
  .v-card__subtitle {
    padding: 0px 16px;
  }
  .v-alert__content {
    justify-content: flex-start;
    flex: none;
  }
</style>