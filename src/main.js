// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import './assets/index.less'
// import './assets/icon.less'
// import './assets/theme.less'

// 提示信息
Vue.config.productionTip = false

/* eslint-disable no-new */
// vue的实例
new Vue({
  // 最后效果将会替换页面中id为app的div元素
  el: '#app',
  // 使用路由
  router,
  // 当前界面使用App这个组件
  components: { App },
  // 组件用这样的标签来包裹
  template: '<App/>'
})
