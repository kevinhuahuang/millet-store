<template>
  <div id="app">
    <page-catalogue :data-json="dataPage"></page-catalogue>
  </div>
</template>

<script>
// import dataJSON from '@static/json/kind/cellphone.json'
// import dataJSON from '@static/json/kind/children.json'
// import dataJSON from '@static/json/kind/dress.json'
// import dataJSON from '@static/json/kind/household.json'
// import dataJSON from '@static/json/kind/life.json'
// import dataJSON from '@static/json/kind/notepad.json'
// import dataJSON from '@static/json/kind/power.json'
// import dataJSON from '@static/json/kind/router.json'
// import dataJSON from '@static/json/kind/speaker.json'
// import dataJSON from '@static/json/kind/television.json'
import PageCatalogue from '../../../components/catalogue/PageCatalogue'
export default {
  name: 'App',
  data () {
    return {
      dataPage: null
    }
  },
  created: function () {
    // this.dataPage = dataJSON
  },
  components: {PageCatalogue},
  mounted: function () {
    this.getData(this)
  },
  methods: {
    getData: function (host) {
      this.axios.get('/speaker/jsonData').then(function (res) {
        host.dataPage = res.data
      })
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  padding: 0;
  margin: 0;
}
</style>
