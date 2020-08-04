<template>
    <div class="search">
        <form action="/">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    shape="round"
            />
        </form>
    </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                value: '',
            }
        },
        methods: {
            onSearch(val) {
                const url = 'https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch';
                this.$http.get(url, {
                    params: {
                        query: val
                    }
                }).then(function (response) {
                    console.log(response.data.message);
                }).catch(function (error) {
                    console.log(error);
                })

            }
        }
    }
</script>

<style scoped>

</style>