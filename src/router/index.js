import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Nearby from '@/page/nearby/Nearby'
import Order from '@/page/order/Order'
import User from '@/page/user/User'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/nearby',
      name: 'Nearby',
      component: Nearby
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
