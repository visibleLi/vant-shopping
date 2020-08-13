import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        LOADING: false,
        shoppingCart: []
    },
    mutations: {
        showLoading: (state) => state.LOADING = true,
        hideLoading: (state) => state.LOADING = false,
        unshiftShoppingCart: (state, data) => state.shoppingCart.unshift(data)
    },
    actions: {
        unshiftShoppingCart ({ commit }, data) {
            commit('unshiftShoppingCart', data);
          },
    },
    getters: {
        getShoppingCart: (state) => {
            return state.shoppingCart
        },
        getPirce:(state) => {
            let sumPrice = 0;
            for (let index = 0; index < state.shoppingCart.length; index++) {
                const element = state.shoppingCart[index];
                sumPrice += element.goods_price    
            }
            return sumPrice*100
        }
    }
})