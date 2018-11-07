import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/Home'
import home from '@/components/HomePage'
import token from '@/components/TokenEconomny'
import investment from '@/components/InvestmentIntelligence'
import xorderLabs from '@/components/XOrderLabs'
import hiring from '@/components/Hiring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'main',
      component: main,
      redirect:'/index/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: home,
        },
        {
          path: 'token',
          name: 'articles',
          component: token,
        },
        {
          path: 'investment',
          name: 'lab',
          component: investment,
        },
        {
          path: 'xorderLabs',
          name: 'about',
          component: xorderLabs,
        },
        {
          path: 'hiring',
          name: 'hiring',
          component: hiring,
        },
      ]
    }
  ]
})
