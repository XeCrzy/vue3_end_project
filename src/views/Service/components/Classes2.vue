<script setup>
import HomePanel from './HomePanel.vue'
    import { ref } from 'vue'
    // const oldList = ref([
    //     {   id:110,
    //         name:'如何养老',
    //         text:'养老标准',
    //         video:'@/assets/video/抖音2024619-643572.mp4'
    //     },
    //     {   id:110,
    //         name:'Good',
    //         text:'养老标准',
    //         video:"@/assets/video/抖音2024619-643572.mp4"
    //     },
    //     {   id:110,
    //         name:'Nice',
    //         text:'养老标准',
    //         video:"@/assets/video/抖音2024619-643572.mp4"
    //     },
    //     {   id:110,
    //         name:'Wow',
    //         text:'养老标准',
    //         video:"@/assets/video/抖音2024619-643572.mp4"
    //     },        
    // ])
</script>

<template>

  <HomePanel title="养老知识" sub-title="必备的4个课程">
    <template #main>
      <ul class="good-list">
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-681842.mp4" ></video>
            <p class="name">如何养老</p>
            <p class="extra_title">养老标准</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-774528.mp4" ></video>
            <p class="name">如何养老</p>
            <p class="extra_title">养老标准</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-789797.mp4" ></video>
            <p class="name">如何养老</p>
            <p class="extra_title">养老标准</p>
          </RouterLink>
        </li>
        <li >
          <RouterLink to="/service">
            <video controls src="@/assets/video/抖音2024619-038847.mp4" ></video>
            <p class="name">如何养老</p>
            <p class="extra_title">养老标准</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<style scoped lang='scss'>
.good-list {
  width: 100%;
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

