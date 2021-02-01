import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCollapse from 'vue2-collapse'

Vue.config.productionTip = false

Vue.use(VueCollapse)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')