import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/home',
            name:'Home',
            component: ()=> import('@/views/Home.vue')
        },
        {
            path:'/About',
            name:'About',
            component: ()=> import('@/views/About.vue')
        },
        {
            path:'/Login',
            name:'Login',
            component: ()=> import('@/views/Login.vue')
        },
        {
            path:'/Logout',
			name:'Logout',
			component: ()=> import('@/views/lognotif.vue')
        },
        {
            path:'/testing',
			name:'testing',
			component: ()=> import('@/views/testing.vue')
        },
        {
            path:'/blogs',
			name:'blogs',
			component: ()=> import('@/views/blogs.vue')
        },
        {
            path:'/bjornIoT',
			name:'bjornIoT',
			component: ()=> import('@/views/IoT.vue')
        }
    ]
})