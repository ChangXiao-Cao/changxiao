<template>
    <div>
        <div>
            <img :src="'/img/'+list.imgg" alt="">
            <h4>{{list.titlel}}</h4>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"Zhang",
        data() {
            return {
                list:{},
                id:'',
            }
        },
        mounted() {
            var id=this.$route.params.id
            console.log(id)
            axios.get('/zhang.json').then((res)=>{
                this.list=res.data[id]
               console.log(res.data[id])
            })
        },
    }
</script>

<style>

</style>