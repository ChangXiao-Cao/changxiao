<template>
  <div>
    <ul class="fen-ul">
        <li v-for="(v,i) in list" :key="i">
            <router-link :to="'/xiang/'+i"><img :src="'/img/'+v.img" class="img"/></router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Fen",
  data() {
    return {
      list: [
        { name: "北欧风格",img:'2_03.jpg' },
        { name: "简约风格",img:'2_05.jpg'},
        { name: "日式居家",img:'2_09.jpg' },
        { name: "整屋订制",img:'2_10.jpg' },
        { name: "东方美学",img:'2_13.jpg' },
        { name: "木点功夫",img:'2_14.jpg' },
        { name: "批发生产",img:'2_03.jpg' },
        { name: "美式古典",img:'2_03.jpg' }
      ]
    };
  }
};
</script>

<style>
.fen-ul{
   display: flex;
    flex-wrap: wrap;
   
}
.fen-ul li{
    margin-left: 15px;
}
.img{
    width: 160px;
    height: 160px;
}
</style>