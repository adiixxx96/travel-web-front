import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/User/LoginView.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/User/RegisterView.vue')
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import('../views/User/LogoutView.vue')
    },
    {
        path: '/trips',
        name: 'trips',
        component: () => import('../views/Trip/TripList.vue')
    },
    {
        path: '/trips/:id',
        name: 'Trip detail',
        component: () => import( '../views/Trip/TripDetail.vue')
    },
    {
        path: '/user',
        name: 'User Area',
        component: () => import( '../views/User/UserArea.vue')
    },
]    

const router = new VueRouter({
    routes
})

export default router