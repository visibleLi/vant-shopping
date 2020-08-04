import Vue from 'vue'
import {
    Search,
    Swipe, SwipeItem,
    Grid ,GridItem,Image
} from "vant";

const vant = {
    Search: Search,
    Swipe: Swipe,
    SwipeItem: SwipeItem,
    Grid: Grid,
    GridItem :GridItem,
    Image :Image
};
Object.keys(vant).forEach(element => {
    Vue.use(vant[element]);
});