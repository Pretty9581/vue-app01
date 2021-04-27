<template>
  <div class="tabbar">
    <mt-tabbar v-model="message">
        <mt-tab-item id="外卖">
            <img slot="icon" src="../assets/logo.png">
            外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
            <img slot="icon" src="../assets/logo.png">
            订单
        </mt-tab-item>
        <mt-tab-item id="发现">
            <img slot="icon" src="../assets/logo.png">
            发现
        </mt-tab-item>
        <mt-tab-item id="我的">
            <img slot="icon" src="../assets/logo.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data(){
      return{
          message:this.selected
      }
  },
  watch:{
      message: function (NewVal,OldVal){
          switch(NewVal){
              case '外卖':this.$router.push('/food');break;
              case '订单':this.$router.push('/order');break;
              case '发现':this.$router.push('/find');break;
              case '我的':this.$router.push('/my');break;
          }
      }
  },
  methods:{
      Go(){
        console.log(this.value) 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar{
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
}
</style>
