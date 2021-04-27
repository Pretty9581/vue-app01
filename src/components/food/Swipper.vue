<template>
  <div class="swipper">
      <mt-swipe @change="handleChange" :auto="4000">
        <mt-swipe-item v-for="(item,index) in list" :key="index">
            <img :src="item"/>
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
import {getBanner} from '../../api/request'
export default {
    name:"Swipper",
    data(){
        return{
            list:[]
        }
    },
    mounted(){
       this.Swipper()
    },
    methods: {
        handleChange(index) {
            // console.log(index)
        },
        Swipper(){
            getBanner().then(res=>{
                let msg  = res.message;
                msg.forEach(item=>{
                    this.list.push(item.image_src)
                })
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe{
    height:200px;
    background-size: 100% 100%;
}

.mint-swipe img{
    width:100%;
    height:200px;
}

</style>
