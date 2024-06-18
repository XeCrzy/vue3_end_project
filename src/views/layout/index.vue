<script setup>
import LayoutNav from './components/layoutNav.vue';
import LayoutHeader from './components/layoutHeader.vue';
import LayoutFooter from './components/layoutFooter.vue';
</script>

<template>
    <div>
        <layoutNav></layoutNav>
        <layoutHeader></layoutHeader>
        <!-- 二级路由出口 -->
         <router-view ></router-view>
         <layoutFooter></layoutFooter>
    </div>
</template>

<style scoped></style>