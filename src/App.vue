
<template>
    <div>
      <header-bar :now-route = nowRouteview></header-bar> 
      <a v-link = "{path:'/login'}">loginPage!</a> 
      <a v-link = "{path:'/stuInfo/123'}">stuInfoPage!</a>
      <a v-link = "{path:'/'}">homePage!</a>
      <router-view></router-view>
    </div> 
</template>
<script>
  import headerBar from './components/childVue/Header'
  export default{
    components: {
      headerBar
    },
    data () {
      return {
        nowRouteview: ''
      }
    },
    events: {
      'notify_route': function (routeName) {
        this.nowRouteview = routeName
        console.log(routeName)
      }
    }
  }
</script>
<style>
  .v-link-active{
    color:red;
  }
</style>

