<template>
  <div>
    <div class="swipe">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="(thumb1,index1) in swipItem" :key="index1+'-'">
          <img :src="thumb1.pics_sma_url" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-cell title :value="'¥'+allData.goods_price" border />
    <van-cell :value="allData.goods_name" border />
    <van-cell value="商品详情" value-class="red" border />

    <div v-html="allData.goods_introduce"></div>
    <div class="goods-action">
      <van-goods-action safe-area-inset-bottom>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onGoCard" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onAddGood" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      allData: [],
      swipItem: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions(['unshiftShoppingCart']),
    init() {
      const self = this;
      const url = "/goods/detail";
      let routerData = this.$route.query.params;
      self.$http
        .get(url, { params: { goods_id: routerData } })
        .then(function (response) {
          self.allData = response.data.message;
          self.swipItem = response.data.message.pics;
          console.log(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    onAddGood() {
     this.unshiftShoppingCart(this.allData);
     console.log(this.allData)
      Toast("加入购物车成功1111");
    },
    onClickButton() {
      Toast("立即购买");
    },
    onGoCard() {
      this.$router.push("shoppingcar");
    },
  },
  mounted() {
    console.log(this)
  }
};
</script>

<style>
.red {
  color: red;
}
</style>