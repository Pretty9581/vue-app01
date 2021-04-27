<template>
  <div id="app">
    <Header/>
        <router-view/>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import Header from './components/Header'
export default {
  name: 'App',
  props: {
    msg: String
  },
  components:{
    Tabbar,
    Header
  }
}
</script>

<style>
*{
  padding:0;
  margin: 0;
}
</style>
