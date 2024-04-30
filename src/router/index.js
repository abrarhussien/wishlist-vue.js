import { createRouter, createWebHistory } from 'vue-router'
import Wichlist from '../components/Wichlist.vue'
import Body from '../components/Body.vue'
import BookDetails from '../components/BookDetails.vue'

const routes = [
  {
    path: '/',
    name: 'body',
    component: Body
  },
  {
    path: '/wichlist',
    name: 'wichlist',
    component: Wichlist
  },
  {
    path: '/book/:id',
    name: 'bookDetails',
    component: BookDetails
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
