import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoginPage from '../views/loginPage/LoginPage.vue';
import SignupPage from '../views/signupPage/SignupPage.vue';
import HomePage from '../views/homePage/HomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
