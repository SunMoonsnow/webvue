import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import Singer from '@/pages/Singer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/Index',
      component: Index
    },
    {
      path: '/Singer',
      component: Singer
    }
  ]
})
