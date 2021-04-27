<template>
  <div class="productdetail">
      <p class="product-title">商品详情</p>
      <div class="product-info">
          <img v-lazy="goods.goods_big_logo">
      </div>
      <div class="product-text">
          <p>{{goods.goods_name}}</p>
      </div>
  </div>

</template>

<script>
import {getProductList} from '../../../api/request'
export default {
  name: "ProductDetail",
  data() {
    return {
      goods:{}
    };
  },
  mounted(){
    this.getLists();
  },
   methods: {
    getID(){
        return this.$route.params.id;
    },
    getLists(){
        let id = this.getID();
        getProductList({goods_id:id}).then(res=>{
              this.goods  = res.message;
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-title{
    width: 100%;
    height:56px;
    line-height: 56px;
    margin-bottom: 30px;
    text-align: center;
    background: rgb(10, 157, 255);
    color: #fff;
    border-top:1px solid #fff;
}
.product-info{
    width: 60%;
    margin: 0 auto;
}
.product-info img{
    width: 100%;
    height:260px;
}
.product-text{
    padding: 12px ;
}
</style>
