import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Manage.vue'
import Manage from "@/views/Manage";
// import 'lib-flexible/flexible.js'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: ()=>import('../views/Manage.vue'),
    redirect: "/login", //首页配置
    children:[
        {
            path:'DataPanel',name:'DataPanel',component:()=>import('../views/DataPanel')
        },
        {
            path:'HomeMap',name:'HomeMap',component: ()=>import('../views/HomeMap')
        },
        {
            path:'datasearch',name:'datasearch',component:()=>import('../views/datasearch')
        },
        {
            path:'DataAnalysis',name:'DataAnalysis',component:()=>import('../views/DataAnalysis')
        },
        {
            path:'SpatialAnalysis',name:'SpatialAnalysis',component:()=>import('../views/SpatialAnalysis')
        }
    ] //子路由
},
    {
        path: '/login',
        name:'Login',
        component:()=>import('../views/Login')
    },{
        path: '/Register',
        name:'Register',
        component:()=>import('../views/Register')
    }

]

const router = new VueRouter({
    // mode: 'history',
    base: '/test/',
    routes
})

export default router
