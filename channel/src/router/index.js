import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const login =()=> import("@/view/login")
const base =()=> import("@/view/base")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/base',
      name: 'base',
      component: base
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
