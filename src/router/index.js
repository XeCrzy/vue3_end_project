import { createWebHashHistory, createRouter } from 'vue-router'

import Introduce from '../views/Introuduce/index.vue'
import Login from '../views/login/index.vue'
import News from '../views/news/index.vue'
import Shop from '../views/shop/index.vue'
import Service from '../views/Service/index.vue'
import Layout from '../views/layout/index.vue';
import NewsDetails from '../views/news/components/newsdetails.vue';
import Classes from '@/views/Service/components/Classes1.vue'

const routes = [
    {
        path:'/',  //布局页
        component:Layout,
        redirect:'/login',
        children:[
    {
        path:'/introduce', //简介页
        component:Introduce,    
    },
    {
        path:'/news', //新闻资讯页
        component:News,
    },
    {
        path:'/news/details',
        component:NewsDetails
    },
    {
        path:'/shop', //商品展示页
        component:Shop
    },
    {
        path:'/service', //养老服务页（社区）
        component:Service

    }
        ]  
    },
    {
        path:'/login', //登录页
        component:Login
    },
    
    
]

const router =createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router