import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'HelloWorld',
      component: Index
    },
    {
      path: '/Index',
      //name: 'Index',
      component: Index
    }
  ]
})
