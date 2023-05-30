<template>
  <v-card class="mx-auto" style="width:95%">
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

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi
              ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
              Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.
              Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet
              velit hendrerit rutrum.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
              Pellentesque libero tortor, tincidunt et, tincidunt eget, semper
              nec, quam. Phasellus blandit leo ut odio.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-form v-if="this.userEdit==false" class="ml-8 mb-8" style="width:500px">
            <v-text-field
              v-model="name"
              label="Name"
              outlined
              disabled
            ></v-text-field>
            <v-text-field
              v-model="username"
              label="Username"
              outlined
              disabled
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
              outlined
              disabled
            ></v-text-field>
            <v-text-field
              v-model="creationDate"
              label="Creation date"
              outlined
              disabled
            ></v-text-field>

            <v-btn class="mr-4" type="submit"> edit </v-btn>
            <v-btn @click="clear"> delete account </v-btn>
          </v-form>

          <v-form v-if="userEdit==true" class="ml-8" style="width:500px">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="username"
              :error-messages="usernameErrors"
              label="Username"
              required
              @input="$v.username.$touch()"
              @blur="$v.username.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              type="password"
              label="Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>

            <v-btn class="mr-4" type="submit"> submit </v-btn>
            <v-btn @click="clear"> clear </v-btn>
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
    },
};
</script>

<style>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-application .primary--text {
  color: goldenrod !important;
}
</style>