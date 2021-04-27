//这里写接口
import api from './config'
//轮播图
const getBanner = () =>{ return api.get("/api/public/v1/home/swiperdata",{})} //{}里面写要传的参数
//导航栏 
const getCategory = ()=>{return api.get("/api/public/v1/home/catitems",{})}//{}里面写要传的参数
//商品展示
const getInfo = ()=>{return api.get("/api/public/v1/home/floordata",{})}
//商品列表搜索
const getLists =({query=''})=>{return api.get(`/api/public/v1/goods/search?query=${query}`,{})}
//商品详情 传递参数 goods_id
const getProductList =({goods_id = ''}) =>{return api.get(`https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=${goods_id}`,{})}
export {
    getBanner,
    getCategory,
    getInfo,
    getLists,
    getProductList
}