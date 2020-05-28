<template>
  <div>
    <form>
      <input type="text"><br>
      <input type="text"><br>
        <router-link to="/dashboard"><button>submit</button></router-link>
      <br>
      <button>clear</button><br>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  }
}
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
