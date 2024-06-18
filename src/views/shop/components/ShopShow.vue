<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'

const renovationlist = ref([
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 },
    { title:"老年人智能家用康复机" , img_url:"../../../assets/image/微信图片_20240616223855.jpg" , num:99 }
])

</script>

<template>
<div class="container_bg">
    <div class="renovation">
        <div class="index_title">
            <h3>商城</h3>
            <p>商品展示</p>
        </div>
        <div class="renovation-list">
        <ul>
            <li v-for="(item,Index) in renovationlist" :key="Index">
                <div class="renovation-card">
                    <a href="#" target="_blank">
                        <div class="renovation-img">
                            <img src="../../../assets/image/fei.jpeg"  alt="">
                        </div>

                        <div class="renovation-box">
                            <h3>{{item.title}}</h3>
                            <div class="renovation-card-info">
                                <p>专注养老</p>
                                <span><i class="iconfont icon-xihuan1"></i> {{item.num}}人查看</span>
                            </div>
                        </div>   
                        <div class="renovation-hover">
                            <span>查看详情</span>
                        </div> 
                    </a>
                </div>
            </li>
        </ul>
    </div>
    </div>
</div>
</template>

<style scoped>

.container_bg {
    padding: 50px 0;
}
.index_title {
    text-align: center;
}
.index_title h3 {
    font-size: 42px;
    font-weight: 700;
}
.index_title p {
    font-size: 20px;
    color: #666;
    padding: 20px;
}

.renovation-list ul {
    width: 100%;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap: 40px;
}
.renovation-list ul li {
    width: calc(100% / 3px);
    border: 1px solid #ccc;
    position: relative;
}
.renovation-img {
    width: 100%;
    height: 225px;
    overflow: hidden;
}
.renovation-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .5s;

}
.renovation-box {
    padding: 20px;
}
.renovation-box h3 {
    font-size: 18px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.renovation-box-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
.renovation-box-info p {
    color:#999;
}
.renovation-box-info span {
    color:var(--bgcolor);
}

/* 1、移入li上面的时候出现阴影 */
.renovation-list ul li:hover {
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
/* 2、移入时图片放大 */
.renovation-list ul li:hover .renovation-img img {
    transform:scale(1.1);
}

.renovation-hover {
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 99;
    opacity: 0;
}
/* 3、图片颜色变深 */
.renovation-list ul li:hover .renovation-hover {
    width: 100%;
    height: 225px;
    opacity: 1;
    background-color: rgba(0, 0, 0, .4);
}

/* 4、移入时方框的动画 */
.renovation-hover::before {
    content: '';
    position: absolute;
    inset:0;
    margin:auto;
    width: 0;
    height: 0; 
    transition: all .2s;
}
.renovation-list ul li:hover .renovation-hover::before {
    content: '';
    width: 70%;
    height: 60%;
    border: 1px solid #fff;
}

/* 5、查看详情的动画 */
.renovation-hover span {
    color: #fff;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,30px);
}
.renovation-list ul li:hover .renovation-hover span {
    transform: translate(-50%,-50%);
    transition: all .2s;
}
</style>

