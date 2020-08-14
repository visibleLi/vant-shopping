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
    <van-cell :title="allData.goods_name" border />
    <van-cell value="商品详情"  border />

    <div v-html="allData.goods_introduce" class="h"></div>
    <div class="goods-action">
      <van-goods-action safe-area-inset-bottom>
        <van-goods-action-icon icon="cart-o" :badge="getShoppingCart.length" text="购物车" @click="onGoCard" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onAddGood" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapActions,mapGetters } from "vuex";
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
      const num = {goods_num:1}
      Object.assign(this.allData, num);
     this.unshiftShoppingCart(this.allData);
     console.log(this.allData)
      Toast("加入购物车成功");
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
  },
  computed:{
    ...mapGetters(['getShoppingCart'])
  }
};
</script>

<style>
.van-cell__value{
      color: #f44;
    }
.h{
  padding-bottom: 50px;
}
</style>