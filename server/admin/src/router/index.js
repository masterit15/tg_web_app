import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: HomeView,
    meta: {
      layout: 'main',
      requiresAuth: true
    }
  },
  {
    path: '/workers',
    name: 'Сотрудники',
    component: () => import('../views/WorkersView.vue'),
    meta: {
      layout: 'main',
      requiresAuth: true
    }
  },
  {
    path: '/catalog',
    name: 'Каталог',
    component: () => import('../views/CatalogView.vue'),
    meta: {
      layout: 'main',
      requiresAuth: true
    }
  },
  {
    path: '/cart',
    name: 'Корзина',
    component: () => import('../views/CartView.vue'),
    meta: {
      layout: 'main',
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Авторизация',
    component: () => import('../views/AuthView.vue'),
    meta: {
      layout: 'empty',
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (!localStorage.getItem('token')){
      // делаем редирект на страницу авторизации
      next('/auth')
    }else{
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)){
    if (localStorage.getItem('token')) {
      // делаем редирект на главную страницу
      next('/')
    } else {
      next()
    }
  }else{
    next()
  }
})
export default router
