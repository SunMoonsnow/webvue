import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import Singer from '@/pages/Singer'
import SingerDetail from '@/pages/SingerDetail'
import PlaySong from '@/pages/PlaySong'


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
    },
    {
      path: '/Singer/:sid/:mid',
      component: SingerDetail
    },
    {
      path: '/Singer/:sid/',
      component: PlaySong
    }
  ]
})
