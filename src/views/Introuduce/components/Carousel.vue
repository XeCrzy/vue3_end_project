<script setup>
import { ref } from 'vue';

const bannerList =ref([
    { id:1, imgUrl:new URL('../../../assets/image/微信图片_20240616224059.jpg', import.meta.url).href },
    { id:2, imgUrl:new URL('../../../assets/image/微信图片_20240616223918.jpg', import.meta.url).href },
    { id:3, imgUrl:new URL('../../../assets/image/微信图片_20240616223855.jpg', import.meta.url).href },
    { id:4, imgUrl:new URL('../../../assets/image/微信图片_20240616224055.jpg', import.meta.url).href },
    { id:5, imgUrl:new URL('../../../assets/image/微信图片_20240616223916.jpg', import.meta.url).href },
])
</script>

<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img{
    width: 100%;
    height: 100%;
}
</style>