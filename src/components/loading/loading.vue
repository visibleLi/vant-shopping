<template>
    <div class="load_cover" v-show="LOADING">
        <van-loading color="red" vertical>加载中...</van-loading>
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    export default {
        name: "loading",
        computed:{
            ...mapState(['LOADING'])
        }
    }
</script>

<style>
    .van-loading{
        width: 140px;
        height: 140px;
        top: 40%;
        left: 50%;
        transform: translateX(-50%)
    }
    .load_cover{
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.5);
        z-index: 999;
        position: fixed;
        left: 0;
        top:0;
    }
</style>