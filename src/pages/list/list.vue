<template>
  <div id="app">
    <list-page></list-page>
  </div>
</template>

<script>
import ListPage from '../../components/List/ListPage'
export default {
  name: 'App',
  components: {ListPage}
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
