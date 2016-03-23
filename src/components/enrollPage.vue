<template>
  <div class="mySwipe">
    <img src="../assets/logo.png">
    <p >{{courseGet.id}}---{{courseGet.title}}</p>
    <p>课程简介：{{courseGet.overview}}</p>
    <a v-link = "routePath"><button>enroll the class</button></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: this.$route.params.courseNumber,
      routePath: '../moduleList/' + this.$route.params.courseNumber,
      getCoursePath: 'http://121.249.216.217/api/subject/course/' + this.$route.params.courseNumber,
      courseGet: {}
    }
  },
  ready: function () {
    this.$http.get(this.getCoursePath, function (data) {
      this.courseGet = data
      // 向Vue派发事件
      this.$dispatch('notify_route', 'enrollPage')
    })
  }
}
</script>
<style>
  .mySwipe{
    border: solid 1px red;
  }
</style>