<template>
  <div class="food">
    <Swipper></Swipper>
    <Category></Category>
    <Info></Info>
  </div>
</template>

<script>
import Swipper from '../../components/food/Swipper'
import Category from '../../components/food/Category'
import Info from '../../components/food/Info'
export default {
  components:{
    Swipper,
    Category,
    Info
  }
}
</script>

<style scoped>

</style>