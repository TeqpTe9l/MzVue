import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/stud',
    name: 'stud',
    component: () => import('../views/StudView.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/TeacherView.vue')
  },
  {
    path: '/createstud',
    name: 'createstud',
    component: () => import('../views/CreateStudView.vue')
  },
  {
    path: '/createteacher',
    name: 'createteacher',
    component: () => import('../views/CreateTeacherView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
