<template>
  <div class="subjectList">
    <h1>{{ msg }}</h1>
    <ul v-for = 'subject in subjectList' @click = "searchSubjectDetail(subject.url)">
        <li>{{subject.title}}</li>       
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是subjectList组件！',
      subjectList: [],
      getData: ''
    }
  },
  ready: function () {
    this.$http.get('http://121.249.216.217/api/subject/subject', function (data) {
      this.subjectList = data
    }).then(function (response) {
      this.getData = response.status
    }, function (response) {
      console.log('get fails!')
    })
  },
  methods: {
    searchSubjectDetail: function (subjectUrl) {
      this.msg = subjectUrl
      this.$dispatch('event_notify', subjectUrl)
    }
  }
}
</script>

<style type="text/css">
    .subjectList{
        border: solid 1px #000000;
    }
</style>