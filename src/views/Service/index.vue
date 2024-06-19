<script setup>
import mianbaoxue from './components/mianbaoxue.vue';
import JiGou from './components/JiGou.vue';
import Lecture from './components/Lecture.vue';
import Travel from './components/Travel.vue';
</script>

<template>
    <mianbaoxue></mianbaoxue>
    <el-tabs type="border-card">
    <el-tab-pane label="机构养老"><JiGou></JiGou></el-tab-pane>
    <el-tab-pane label="养老学堂">
      <Lecture>
    </Lecture><router-view></router-view>
  </el-tab-pane>
    
    <el-tab-pane label="康养旅居"><Travel></Travel></el-tab-pane>
  </el-tabs>
</template>

<style scoped>

</style>