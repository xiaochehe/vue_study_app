<template>
  <div class="stuInfoPage">
    <h1>{{ msg }}</h1>
    <h1>{{$route.params.stuNumber}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '这是stuInfoPage组件！'
    }
  },
  ready: function () {
    this.$dispatch('notify_route', 'stuInfoPage')
  }
}
</script>

