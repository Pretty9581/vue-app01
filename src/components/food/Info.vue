<template>
  <div class="info">
    <mt-navbar class="tab" v-model="message">
      <mt-tab-item  v-for="(item, index) in Info" :key="index" :id="index + 1">
        <span>{{ item.floor_title.name }}</span>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="message">
      <mt-tab-container-item  v-for="(item, index) in Info" :key="index" :id="index + 1">
          <div class="tabbar-items" v-for="(data,id) in item.product_list" :key="id">
            <router-link :to="'/detail/'+data.name">
                <img  v-lazy="data.image_src" >
                <span>{{data.name}}</span>
            </router-link>
          </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { getInfo } from "../../api/request";

export default {
  name: "Info",
  data() {
    return {
      Info: [],
      message:this.selected
    };
  },
  mounted() {
    this.getJson();
  },
  watch:{
      message:function(newVal,oldVal){
        //   console.log(newVal,oldVal)
      }
  },
  methods: {
    getJson() {
      getInfo().then((res) => {
        this.Info = res.message;
        console.log(this.Info)
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 选项卡 */
.tab {
  border-top: 1px solid #ccc;

}

.tabbar-items{
   float: left;
   width: 16%;
   height:100px;
   margin: 12px 2%;
   text-align: center;
}
.tabbar-items img{
    width: 60px;
    height:60px;
    background-size: 100% 100%;
}
.tabbar-items span{
    display: inline-block;
    line-height: 16px;
    font-size: 0.6rem;
}

.tabbar-items:hover{
    color: rgb(0, 153, 255);
}
</style>
