import Vue from 'vue'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

//引入懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

