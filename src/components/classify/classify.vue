<template>
  <div>
    <van-tree-select height="100%" :items="items" :main-active-index.sync="active" @click-nav="changeData">
      <template #content>
        <div v-for="(l1,index1) in items[active].children" :key="index1">
          <!-- <div v-for="(l2,index2) in l1.children" :key="index2"> -->
          <div class="l2-label">
            <span>----{{l1.cat_name}}----</span>
          </div>
          <van-grid :border="true" :column-num="3" square clickable>
            <van-grid-item v-for="(l3,index3) in l1.children" :key="index3" @click.native="go(l3)">
              <van-image :src="l3.cat_icon" show-loading />
            </van-grid-item>
          </van-grid>
          <!-- </div> -->
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{}],
    };
  },
  created() {
    this.initTreeSelect();
  },
  methods: {
    changeData(index) {
      console.log(index);
    },
    go(v){
        console.log(v)
        this.$router.push({
            path:"goodList",
            query:{
              params:v.cat_id
            }
        })
    },
    initTreeSelect() {
      const self = this;
      const url = "/categories";
      self.$http
        .get(url, {})
        .then(function (response) {
          //self.items = response.data.message;
          // for(var i = 0;i < self.items.length;i++){
          //     var obj = self.items[i];
          //     for(var key in obj){
          //         var newKey = self.keyMap[key];
          //         if(newKey){
          //             obj[newKey] = obj[key];
          //             delete obj[key];
          //         }
          //     }
          // }
          self.items = response.data.message.map((v) =>
            Object.assign(v, { text: v.cat_name })
          );
          self.items.pop()
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>