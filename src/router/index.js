import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import tag from '@/pages/tag'
import about from '@/pages/about'
import article from '@/pages/article'
import domain from '@/pages/domain'

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
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/domain',
      name: 'domain',
      component: domain
    }
  ]
})
