import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/Login'
import FirstPage from '@/page/firstPage/FirstPage'
import Nearby from '@/page/nearby/Nearby'
import Order from '@/page/order/Order'
import User from '@/page/user/User'

Vue.use(Router)

const router =  new Router({
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
      name: 'login',
      component: Login
    }, {
      path: '/firstPage',
      name: 'FirstPage',
      component: FirstPage
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

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('userToken');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;