import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import productFirst from '@/components/productFirst'
import productSecond from '@/components/productSecond'
import productThird from '@/components/productThird'
import productFourth from '@/components/productFourth'
import catalog from '@/components/catalog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/first',
      name: 'productFirst',
      component: productFirst
    },
    {
      path: '/second',
      name: 'productSecond',
      component: productSecond
    },
    {
      path: '/third',
      name: 'productThird',
      component: productThird
    },
    {
      path: '/fourth',
      name: 'productFourth',
      component: productFourth
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: catalog
    }
  ]
})
