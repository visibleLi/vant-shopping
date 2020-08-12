<template>
  <div>
    <div style="text-align:left"><span class="red">商品详情</span></div>
    <div v-html="allData.goods_introduce"></div>
    <div class="goods-action">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      allData: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const self = this;
      const url = "/goods/detail";
      let routerData = this.$route.query.params;
      self.$http
        .get(url, { params: { goods_id: routerData } })
        .then(function (response) {
          self.allData = response.data.message;
          console.log(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    onClickIcon() {
      Toast ('点击图标');
    },
    onClickButton() {
      Toast ('点击按钮');
    }
  },
};
</script>

<style>
.red{
    color: red;
    font-size:22px;
}
*{
    padding: 0;
    margin:0
}
</style>