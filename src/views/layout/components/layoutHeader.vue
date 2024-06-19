<script setup>

</script>

<template>
    <header class='app-header'>
        <div class="search">

        <input type="text" placeholder="搜一搜"><el-button type="primary" style="height: 100%; border-radius: 0 5px 5px 0;">搜索<i class="iconfont icon-search"></i></el-button>
      </div>
    <div class="container">
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/introduce">首页</RouterLink>
        </li>
        <li> <RouterLink to="/service" >养老服务</RouterLink> </li>
        <li> <RouterLink to="/news" >新闻资讯</RouterLink> </li>
        <li> <RouterLink to="/shop" >商品展示</RouterLink> </li>
      </ul>
      
    </div>
  </header>
</template>

<style scoped lang='scss'>
.app-header{
    
    background-color: #fff;
    .container{
    display: flex;
    align-items: center;

}
.search{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search input{
    width: 60%;
    height: 95%;
    border: 1px solid #ff7930;
    border-radius: 5px 0 0 5px;
    // border-radius: 5px;
    border-right: 0 solid #000;
    outline: 0px;
    padding-left: 5px;
}




a{
    display: block;
    height: 132px;
    height: 100%;
    text-align: -9999px;
    color: #000;
    }
    
}

.app-header-nav{
    width: 100%;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    justify-content: space-around;
}

li{
    margin-right: 40px;
    width: 100px;
    text-align: center;

a{
    font-size: 25px;
    line-height: 32px;
    height: 32px;
    display: inline-block;

    &:hover{
        color: $xtxColor;
        border-bottom: 3px solid $xtxColor;
    }

    .active {
        color: $xtxColor;
        border-bottom: 3px solid $xtxColor;
      }    
    }
}



</style>