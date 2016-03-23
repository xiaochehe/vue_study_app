import vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import contextPage from './components/contextPage'
import enrollPage from './components/enrollPage'
import loginPage from './components/loginPage'
import stuInfoPage from './components/stuInfoPage'
import homePage from './components/homePage'
import moduleListPage from './components/moduleListPage'
vue.use(VueRouter)
vue.use(VueResource)
var router = new VueRouter({
  hashbang: false
})
router.map({
  // 登陆界面
  '/login': {
    component: loginPage
  },
  // 注册页面
  '/courseEnroll/:courseNumber': {
    component: enrollPage
  },
  // 课程详细信息页面
  '/courseInfo/:courseNumber': {
    component: contextPage
  },
  // 学生个人中心
  '/stuInfo/:stuNumber': {
    component: stuInfoPage
  },
  // 某课程某单元的内容页面
  '/context/:courseNumber/:moduleNumber': {
    component: contextPage
  },
  // 首页（除去header）
  '*': {
    component: homePage
  },
  'homePage/:stuNumber': {
    component: homePage
  },
  // 单元列表页面
  'moduleList/:courseNumber': {
    component: moduleListPage
  }
})
// vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
vue.http.headers.common['X-CSRFTOKEN'] = 'xkwX9Xgz8WlNXCs4ENyvc6Cqj322eI3j'
// vue.http.headers.common['Access-Control-Allow-Origin'] = 'sadj'
// var request = new XMLHttpRequest()
// request.open('POST', 'http://121.249.216.217/account/login/', true)
// request.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
// request.send('username=113&password=admin113')

router.start(App, '#app')
