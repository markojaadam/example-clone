<template>
  <div>
    <v-col cols="12" sm="6" md="3">
      <form>
        <v-text-field :counter="10" label="Name" required></v-text-field>
        <v-text-field label="E-mail" required></v-text-field>
        <v-checkbox label="Do you agree?" required></v-checkbox>

        <router-link to="/dashboard">
          <v-btn class="mr-4">submit</v-btn>
        </router-link>
        <v-btn>clear</v-btn>
      </form>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
