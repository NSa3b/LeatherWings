import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Shop from '../views/Shop.vue'
import AboutUs from '../views/AboutUs.vue'
import Shipping from '../views/Shipping.vue'
import OrderInfo from '../views/OrderInfo.vue'
import Product from '../views/Product.vue'
import UserProfile from '../views/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path:'/aboutus',
      name:'aboutus',
      component: AboutUs

    },
    {
      path:'/shipping',
      name:'shipping',
      component: Shipping

    },
    {
      path:'/orderinfo',
      name:'orderinfo',
      component: OrderInfo

    },
    {
      path:'/product/:id',
      name:'product',
      component: Product

    },
    {
      path:'/userprofile',
      name:'userprofile',
      component: UserProfile

    }
  ]
})

export default router
