<template>
  <div class="loginPage">
   <label>学号：</label><input placeholder="请输入学号" v-model = "userName"></input>
   <label>密码：</label><input placeholder="请输入密码" v-model = "userPassword"></input>
  </div>
   <button @click = "postForm">登陆</button>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是loginPage组件！'
    }
  },
  methods: {
    postForm: function () {
      this.$http.post('http://121.249.216.217/account/login/', {username: '113', password: 'admin113'}).then(function (data) {
        console.log('post成功！')
      }, function (data) {
        console.log(data)
      })
    }
  },
  ready: function () {
    this.$dispatch('notify_route', 'loginPage')
  }
}
</script>

