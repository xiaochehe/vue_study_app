<template>
  <div class="mySwipe">
    <h1>{{ msg }}</h1>
    <ul>
        <a v-link = "{path: '../courseEnroll/001'}"><li>这是Course One的图片1</li></a>
        <a v-link = "{path: '../courseEnroll/002'}"><li>这是Course Two的图片2</li></a>
        <a v-link = "{path: '../courseEnroll/003'}"><li>这是Course Three的图片3</li></a>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是mySwipe组件！'
    }
  }
}
</script>

<style type="text/css">
    .mySwipe{
        border: solid 1px red;
    }
</style>

