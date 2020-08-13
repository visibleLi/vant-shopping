<template>
  <div>
    <div v-if="getShoppingCart.length > 0">
      <template v-for="(item,index) in getShoppingCart">
        <van-swipe-cell :before-close="beforeClose" :key="index">
          <van-card
            :key="index"
            :price="item.goods_price"
            :title="item.goods_name"
            :thumb="item.goods_big_logo || 'https://img.yzcdn.cn/vant/ipad.jpeg'"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </template>
      <van-submit-bar :price="getPirce" button-text="提交订单" @submit="onSubmit" />
    </div>
    <div class="show" v-if="getShoppingCart.length == 0">
      <van-empty image="search" description="空空如也" />
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case "right":
          Dialog.confirm({
            message: "确定删除吗？",
          })
            .then(() => {
              instance.close(); //收起单元格侧边栏
              console.log(instance);
            })
            .catch(() => {
              instance.close(); //收起单元格侧边栏
            });
          break;
      }
    },
    onSubmit() {},
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
</style>