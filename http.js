import axios from 'axios'
import store from './src/store'
const instance = axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
    timeout: 15000,
})


// 拦截请求
instance.interceptors.request.use(config => {
    store.commit("showLoading");
    return config
}, error => {
    return Promise.reject(error)
})
// 拦截响应
instance.interceptors.response.use(res => {
    //可以在此处拦截接口错误
    if (res.data.meta.status === 200){
        store.commit("hideLoading");
    }
    return res

}, error => {
    store.commit("hideLoading");
    return Promise.reject(error)
})
export default instance