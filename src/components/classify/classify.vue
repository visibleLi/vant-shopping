<template>
    <div>


        <van-tree-select height="100%" :items="items" :main-active-index.sync="active" @click-nav="changeData">
            <template #content>
                <div v-for="(l1,index1) in items" :key="index1">
                    <div v-for="(l2,index2) in l1.children" :key="index2">
                        <van-grid :border="true" :column-num="3" square clickable>
                            <van-grid-item v-for="(l3,index3) in l2.children" :key="index3">
                                <van-image v-if="active === 0" :src="l3.cat_icon" show-loading/>
                            </van-grid-item>
                        </van-grid>
                    </div>
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
                items: []

            };
        },
        created() {
            this.initTreeSelect()
        },
        methods: {
            changeData(index) {
                console.log(index)
            },
            initTreeSelect() {
                const self = this;
                const url = 'https://api-hmugo-web.itheima.net/api/public/v1/categories';
                self.$http.get(url, {}).then(function (response) {
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
                    self.items = response.data.message.map(v => Object.assign(v, {text: v.cat_name}))
                    console.log(self.items);
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }

    };
</script>

<style scoped>

</style>