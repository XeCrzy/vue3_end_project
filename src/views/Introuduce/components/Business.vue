<script setup>

</script>

<template> 
<div class="bisContainer">
    <ul>
        <li>
            <div class="yewu">
                <div class="bisImg">
                    <a href=""><img src="../../../assets/image/业务办理.png" alt=""></a>
                </div>
                <div class="extra_p">
                    <a href=""><div class="extra_p_title">津贴申请</div></a>
                    <a href=""><div class="extra_p_title">机构备案</div></a>
                    <a href=""><div class="extra_p_title">社保缴纳</div></a>
                </div>
            </div>
        </li>
        <li>
            <div class="yanglao">
                <div class="bisImg">
                    <a href=""><img src="../../../assets/image/机构养老.png" alt=""></a>
                </div>
                <div class="extra_p">
                    <a href=""><div class="extra_p_title">床位预定</div></a>
                    
                    
                </div>
            </div>
        </li>
        <li>
            <div class="shequ">
                <div class="bisImg">
                    <a href=""><img src="../../../assets/image/社区养老.png" alt=""></a>
                </div>
                <div class="extra_p">
                    <a href=""><div class="extra_p_title">查询服务</div></a>
                    
                    
                </div>
            </div>
        </li>
        <li>
            <div class="zhineng">
                <div class="bisImg">
                    <a href=""><img src="../../../assets/image/智能定制.png" alt=""></a>
                </div>
                <div class="extra_p">
                    <a href=""><div class="extra_p_title">养老建议</div></a>
                    
                </div>
            </div>
        </li>
    </ul>
</div>
    
</template>

<style scoped>
.bisContainer{
    width: 100%;
    height: 300px;
    /* background-color: pink; */
    margin-top: 50px;

}
.bisContainer>ul{
    display: flex;
    justify-content: space-around;
}
.bisContainer>ul li{
    width: 240px;
    height: 230px;
    padding: 5px 10px;
    /* background-color: red; */
}
.bisContaine>ul li a{
    display: block;
}
.bisImg{
    display: flex;
    justify-content: center;
    width: 140px;
    height: 120px;
    margin: 0 auto;
}
.bisImg img{
    width: 80px;
    height: 80px;
    
}
.extra_p{
    overflow: hidden;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    /* background-color: green; */
}
.extra_p .extra_p_title{
    display: flex;
    width: 65px;
    height: 40px;
    /* background-color: orange; */
    justify-content: space-around
}
.extra_p a{
    color: #000;
    display: block;
    font-size: 15px;
}
.extra_p a:hover{
    color: #ff7930;
    
}
.yewu{
    width: 100%;
    background-color: #efd0c0;
    border-radius: 8px;
}
.yanglao{
    width: 100%;
    background-color: #d0efc0;
    border-radius: 8px;
}
.shequ{
    width: 100%;
    background-color: #c0e9ef;
    border-radius: 8px;
}
.zhineng{
    width: 100%;
    background-color: #f9c9df;
    border-radius: 8px;
}
</style>