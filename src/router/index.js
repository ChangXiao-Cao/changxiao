import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../components/Share/Book'
import Fen from '../components/Share/Fen'
import Xiang from '../components/Share/Xiang'
import Zhang from '../components/Share/Zhang'

Vue.use(VueRouter)

const routes = [
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/fen',
    name: 'Fen',
    component: Fen
  },
  {
    path: '/xiang/:id',
    name: 'Xiang',
    component: Xiang
  },
  {
    path: '/zhang/:id',
    name: 'zhang',
    component: Zhang
  },
  {
    path:'/',
    redirect:"/book"
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
