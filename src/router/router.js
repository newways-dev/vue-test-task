import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import PostPage from '@/pages/Post'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/post/:id',
    component: PostPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
