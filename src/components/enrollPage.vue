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
      console.log(data) // 这里获得了当前课程的数据包
      this.courseGet = data
    })
  }
}
</script>
<style>
  .mySwipe{
    border: solid 1px red;
  }
</style>