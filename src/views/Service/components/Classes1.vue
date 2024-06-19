<script setup>
import HomePanel from './HomePanel.vue'
    import { ref } from 'vue'
    // const oldList = ref([
    //     {   id:110,
    //         name:'养老短视频',
    //         text:'国外是如何养老的',
    //         video:'@/assets/video/抖音2024619-643572.mp4'
    //     },
    //     {   id:110,
    //         name:'Goods',
    //         text:'养老标准',
    //         video:"@/assets/video/抖音2024619-643572.mp4"
    //     },
    //     {   id:110,
    //         name:'Goods',
    //         text:'养老标准',
    //         video:"@/assets/video/抖音2024619-643572.mp4"
    //     },
    //     {   id:110,
    //         name:'Goods',
    //         text:'养老标准',
    //         video:"@/assets/video/抖音2024619-643572.mp4"
    //     },        
    // ])
</script>

<template>

  <HomePanel title="养老普及" sub-title="4个短视频">
    <template #main>
      <ul class="good-list">
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-053470.mp4" ></video>
            <p class="name">养老短视频</p>
            <p class="extra_title">若有所依</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-146884.mp4" ></video>
            <p class="name">养老短视频</p>
            <p class="extra_title">人口老龄化</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-477092.mp4" ></video>
            <p class="name">养老短视频</p>
            <p class="extra_title">新型养老</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-712419.mp4" ></video>
            <p class="name">养老短视频</p>
            <p class="extra_title">养老规划</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang='scss'>
.good-list {
  display: flex;
  justify-content: space-between;
  height: 400px;

li {
  width: 24%;
  height: 406px;

  background: #f7f7f7;
  transition: all .5s;

&:hover{
  transition: all .5s;
}

video{
  width: 100%;
  height: 306px;
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

