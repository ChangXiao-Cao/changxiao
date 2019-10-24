<template>
  <div>
   <img :src="`/img/${list.img}`" alt="">
   <p>{{list.title}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Xiang",
  data() {
      return {
          list:{},
          id:""
      }
  },
 
  mounted() {
      var id=this.$route.params.id
      axios.get('/goods.json').then((res)=>{
          this.list=res.data[id]
          console.log(res.data[id])
      })
  }
};
</script>

<style>

</style>