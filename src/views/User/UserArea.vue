<template>
  <v-card class="mx-auto no-border" style="width:95%">
    <v-toolbar flat color="white" dark class="black--text mx-auto my-4">
      <v-toolbar-title class="text-h4">My personal area </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left> mdi-airplane-clock </v-icon>
        My trips
      </v-tab>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        Account
      </v-tab>

      <v-tab-item class="d-flex flex-wrap">
        <v-card
      v-for="booking in this.userBookings" :key="booking.bookingId"
      class="mx-auto mb-10 ml-12"
      width="500"
    >
      <v-card-title>{{ booking.destination }}</v-card-title>
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require(`@/assets/${booking.image}`)">
      </v-img>

      <v-card-text class="text--primary">
        <div>
          From {{ booking.startDate }} to {{ booking.endDate }}
        </div>
      </v-card-text>
      <v-card-title>Total price {{ booking.price }}€</v-card-title>

      <v-card-actions>
        <v-btn @click="deleteBooking(booking.tripId)" color="red" class="ma-2 white--text">
          Cancel booking
          <v-icon right>mdi-information</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-form v-if="this.userEdit==false" class="ml-12 mb-8 mt-5" style="width:500px">
            <v-text-field
              v-model=this.user.name
              label="Name"
              outlined
              readonly
              disabled
            ></v-text-field>
            <v-text-field
              v-model=this.user.username
              label="Username"
              outlined
              readonly
              disabled
            ></v-text-field>
            <v-text-field
              v-model=this.user.password
              type="password"
              label="Password"
              outlined
              disabled
            ></v-text-field>
            <v-text-field
              v-model=this.user.creationDate
              label="Creation date"
              outlined
              disabled
            ></v-text-field>

            <v-btn @click="setIsEdit()" class="mr-4 white--text" color="blue-grey darken-1"> edit </v-btn>
            <v-btn @click="deleteUser()" class="mr-4 white--text" type="submit" color="red" > delete account </v-btn>
          </v-form>

          <v-form v-if="this.userEdit==true" class="ml-12 mb-8 mt-5" style="width:500px">
            <v-text-field
              v-model=this.user.name
              label="Name"
              outlined
            ></v-text-field>
            <v-text-field
              v-model=this.user.username
              label="Username"
              outlined
            ></v-text-field>
            <v-text-field
              v-model=this.user.password
              type="password"
              label="Password"
              outlined
            ></v-text-field>
            <v-text-field
              v-model=this.user.creationDate
              label="Creation date"
              outlined
              readonly
            ></v-text-field>

            <v-btn class="mr-4 white--text" type="submit" color="blue-grey darken-1"> submit </v-btn>
            <v-btn @click="setIsEdit()" class="mr-4"> cancel </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
    ...mapState(["userEdit"]),
    ...mapState(["user"]),
    ...mapState(["userBookings"])
    },
    methods: {
      setIsEdit() {
        this.$store.commit('changeEditStatus')
      },
      deleteUser() {
        const userId = parseInt(this.user.userId);
        this.$store.dispatch('deleteUser', userId)
      },
      deleteBooking(tripId) {
        const userId = parseInt(this.user.userId);
        this.$store.dispatch('deleteBooking', {  userId, tripId })
      },
      onsubmit(event) {
        event.preventDefault()
        const editData = {
          userId: parseInt(this.user.userId),
          name: this.user.name,
          username: this.user.username,
          password: this.user.password,
          role: this.user.role,
          creationDate: this.user.creationDate
        }
        this.$store.dispatch('editUser', editData)
        this.$store.commit('changeEditStatus')
      }
    }

}

</script>

<style>
.no-border.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-application .primary--text {
  color: goldenrod !important;
}
</style>