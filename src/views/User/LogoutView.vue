<template>
  <div>
    <v-alert
    color="blue-grey darken-1"
      type="success"
      dismissible
      width="500px"
      class="mx-auto mt-12 mb-12"
      >You have successfully log out</v-alert
    >
    <div class="text-h5" align="center" id="logout">
        You can now return to <span><router-link to='/'>home page</router-link></span> or <span><router-link to='/login'>log in</router-link></span> again
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#logout a {
    color: gold;
}
</style>