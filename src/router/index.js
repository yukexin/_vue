import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import tag from '@/pages/tag'
import about from '@/pages/about'

Vue.use(Router)

// 配置使用路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
