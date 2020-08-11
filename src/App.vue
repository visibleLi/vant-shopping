<template>
    <div id="app">
        <loading></loading>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <foot></foot>
    </div>
</template>

<script>
    import loading from "./components/loading/loading";
    import foot from "./components/foot/foot";
    export default {
        name: 'App',
        components:{
            foot,
            loading
        }

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
