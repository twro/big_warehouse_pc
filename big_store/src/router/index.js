import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/pages/login/Login'], resolve)
const Index = resolve => require(['@/pages/index/Index'], resolve)
const Home = resolve => require(['@/pages/home/Home'], resolve)
const TabSwiper = resolve => require(['@/components/tabSwiper/tabSwiper'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/index',
        name: 'Index',
        component: Index
      }, {
        path: '/swiper',
        name: 'swiper',
        component: TabSwiper
      }]
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        index: 0
      }
    }
  ]
})
