<template>
    <div>
        <div v-if="getShoppingCart.length > 0">
            <template v-for="(item,index) in getShoppingCart">
                <van-swipe-cell :key="index">
                    <van-card
                            :num="item.goods_num"
                            :key="index"
                            :price="item.goods_price"
                            :title="item.goods_name"
                            :thumb="item.goods_big_logo || 'https://img.yzcdn.cn/vant/ipad.jpeg'"
                    />
                    <template #right>
                        <van-button square text="删除" type="danger" class="delete-button" @click="deleteItem(item)"/>
                    </template>
                </van-swipe-cell>
            </template>
            <van-submit-bar :price="getPirce" button-text="提交订单" @submit="onSubmit"/>
        </div>
        <div class="show" v-if="getShoppingCart.length == 0">
            <van-empty image="https://img.yzcdn.cn/vant/custom-empty-image.png" description="空空如也"/>
        </div>
    </div>
</template>

<script>
import {Dialog} from "vant";
import {mapActions, mapGetters} from "vuex";

export default {
    data() {
        return {};
    },
    methods: {
        ...mapActions(['delItemGood']),
        deleteItem(v) {
            Dialog.confirm({
                message: "确定删除吗？",
            }).then(() => {
                this.delItemGood(v.goods_id);

            }).catch(() => {

            });
        },
        onSubmit() {
        },
    },
    computed: {
        ...mapGetters(["getShoppingCart", "getPirce"]),
    },
    created() {
        console.log(this.getShoppingCart);
        console.log(this.getPirce);
    },
};
</script>

<style>
    .goods-card {
        margin: 0;
        background-color: white;
    }

    .delete-button {
        height: 100%;
    }

    .custom-image .van-empty__image {
        width: 90px;
        height: 90px;
    }
</style>