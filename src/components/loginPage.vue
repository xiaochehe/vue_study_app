<template>
  <div class="loginPage">
   <label>学号：</label><input placeholder="请输入学号" v-model = "userName"></input>
   <label>密码：</label><input placeholder="请输入密码" v-model = "userPassword"></input>
  </div>
   <button @click = "postForm">登陆</button>
   <h2>学号是：{{userName}}</h2>
   <h2>密码是：{{userPassword}}</h2>
   <h2>userObject:{{userObject | json}}</h2>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是loginPage组件！',
      userName: '',
      userPassword: '',
      userObject: []
    }
  },
  methods: {
    postForm: function () {
      this.userObject.length = 0
      this.userObject.push({'userName': this.userName})
      this.userObject.push({'userPassword': this.userPassword})
      this.$http.post('http://121.249.216.217/api/token/', this.userObject).then(function (data) {
        console.log(data)
      })
    }
  },
  ready: function () {
    this.$dispatch('notify_route', 'loginPage')
  }
}
</script>

