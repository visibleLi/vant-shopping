<template>
    <div>
        <div class="search">
            <form action="/">
                <van-search
                        v-model="value"
                        placeholder="请输入搜索关键词"
                        @click="go"
                        shape="round"
                />
            </form>
        </div>
        <div class="swipe">
            <van-swipe class="goods-swipe" :autoplay="3000">
                <van-swipe-item v-for="thumb in thumb" :key="thumb.goods_id">
                    <img :src="thumb.image_src" >
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="GridItem ">

            <van-grid :border="true" :column-num="4" square clickable>

                <van-grid-item>
                    <van-image :src="this.gridData[0].image_src"/>
                </van-grid-item>
                <van-grid-item>
                    <van-image :src="this.gridData[1].image_src"/>
                </van-grid-item>
                <van-grid-item>
                    <van-image :src="this.gridData[2].image_src"/>
                </van-grid-item>
                <van-grid-item>
                    <van-image :src="this.gridData[3].image_src"/>
                </van-grid-item>
            </van-grid>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'search',
        data() {
            return {
                value: '',
                thumb: [],
                gridData: [],

            };
        },
        methods: {
            go() {
                this.$router.push({name: 'search'})
            },
            querySwipe() {
                const self = this;
                self.$http.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', {}).then(function (response) {
                    self.thumb = response.data.message;
                }).catch(function (error) {
                    console.log(error);
                })
            },
            queryGridItem() {
                const self = this;
                self.$http.get('https://api-hmugo-web.itheima.net/api/public/v1/home/catitems', {})
                    .then(function (response) {
                        self.gridData = response.data.message;
                    }).catch(function (error) {
                    console.log(error);
                })
            }
        },
        created() {
            this.querySwipe();
            this.queryGridItem()
        },
    }
</script>

<style>
    img {
        width: 375px;
        display: block;
    }

</style>