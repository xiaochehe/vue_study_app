<template>
  <div class="loginPage">
   <label>学号：</label><input placeholder="请输入学号"></input>
   <label>密码：</label><input placeholder="请输入密码"></input>
  </div>
   <button v-link = "{path:'/subjectList/123'}">登陆</button>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是loginPage组件！'
    }
  }
}
</script>

