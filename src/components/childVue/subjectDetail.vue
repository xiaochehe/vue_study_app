<template>
  <div class="subjectDetail">
    <h1>{{ msg }}</h1>
    <h1>从父组件homePage传来的props：{{fromParenturl}}</h1>
    <div v-for = "obj in courseFilter" v-link = "'../courseEnroll/' + obj.url.split('/').reverse()[1]">
        <img src="../../assets/logo.png">
        <span>这里是【{{obj.title}}】的简介！</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是subjectDetail组件！',
      subjectObj: [],
      courseFilter: []
    }
  },
  props: ['fromParenturl'],
  ready: function () {
    this.$http.get('http://121.249.216.217/api/subject/course/', function (data) {
      this.subjectObj = data
      this.courseFilter = data
    })
  },
  watch: {
    'fromParenturl': function (value, oldValue) {
      var len = this.subjectObj.length
      this.courseFilter = []
      for (var i = 0; i < len; i++) {
        if (this.subjectObj[i].subject === value) {
          this.courseFilter.push(this.subjectObj[i])
        }
      }
    }
  }

}
</script>

<style type="text/css">
    .subjectDetail
    {
        border: solid 1px blue;
    }
    .subjectDetail img{
      width: 50px
    }
</style>

