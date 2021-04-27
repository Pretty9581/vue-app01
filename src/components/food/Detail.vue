<template>
  <div class="detail">
    <div class="goods" v-for="(v,i) in goods" :key="i">
        <router-link :to="'/productdetail/'+v.goods_id">
            <img v-lazy="v.goods_big_logo" src="@/assets/logo.png">
            <span >{{v.goods_name}}</span>
        </router-link>
    </div>
    <div v-if="goods.length == 0">
      <img src="@/assets/404.jpg" width="100%" height="260px"/>
      <h3>抱歉,没有获取到您要的数据</h3>
      <router-link to="/food">点击返回</router-link>
    </div>
  </div>

</template>

<script>
import {getLists} from '../../api/request'
export default {
  name: "Detail",
  data() {
    return {
      goods:[]
    };
  },
  mounted(){
    this.getJson()
  },
   methods: {
    getJson() {
      let query = this.$route.params.query;
      getLists({query:query}).then((res) => {
        let goods = res.message.goods;
        goods.forEach(element => {
          if(element.goods_big_logo){
            this.goods.push(element)
          }
        });
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back{
  display: inline-block;
  width: 100%;
  height:26px;
  text-align: center;
  line-height: 60px;
}
.goods{
  width: 40%;
  height:190px;
  box-sizing: border-box;
  margin:36px 5%;
  float: left;
  background: rgb(10, 157, 255);
  position: relative;
  color:#fff;
}

.goods img{
  width: 100%;
  height:120px;
}
.goods span{
  text-indent: 8px;
  font-size: 0.7rem;
  font-family: "微软雅黑";
  position: absolute;
  left: 0;
  right: 0;
  top:122px;
}


</style>
