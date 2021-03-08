import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

axios.interceptors.request.use(config => {
    let token = localStorage.getItem("token")
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers["Authorization"] = token;
        console.log('interceptors config=',config)
    }
    return config
}, error => {
    return Promise.reject(error)
})
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

