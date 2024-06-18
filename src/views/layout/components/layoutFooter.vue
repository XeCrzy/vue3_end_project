<script setup>

</script>

<template>
    <div class="app_footer">
        <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
          <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
        </dl>
      </div>
    </div>
    </div>
</template>

<style scoped lang='scss'>
    .app_footer{
        overflow: hidden;
        background-color: #f5f5f5;
        padding-top: 20px;

    .contact{
        background: #fff;
    }

    .container{
        padding: 20px 0 10px 20px;
        display: flex;
        justify-content: space-around;
    }

    dl{
        height: 150px;
        text-align: center;
        padding: 0 20px;
        border-right: 1px solid #f2f2f2;
        color: #999;
    }
    &:first-child{
        padding-left: 0;
    }

    &:last-child{
        border-right: none;
        padding-right: 0
    }

    }
    dt{
        line-height: 1;
        font-size: 20px
    }

    dd{
      margin: 36px 12px 0 0;
      float: left;
      width: 80px;
      height: 60px;
      padding-top: 10px;
      border: 1px solid #ededed;
      font-size: 13px;  
      .iconfont {
        font-size: 20px;
        display: block;
        color: #666;
      }

      &:hover {
        .iconfont {
          color: $xtxColor;
        }
      }
      &:last-child {
        margin-right: 0;
      }

      .qrcode {
      width: 92px;
      height: 92px;
      padding: 7px;
      border: 1px solid #ededed;
    }

    .download {
      padding-top: 5px;
      font-size: 14px;
      width: auto;
      height: auto;
      border: none;

      span {
        display: block;
      }

      a {
        display: block;
        line-height: 1;
        padding: 10px 25px;
        margin-top: 5px;
        color: #fff;
        border-radius: 2px;
        background-color: $xtxColor;
      }

      
    }
    .hotline {
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width: auto;
      height: auto;
      border: none;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }

    }
    

    

</style>