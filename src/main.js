import Vue from 'vue'
import App from './App.vue'
import axios from '../http'
import router from './router'
import store from './store'
import '../components'
import 'amfe-flexible'

Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
