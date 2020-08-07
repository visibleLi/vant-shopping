import Vue from 'vue'
import {
    Search,
    Swipe, SwipeItem,
    Grid, GridItem, Image, Cell, Tabbar, TabbarItem, Empty
} from "vant";

const vant = {
    Search: Search,
    Swipe: Swipe,
    SwipeItem: SwipeItem,
    Grid: Grid,
    GridItem: GridItem,
    Image: Image,
    Cell: Cell,
    Tabbar: Tabbar,
    TabbarItem: TabbarItem,
    Empty: Empty
};
Object.keys(vant).forEach(element => {
    Vue.use(vant[element]);
});