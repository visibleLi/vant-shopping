<template>
    <div class="foot">
        <van-tabbar route safe-area-inset-bottom placeholder >
            <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
            <van-tabbar-item icon="setting-o" :badge="getShoppingCart.length" to="/shoppingcar">购物车</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        methods: {

        },
        data(){
            return{
              //  active: 0,
            }
        },
        computed: {
            ...mapGetters(["getShoppingCart"]),
        },
    };
</script>

<style scoped>

</style>