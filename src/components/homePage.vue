<template>
  <div class="homePage">
    <h1>{{ msg }}</h1>
    <my-swipe></my-swipe>
    <subject-detail :from-parenturl = subjectUrl></subject-detail>
    <subject-List></subject-List> 
  </div>
</template>

<script>
import mySwipe from './childVue/mySwipe'
import subjectDetail from './childVue/subjectDetail'
import subjectList from './childVue/subjectList'
export default {
  data () {
    return {
      msg: '这是homePage组件!',
      courseTitle: '',
      courseList: [],
      subjectUrl: ''
    }
  },
  components: {
    mySwipe,
    subjectDetail,
    subjectList
  },
  events: {
    event_notify: function (msg) {
      this.subjectUrl = msg
    }
  },
  ready: function () {
    this.$dispatch('notify_route', 'homePage')
  }
}
</script>
<style>
  .homePage{
    border: solid 1px red;
  }
</style>