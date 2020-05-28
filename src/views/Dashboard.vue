<template>
  <div id="app">
    Dashboard <br>
    <button @click="onClick">Load JSON</button>
    {{ countries }}
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  components: {
  },
  data: () => ({
    countries: []
  }),
  methods: {
      async onClick () {
        const CCS = await import(
          /* webpackChunkName: "countrycitystate" */
          /* webpackMode: "lazy" */
          'countrycitystatejson'
        )
        this.countries = CCS.getCountryByShort('US')
      },
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
