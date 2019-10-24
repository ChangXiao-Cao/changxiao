<template>
    <div>
        <img src="img/2.jpg" alt="" class="imggg">
        <div>
            <ul>
               <router-link v-for="(item,key) in list" :key='key' tag="li" :to="'/zhang/'+key">
                   <div class="left">
                       <img :src="'/img/'+item.img" alt="" class="img1">
                   </div>
                   <div class="right">
                       <span class="title">{{item.title}}</span>
                        <br />
                       <span class="time">{{item.time}}</span>
                   </div>
               </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"Book",
        data() {
            return {
                list:[]
            }
        },
        mounted() {
            axios.get("/goods.json").then((res)=>{
                this.list=res.data
            })
        },
    }
</script>

<style>
.imggg{
    width: 100%;
    height: 150px;
}
.img1{
    width: 100%;
    height: 160px;
    margin-left: 10px 
}
.nav{
    width: 200px;
}
ul{
    list-style: none;
    margin-top: 10px 
}
.title{
    font-size: 20px;
    color: black;
    font-weight: bold;
}
.time{
    color: gray;
    font-size: 15px;
    margin-top: 30px 
}
 .left{
    float: left;
    width: 30%;
    height: 150px;
}
.left>img{
    width: 100px;
    height: 100px;
    display: block
}
.right{
    width: 70%;
    height: 150px;
    float: right;
} 
</style>