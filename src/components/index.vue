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
                    <img :src="thumb.image_src">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="GridItem ">
            <van-grid :border="true" :column-num="gridData.length" square clickable>
                <van-grid-item v-for="(item,index) in gridData" :key="index" @click="go2">
                    <van-image :src="item.image_src" show-loading/>
                </van-grid-item>
            </van-grid>
        </div>


        <div >
            <van-cell clickable>
                <template v-for="(item,index) in floorData">
                    <div class="margin_top" :key="index">
                        <van-image :src="item.floor_title.image_src"/>
                    </div>
                    <div class="big" :key="index+'_'">
                        <div class="wrapper">
                            <div class="one item">
                                <img class="left-img" :src="item.product_list[0].image_src" alt="">
                            </div>
                        </div>
                        <div class="wrapper1">
                            <div><img class="right-img"
                                      :src="item.product_list[1].image_src" alt="">
                            </div>
                            <div><img class="right-img"
                                      :src="item.product_list[2].image_src"
                                      alt=""></div>
                            <div><img class="right-img"
                                      :src="item.product_list[3].image_src" alt="">
                            </div>
                            <div><img class="right-img"
                                      :src="item.product_list[4].image_src" alt="">
                            </div>
                        </div>
                    </div>
                </template>
            </van-cell>
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
                floorData: [],
                productList :[]


            };
        },
        methods: {
            go() {
                this.$router.push({name: 'search'})
            },
            go2() {
                this.$router.push({name: 'classify'})
            },
            querySwipe() {
                const self = this;
                self.$http.get('/home/swiperdata', {}).then(function (response) {
                    self.thumb = response.data.message;
                }).catch(function (error) {
                    console.log(error);
                })
            },
            queryGridItem() {
                const self = this;
                self.$http.get('/home/catitems', {})
                    .then(function (response) {
                        self.gridData = response.data.message
                    }).catch(function (error) {
                    console.log(error);
                })
            },
            queryStorey() {
                const self = this;
                self.$http.get('/home/floordata', {}).then(function (response) {
                    self.floorData = response.data.message;
                    console.log(self.floorData)
                }).catch(function (error) {
                    console.log(error);
                })
            }
        },
        created() {


        },
        mounted() {

        },
        beforeMount() {
            this.queryGridItem();
            this.querySwipe();
            this.queryStorey();
        }
    }
</script>

<style>
    img {
        width: 375px;
        display: block;
    }

    .margin_top {
        margin-top: 10px;
        text-align: left;
    }

    .left-img {
        width: 100%;
        max-height: 235px;
    }

    .right-img {
        width: 100%;
        min-height: 117.5px;
    }

    .big {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .wrapper {
        display: inline-grid;
        grid-template-columns: 1fr;
    }

    .wrapper1 {
        display: inline-grid;
        grid-template-columns: 1fr 1fr;

    }

</style>