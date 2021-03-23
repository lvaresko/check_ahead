import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Auth/Signup.vue'
import Login from '../views/Auth/Login.vue'
import ChooseIngredients from '../views/Auth/ChooseIngredients.vue'
import IngredientsList from '../views/IngredientsList.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account/Account.vue'
import AccountOverview from '../views/Account/AccountViews/AccountOverview.vue'
import UpdateAccount from '../views/Account/AccountViews/UpdateAccount.vue'
import ResetPassword from '../views/Account/AccountViews/ResetPassword.vue'
import SearchHistory from '../views/Account/AccountViews/SearchHistory.vue'
import Requests from '../views/Requests.vue'
import Favorites from '../views/Favorites.vue'
import NotFound from '../views/NotFound.vue'
import store from '@/store'
import Admin from '../views/Admin/Admin.vue'
import LinkAccounts from '../views/Auth/LinkAccounts.vue'
import AdminOverview from '../views/Admin/AdminViews/AdminOverview.vue'
import HandleRequests from '../views/Admin/AdminViews/HandleRequests.vue'
import AddProduct from '../views/Admin/AdminViews/AddProduct.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            needsUser: true,
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            auth: true,
        }
    },
    {
        path: '/choose_ingredients',
        name: 'ChooseIngredients',
        component: ChooseIngredients
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            auth: true,
        }
    },
    {
        path: '/link_accounts',
        name: 'LinkAccounts',
        component: LinkAccounts,
        meta: {
            auth: true,
        }
    },
    {
        path: '/product/:product_id',
        name: 'Product',
        component: Product,
        meta: {
            needsUser: true,
        }
    },

    {
        path: '/account/:id',
        component: Account,
        meta: {
            needsUser: true,
        },
        children: [{
                path: '',
                name: 'AccountOverview',
                component: AccountOverview,
                meta: {
                    needsUser: true,
                }
            },
            {
                path: 'update',
                name: 'UpdateAccount',
                component: UpdateAccount,
                meta: {
                    needsUser: true,
                }
            }, {
                path: 'reset-password',
                name: 'ResetPassword',
                component: ResetPassword,
                meta: {
                    needsUser: true,
                }
            }, {
                path: 'history',
                name: 'SearchHistory',
                component: SearchHistory,
                meta: {
                    needsUser: true,
                }
            },
        ]
    },
    {
        path: '/ingredients_list',
        name: 'IngredientsList',
        component: IngredientsList,
        meta: {
            needsUser: true,
        }
    },
    {
        path: '/requests',
        name: 'Requests',
        component: Requests,
        meta: {
            needsUser: true,
        }
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: Favorites,
        meta: {
            needsUser: true,
        }
    },
    {
        path: '/admin/:id',
        component: Admin,
        meta: {
            needsUser: true,
            needsAdmin: true,
        },
        children: [{
                path: '',
                name: 'AdminOverview',
                component: AdminOverview,
                meta: {
                    needsUser: true,
                    needsAdmin: true,
                }
            }, {
                path: 'handleRequests',
                name: 'HandleRequests',
                component: HandleRequests,
                meta: {
                    needsUser: true,
                    needsAdmin: true,
                }
            },
            {
                path: 'addProduct',
                name: 'AddProduct',
                component: AddProduct,
                meta: {
                    needsUser: true,
                    needsAdmin: true,
                }
            }
        ]
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

router.beforeEach(async(to, from, next) => {
    const User = localStorage.getItem("isSignedIn");
    const isAdmin = localStorage.getItem("isAdmin");

    if ((isAdmin == 'false') && to.matched.some(rec => rec.meta.needsAdmin)) {
        next({ name: NotFound })
    } else if (!User && to.matched.some(rec => rec.meta.needsUser)) { // Permission denied
        next({ name: "Login" })
    } else {
        next();
    }
});

export default router