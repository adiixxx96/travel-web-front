<template>
  <v-card class="mx-auto no-border" style="width: 95%">
    <v-toolbar flat color="white" dark class="black--text mx-auto my-4">
      <v-toolbar-title class="text-h4">Admin settings </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        All Users
      </v-tab>
      <v-tab>
        <v-icon left> mdi-earth </v-icon>
        All Trips
      </v-tab>
      <v-tab>
        <v-icon left> mdi-cart-outline </v-icon>
        Bookings
      </v-tab>

      <v-tab-item class="ml-12" style="width:1000px">
        <v-data-table
          :headers="userHeaders"
          :items="users"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-tab-item>
        
      <v-tab-item class="ml-12" style="width:1000px">
        <v-data-table
          :headers="tripHeaders"
          :items="trips.result"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-tab-item>

      <v-tab-item class="ml-12" style="width:1000px">
        <v-data-table
          :headers="bookingHeaders"
          :items="allBookings"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-tab-item>

    </v-tabs>
  </v-card>
</template>
  
  <script>
import { mapState } from "vuex";

export default {
  data () {
    return {
        userHeaders: [
            { text: 'User id', value: 'userId' },
            { text: 'Name', value: 'name' },
            { text: 'Username', value: 'username' },
            { text: 'Role', value: 'role' },
            { text: 'Creation Date', value: 'creationDate'}
        ],
        tripHeaders: [
            { text: 'Trip id', value: 'tripId' },
            { text: 'Destination', value: 'destination' },
            { text: 'Start Date', value: 'startDate' },
            { text: 'End Date', value: 'endDate' },
            { text: 'Price', value: 'price'},
            { text: 'Available Spots', value: 'availableSpots'},
            { text: 'Full', value: 'isFull'}

        ],
        bookingHeaders: [
            { text: 'Booking id', value: 'bookingId' },
            { text: 'User id', value: 'userId' },
            { text: 'Trip id', value: 'tripId' },
            { text: 'Final Price', value: 'finalPrice' },
            { text: 'Booking date', value: 'bookingDate'}
        ]
    }
  }, 
  computed: {
    ...mapState(["users"]),
    ...mapState(["trips"]),
    ...mapState(["allBookings"]),
  },
  
};
</script>
  
  <style>
.no-border.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-application .primary--text {
  color: goldenrod !important;
}
</style>