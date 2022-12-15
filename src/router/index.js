import { createRouter , createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../Pages/Welcome.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../Pages/Auth/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: ()=> import('../Pages/Dashboard.vue')
  },
  // Mobil
  {
    path: '/mobil',
    name: 'mobil',
    component: ()=> import('../Pages/Mobil/Mobil.vue')
  },
  // Pengguna
  {
    path: '/penggunaAll',
    name: 'penggunaAll',
    component: ()=> import('../Pages/Pengguna/Pengguna.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
