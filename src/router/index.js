import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import ChooseIngredients from '../views/ChooseIngredients.vue'

import Product from '../views/Product.vue'

import Account from '../views/Account.vue'

Vue.use(VueRouter)


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/choose_ingredients',
        name: 'ChooseIngredients',
        component: ChooseIngredients
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    }, {
        path: '/account',
        name: 'Account',
        component: Account
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router