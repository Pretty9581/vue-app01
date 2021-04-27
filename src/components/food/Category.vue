<template>
  <div class="category">
     <div class="category-item" v-for="(item,index) in category" :key="index">
         <img :src="item.url">
     </div>
  </div>
</template>

<script>
import {getCategory} from '../../api/request'
export default {
    name:"Category",
    data(){
        return{
            category:[]
        }
    },
    mounted(){
      this.getJson()
    },
    methods: {
        getJson(){
            getCategory().then(res=>{
                let msg = res.message;
                msg.forEach(item => {
                    this.category.push({
                        name:item.name,
                        url:item.image_src
                    })
                });
            })
        }
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category{
    display: flex;
    position: relative;
    top:0;
    left:0;
    right:0;
}
.category .category-item{
    flex: 1;
    text-align: center;
}
.category .category-item img{
    margin: 16px 0;
    width:60px;
}
</style>
