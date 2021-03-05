import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueQuagga from 'vue-quaggajs'
import 'vue-search-select/dist/VueSearchSelect.css'


Vue.config.productionTip = false
Vue.use(VueQuagga);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')