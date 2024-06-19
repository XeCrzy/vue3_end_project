<template>
    <div class="new_contain">
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
          <!-- <el-radio-button value="top">top</el-radio-button>
          <el-radio-button value="right">right</el-radio-button>
          <el-radio-button value="bottom">bottom</el-radio-button> -->
          <!-- <el-radio-button value="left">left</el-radio-button> -->
        </el-radio-group>
    
        <el-tabs :tab-position="tabPosition" style="height: 400px" class="demo-tabs">
          <el-tab-pane style="margin-left: 20px;" label="新闻资讯">
            <div class="news_container">
              <ul>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 南宁市推出暖心养老服务 为“银发一族”排忧解难</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 人力资源社会保障部：支持银发经济健康发展</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 中国国家卫健委：全国医养结合机构床位达200万张</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 广西建成社区养老服务机构和设施1.2万个</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 民政部召开2024年第二季度例行新闻发布会，养老提到了这些···</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 民政部等七部门：养老机构预收费周期不得超12个月</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 中国东信受邀参加全区居家社区养老服务工作现场推进会</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 南宁：60岁以上老人可申请轮候住公办养老院</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 广西：推动旅居养老产业化特色化品牌化</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 南宁市推出暖心养老服务 为“银发一族”排忧解难</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 人力资源社会保障部：支持银发经济健康发展</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 中国国家卫健委：全国医养结合机构床位达200万张</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 广西建成社区养老服务机构和设施1.2万个</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 民政部召开2024年第二季度例行新闻发布会，养老提到了这些···</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 民政部等七部门：养老机构预收费周期不得超12个月</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 中国东信受邀参加全区居家社区养老服务工作现场推进会</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 南宁：60岁以上老人可申请轮候住公办养老院</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 广西：推动旅居养老产业化特色化品牌化</router-link> </li>
              </ul>  
            </div>
              
          </el-tab-pane>
          <el-tab-pane style="margin-left: 20px;" label="政策法规">
                        <div class="news_container">
              <ul>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 南宁市人民政府办公室关于印发南宁市被征地农民养老保险补贴资金预缴存工作流程的通知</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 桂民发〔2024〕3号 广西壮族自治区民政厅 广西壮族自治区发展和改革委员会等11部门关于印发《广西积极发展老年助餐服务实</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 桂民规〔2024〕2号 广西壮族自治区民政厅 广西壮族自治区财政厅关于做好经济困难失能老年人集中照护服务工作的通知</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 关于印发《长期护理保险失能等级评估管理办法（试行）》的通知</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 桂政办发〔2023〕74号 广西壮族自治区人民政府办公厅关于印发《深入推进“壮美广西·长寿福地”康养产业发展三年行动方案</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">《关于推进基本养老服务体系建设的意见》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">《广西壮族自治区养老服务补贴管理办法（试行）》的</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 广西壮族自治区“十四五”养老服务体系规划</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 四部门有关负责同志就《“十四五”国家老龄事业发展和养老服务体系规划》答记者问</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 南宁市人民政府办公室关于印发南宁市被征地农民养老保险补贴资金预缴存工作流程的通知</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 桂民发〔2024〕3号 广西壮族自治区民政厅 广西壮族自治区发展和改革委员会等11部门关于印发《广西积极发展老年助餐服务实</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 桂民规〔2024〕2号 广西壮族自治区民政厅 广西壮族自治区财政厅关于做好经济困难失能老年人集中照护服务工作的通知</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 关于印发《长期护理保险失能等级评估管理办法（试行）》的通知</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 桂政办发〔2023〕74号 广西壮族自治区人民政府办公厅关于印发《深入推进“壮美广西·长寿福地”康养产业发展三年行动方案</router-link>  </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">《关于推进基本养老服务体系建设的意见》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">《广西壮族自治区养老服务补贴管理办法（试行）》的</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 广西壮族自治区“十四五”养老服务体系规划</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 四部门有关负责同志就《“十四五”国家老龄事业发展和养老服务体系规划》答记者问</router-link>  </li>
              </ul>  
            </div>
          </el-tab-pane>
          <el-tab-pane style="margin-left: 20px;" label="养老标准">
                        <div class="news_container">
              <ul>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《老年旅游服务规范 景区》</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《生态休闲养生(养老)基地建设和运营服务规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《养老机构服务安全基本规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《老年人能力评估规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《城乡居民基本养老保险服务规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《养老机构基本规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《居家养老上门服务基本规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《老年旅游服务规范 景区》</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《生态休闲养生(养老)基地建设和运营服务规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《养老机构服务安全基本规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《老年人能力评估规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《城乡居民基本养老保险服务规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《养老机构基本规范》</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details"> 《居家养老上门服务基本规范》</router-link> </li>                  
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane style="margin-left: 20px;" label="产业研究">
                        <div class="news_container">
              <ul>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>                  
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>                  
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2024年中国健康管理行业研究报告</router-link></li>
                  <li><i class="iconfont icon-youyi1"></i><router-link to="/news/details">  2022中国商业养老服务市场发展研究报告</router-link> </li>
              </ul>  
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="demo-pagination-block">

    <el-pagination
      v-model:current-page="currentPage3"
      v-model:page-size="pageSize3"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="display: flex; justify-content: end;"
    />
  </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsInstance } from 'element-plus'



const currentPage3 = ref(5)
const pageSize3 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const tabPosition = ref<TabsInstance['tabPosition']>('left')
</script>

<style scoped>
.new_contain{
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
}
.news_container{
    width: 100%;
    height: 400px;
    /* background-color: pink; */
}
.news_container li{
    overflow: hidden;
    width: 100%;
    height: 40px;
    /* background-color: red; */
    
}
.news_container li a{
    color: #000;
}
.news_container li a:hover{
    color: #ff7930;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
</style>