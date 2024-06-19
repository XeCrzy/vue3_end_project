<script setup>
import { reactive, ref } from 'vue'
import Jigouplace from './Jigouplace.vue';

const form = reactive({
  message: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const reset= ()=>{
    form.message=''
}

</script>

<template>
<el-form :model="form" label-width="auto" style="width: 100%;">
<el-form-item>
        <span>
            <el-input v-model="form.message" style="width: 500px;"/>
        </span>
        <el-button>搜索</el-button><el-button @click="reset">重置</el-button>
</el-form-item>
<el-form-item label="位置区域">
      <el-select  placeholder="请选择你的区域">
        <el-option label="广州" value="guangzhou" />
        <el-option label="清远" value="qingyuan" />
        <el-option label="肇庆" value="zhaoqing" />
        <el-option label="潮汕" value="chanshan" />
        <el-option label=" ··· " value="chanshan" />
      </el-select>
</el-form-item>
<el-form-item label="价格范围">
      <el-checkbox-group >
        <el-checkbox-button value="onethousand" name="type">
          1000以下
        </el-checkbox-button>
        <el-checkbox-button value="twothousand" name="type">
          1000-1999
        </el-checkbox-button>
        <el-checkbox-button value="threethousand" name="type">
          2000-2999
        </el-checkbox-button>
        <el-checkbox-button value="fourthousand" name="type">
          3000-3999
        </el-checkbox-button>
        <el-checkbox-button value="abovefourthousand" name="type">
          4000以上
        </el-checkbox-button>
      </el-checkbox-group>
</el-form-item>
<el-form-item label="受助老人类">
      <el-checkbox-group v-model="form.type">
        <el-checkbox value="shineng" name="type">
          完全失能
        </el-checkbox>
        <el-checkbox value="bfshineng" name="type">
          部分失能
        </el-checkbox>
        <el-checkbox value="zili" name="type">
          自理
        </el-checkbox>
        <el-checkbox value="tekun" name="type">
          特困
        </el-checkbox>
        <el-checkbox value="canji" name="type">
          残疾
        </el-checkbox>
        <el-checkbox value="qita" name="type">
          其他
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>   
</el-form>

 <el-form style="width: 100%;" :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item></el-form-item>
    <el-form-item label="高级筛选">
      <el-select
        placeholder="床位数"
        clearable
      >
        <el-option label="全部" value="all" />
        <el-option label="100张以下" value="beijing" />
        <el-option label="100-199张" value="all" />
        <el-option label="200-299" value="beijing" />
        <el-option label="300-399" value="all" />
        <el-option label="400张以上" value="beijing" />
      </el-select>
        <el-select
        placeholder="机构性质"
        clearable
      >
        <el-option label="全部" value="all" />
        <el-option label="公建公营" value="beijing" />
        <el-option label="公建民营" value="all" />
        <el-option label="民建民营" value="beijing" />

        <el-option label="" value="" />
      </el-select>
       <el-select
        placeholder="机构等级"
        clearable
      >
        <el-option label="全部" value="all" />
        <el-option label="一级" value="beijing" />
        <el-option label="二级" value="all" />
        <el-option label="三级" value="beijing" />
        <el-option label="四级" value="all" />
        <el-option label="五级" value="beijing" />
               <el-option label="未达标" value="beijing" />
                      <el-option label="未定级" value="beijing" />
      </el-select>
        <el-select
        placeholder="医疗服务"
        clearable
      >
        <el-option label="全部" value="all" />
        <el-option label="未开展" value="beijing" />
        <el-option label="内设医疗机构(自我医疗保障)" value="all" />
        <el-option label="与医疗机构合作(协议医疗保障)" value="beijing" />
        <el-option label="" value="" />
      </el-select>
    </el-form-item>
    <el-form-item label="入住日期">
      <el-date-picker
        type="date"
        placeholder="选择日期"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>

<Jigouplace></Jigouplace>

</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 100px;
  margin-left: 10px;
}
</style>
