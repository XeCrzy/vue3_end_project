<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

const exitLogin = () =>{
  router.push('/login')
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
        <h1 class="logo"><img src="../../../assets/image/屏幕截图 2024-06-15 193335.png" alt=""></h1>
      <ul>
        <template v-if="true">
        
          <li><a href="javascript:;"><i class="iconfont icon-user"></i></a></li>
          <li>
            <el-popconfirm title="确认退出吗?" @confirm="exitLogin"  confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;" style="font-size: 18px;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          
         
        </template>
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">

.app-topnav {
//   background: #333;
h1{
    height: 0px;
}
 h1 img{
    height: 65px;
 }
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: black;
        line-height: 2;
        display: inline-block;

        i {
          font-size: 26px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>