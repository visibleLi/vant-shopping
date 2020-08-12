<template>
  <div>
    <template v-for="(item) in cardData">
      <van-card
        :key="item.goods_id"
        :price="item.goods_price"
        :title="item.goods_name"
        :thumb="item.goods_big_logo || 'https://img.yzcdn.cn/vant/ipad.jpeg'"
        @click.native="go(item)"
      />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardData: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const self = this;
      const url = "/goods/search";
      let routerData = this.$route.query.params;
      self.$http
        .get(url, { params: { cid: routerData } })
        .then(function (response) {
          console.log(response.data.message);
          self.cardData = response.data.message.goods;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    go(v) {
      console.log(v);
      this.$router.push({
        path: "details",
        query: {
          params: v.goods_id,
        },
      });
    },
  },
};
</script>

<style>
</style>