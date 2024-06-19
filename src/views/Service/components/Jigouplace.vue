<script setup>
import HomePanel from './HomePanel.vue'
    import { ref } from 'vue'
    // const oldList = ref([
    //     {   id:110,
    //         name:'',
    //         text:'国外是如何养老的',
    //         img:'@/assets/img/抖音2024619-643572.mp4'
    //     },
    //     {   id:110,
    //         name:'Goods',
    //         text:'养老标准',
    //         img:"@/assets/img/抖音2024619-643572.mp4"
    //     },
    //     {   id:110,
    //         name:'Goods',
    //         text:'养老标准',
    //         img:"@/assets/img/抖音2024619-643572.mp4"
    //     },
    //     {   id:110,
    //         name:'Goods',
    //         text:'养老标准',
    //         img:"@/assets/img/抖音2024619-643572.mp4"
    //     },        
    // ])
</script>

<template>

  <HomePanel title="养老普及" sub-title="4个短视频">
    <template #main>
      <ul class="good-list">
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构1.jpg" ></img>
            <p class="name">灌沟社区服务中心</p>
            <p class="extra_title">￥3750起</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构2.jpg" ></img>
            <p class="name">龙岩养老服务有限公司</p>
            <p class="extra_title">￥4000起</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构3.jpg" ></img>
            <p class="name">成东养老院</p>
            <p class="extra_title">￥5000起</p>
          </RouterLink>
        </li>
      </ul>
            <ul class="good-list">
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构4.jpg" ></img>
            <p class="name">爱颐养老院</p>
            <p class="extra_title">￥6050起</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构5.jpg" ></img>
            <p class="name">宏善养老</p>
            <p class="extra_title">￥3750起</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构6.jpg" ></img>
            <p class="name">上海养老院</p>
            <p class="extra_title">￥3750起</p>
          </RouterLink>
        </li>
      </ul>
            <ul class="good-list">
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构7.jpg" ></img>
            <p class="name">幸福养老院</p>
            <p class="extra_title">￥3750起</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构8.jpg" ></img>
            <p class="name">青羊区养老院</p>
            <p class="extra_title">￥3750起</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <img controls src="@/assets/image/养老机构9.jpg" ></img>
            <p class="name">康养养老院</p>
            <p class="extra_title">￥3750起</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang='scss'>
.good-list {
  display: flex;
  justify-content: space-around;
  height: 400px;

li {
  width: 30%;
  height: 300px;

  background: #f0f9f4;
  transition: all .5s;

&:hover{
  transition: all .5s;
}

img{
  width: 100%;
  height: 200px;
}

p{
  font-size: 22px;
  padding-top: 12px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.extra_title{
  color: $priceColor;
    }

  }  
}



</style>

