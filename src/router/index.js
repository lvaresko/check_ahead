import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Auth/Signup.vue'
import Login from '../views/Auth/Login.vue'
import ChooseIngredients from '../views/Auth/ChooseIngredients.vue'
import IngredientsList from '../views/IngredientsList.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account/Account.vue'
import UpdateAccount from '../views/Account/UpdateAccount.vue'
import ResetPassword from '../views/Account/ResetPassword.vue'
import SearchHistory from '../views/Account/SearchHistory.vue'
import Requests from '../views/Requests.vue'
import NotFound from '../views/NotFound.vue'

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
    },
    {
        path: '/account/update',
        name: 'UpdateAccount',
        component: UpdateAccount
    }, {
        path: '/account/reset-password',
        name: 'ResetPassword',
        component: ResetPassword
    }, {
        path: '/account/history',
        name: 'SearchHistory',
        component: SearchHistory
    },
    {
        path: '/ingredients_list',
        name: 'IngredientsList',
        component: IngredientsList
    },
    {
        path: '/requests',
        name: 'Requests',
        component: Requests
    },
    //catchall 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router