<template>
  <div>
    <div align="center" justify="center">
      <div class="text-h3 my-8">Our trips</div>
    </div>
    <div class="mx-auto" style="width: 60%">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        solo
        color="blue-grey darken-1"
        label="Search trip by destination"
        id="search"
        class="mx-auto"
        v-model="search"
      ></v-text-field>

    <v-card
      v-for="trip in filteredTrips" :key="trip.tripId"
      class="mx-auto mb-10"
      width="1000"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require(`@/assets/${trip.image}`)"
      >
        <v-card-title>{{ trip.destination }}</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div>
          From {{ trip.startDate | formatDate }} to
          {{ trip.endDate | formatDate }}
        </div>
      </v-card-text>
      <v-card-title>From {{ trip.price }}€</v-card-title>

      <v-card-actions>
        <v-btn @click="tripDetail(trip.tripId)" color="blue-grey darken-1" class="ma-2 white--text">
          See details
          <v-icon right>mdi-information</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    search: "",
  }),
  computed: {
    ...mapState(["trips"]),

    filteredTrips() {
      if (this.search.trim() === "") {
        return this.trips.result;
      }
      const searchLower = this.search.trim().toLowerCase();
      return this.trips.result.filter((trip) => trip.destination.toLowerCase().includes(searchLower));
    },
  },
  methods: {
    tripDetail(id) {
      this.$router.push(`trips/${id}`)
    }
  },
  created() { },

};
</script>

<style>
.v-card__text,
.v-card__title {
  padding: 10px 16px 0px;
}
.v-main {
  padding: 0px 0px 100px;
}
.v-input {
  width: 350px;
  flex: none;
}
</style>