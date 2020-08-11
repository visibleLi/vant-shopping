<template>
    <div>
        <div class="search">
            <form action="/">
                <van-search
                        v-model="value"
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                        @input="onClear"
                        shape="round"
                />
            </form>
        </div>
        <div class="card" v-if="!show">
            <van-cell v-for="(item,index) in searchData" :key="index" :value="item.goods_name" clickable/>
        </div>
        <div class="show" v-if="show">
            <van-empty image="search" description="请输入搜索关键词"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                value: '',
                searchData: [],
                show: true

            }
        },
        methods: {
            onSearch(val) {
                const self = this;
                const url = '/goods/qsearch';
                self.$http.get(url, {
                    params: {
                        query: val
                    }
                }).then(function (response) {
                    self.searchData = response.data.message
                    self.searchData.length > 0 ? self.show = false : self.show = true
                }).catch(function (error) {
                    console.log(error);
                })

            },
            onClear(val) {
                const self = this;
                val == "" ? (self.searchData = [], self.show = true) : console.log('no')

            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>