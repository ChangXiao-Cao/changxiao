<template>
  <div id="app">
    <div class="app">
      <p>
        居家分享
        <ul class="ull">
          <router-link tag="li" to="/book">文章</router-link> 
          <router-link tag="li" to="/fen">分类</router-link>
        </ul>
      </p>
    </div>

    <div class="view">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%
}
.view{
  flex: 1;
  overflow: auto
}
body,html{
  width: 100%;
  height: 100%;
}
p{
  background: #2D384A;
  color: white;
  font-size: 20px;
  height: 70px;
  width: 100%;
}
*{
  padding: 0;
  margin: 0;
}
.ull{
  list-style: none;
  display: flex;
  margin-top: 20px;
  margin-left: 10px 
}
.ull li{
  margin-left: 20px;
  font-size: 15px;
}
</style>
