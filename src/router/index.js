import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/food',
    name:'Food',
    component:() =>import ("../views/tabbar/Food.vue")
  },
  {
    path:'/order',
    name:'Order',
    component:() =>import ("../views/tabbar/Order.vue")
  },
  {
    path:'/find',
    name:'Find',
    component:() =>import ("../views/tabbar/Find.vue")
  },
  {
    path:'/my',
    name:'My',
    component:() =>import ("../views/tabbar/My.vue")
  },
  {
    path:'/detail/:query',
    name:'detail',
    component:() =>import ("../components/food/Detail.vue")
  },
  {
    path:'/productdetail/:id',
    name:'productdetail',
    component:() =>import ("../components/food/detail/ProductDetail.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
