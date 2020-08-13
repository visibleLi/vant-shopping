import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component:resolve => require(['../components/index.vue'],resolve),
        meta:{
            keepAlive:true
        }
    },
    {
        name: 'search',
        path: '/search',
        component:resolve => require(['../components/search/search.vue'],resolve)
    },
    {
        name: 'classify',
        path: '/classify',
        component:resolve => require(['../components/classify/classify.vue'],resolve),
        meta:{
            keepAlive:true
        }
    },{
        name: 'details',
        path: '/details',
        component:resolve => require(['../components/details/details.vue'],resolve)
    },{
        name: 'goodList',
        path: '/goodList',
        component:resolve => require(['../components/details/goodList.vue'],resolve)
    },{
        name: 'shoppingcar',
        path: '/shoppingcar',
        component:resolve => require(['../components/shoppingcar/shoppingcar.vue'],resolve)
    }
]

const router = new VueRouter({
    routes
})

export default router