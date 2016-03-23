<template>
  <div class="moduleListPage">
    <h1>{{ msg }}</h1>
    <h2 v-for = 'module in moduleGet' v-link = "'../context/' + courseGetId + '/' + module.id">{{module.title}}------{{module.description}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是moduleListPage组件！',
      getCoursePath: 'http://121.249.216.217/api/subject/course/' + this.$route.params.courseNumber,
      courseGetId: '',
      moduleGet: []
    }
  },
  ready: function () {
    this.$http.get(this.getCoursePath, function (data) {
      this.moduleGet = data.modules
      this.courseGetId = this.$route.params.courseNumber
      // 向app.vue派发事件
      this.$dispatch('notify_route', 'moduleListPage')
    })
  }
}
</script>

<style>
    .moduleListPage {
        border: solid 1px #000000;
    }
</style>

