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
        ADD_GOOD: (state, data) => {
            const oldShoppingCart = state.shoppingCart;
            const goodsIndex = oldShoppingCart.findIndex(goods => goods.goods_id == data.goods_id);
            if (goodsIndex > -1) {
                const goodsData = oldShoppingCart[goodsIndex];
                state.shoppingCart = [].concat(oldShoppingCart.slice(0, goodsIndex), Object.assign({}, goodsData, {goods_num: goodsData.goods_num + data.goods_num}), oldShoppingCart.slice(goodsIndex + 1),);
            } else {
                state.shoppingCart = [].concat(oldShoppingCart, data);
            }
        },
        DEL_ITEM: (state, data) => {
            state.shoppingCart = state.shoppingCart.filter(item => item.goods_id != data)
        }
    },
    actions: {
        unshiftShoppingCart({commit}, data) {
            commit('ADD_GOOD', data);
        },
        delItemGood: ({commit}, data) => {
            commit('DEL_ITEM', data);
        }

    },
    getters: {
        getShoppingCart: (state) => {
            return state.shoppingCart
        },
        getPirce: (state) => {
            return 100 * state.shoppingCart.reduce((sumPrice, element) => {
                return sumPrice + (element.goods_price * element.goods_num)
            }, 0);
        }
    }
})