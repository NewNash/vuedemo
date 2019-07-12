import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './components/home.vue'
const searchresult =()=>import('./components/searchresult.vue')
const article = ()=>import('./components/main/article/article.vue')

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/',component:home},
        {path:'/article/:id',component:article},
        {path:'/:type/:name',component:searchresult},
    ]
})
