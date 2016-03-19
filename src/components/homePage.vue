<template>
  <div class="homePage">
    <h1>{{ msg }}</h1>
    <h1>从子组件subjectList传来的地址：{{subjectUrl}}</h1>
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
      msg: '这是homePage组件！这下面还有三个子组件：',
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
  }
}
</script>
<style>
  .homePage{
    border: solid 1px red;
  }
</style>