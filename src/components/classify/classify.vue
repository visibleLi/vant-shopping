<template>
    <div>


        <van-tree-select height="100%" :items="items" :main-active-index.sync="active" @click-nav="changeData">
            <template #content>
<!--                <van-grid :border="true" :column-num="3" square clickable>-->
<!--                    <van-grid-item v-for="(item,index) in items" :key="index">-->
<!--                        <van-image :src="items.children.children.cat_icon" show-loading/>-->
<!--                    </van-grid-item>-->
<!--                </van-grid>-->
            </template>
        </van-tree-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                items: [],
                keyMap:{
                    "cat_name" : "text"
                }

            };
        },
        created() {
            this.initTreeSelect()
        },
        methods: {
            changeData(index){
                console.log(index)
            },
            initTreeSelect() {
                const self = this;
                const url = 'https://api-hmugo-web.itheima.net/api/public/v1/categories';
                self.$http.get(url, {}).then(function (response) {
                    self.items = response.data.message;
                    for(var i = 0;i < self.items.length;i++){
                        var obj = self.items[i];
                        for(var key in obj){
                            var newKey = self.keyMap[key];
                            if(newKey){
                                obj[newKey] = obj[key];
                                delete obj[key];
                            }
                        }
                    }
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