import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/MainPage'
import loginPage from '@/components/login/LoginPage'
// import { Button, Row, Col, Table, TableColumn, Pagination, Dialog, Option, Message } from 'element-ui'
import ElementUI from 'element-ui'
import moment from 'moment'
import curvejs from 'curvejs'

import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义的样式
import '@/style/theme.css'
import '@/style/character.css'

Object.defineProperty(Vue.prototype, '$moment', { value: moment })
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs })

Vue.use(Router)
Vue.use(ElementUI)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Button)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Pagination)
// Vue.use(Dialog)
// Vue.use(Option)
// Vue.use(Message)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/loginPage',
      meta: {
        menuShow: false
      }
    },
    {
      path: '/index',
      name: 'mainPage',
      component: mainPage,
      meta: {
        menuShow: false
      }
    },
    {
      path: '/login',
      redirect: '/loginPage',
      meta: {
        menuShow: false
      }
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage,
      meta: {
        menuShow: false
      }
    }
  ]
})
