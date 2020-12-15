<template>
  <div id="app">
    <Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="sass">
body  
  margin: 0
  background-color: white
  letter-spacing: .4px
#app 
  margin: 0
  font-family: 'Montserrat', sans-serif
  padding-top: 48px
  text-align: center
a
  text-decoration: none

</style>
