 /* jshint esversion: 6 */
import Vue from 'vue';
import './css/reset.css';
import 'babel-polyfill'
// import './css/font-awesome-4.7.0/css/font-awesome.min.css'
import app from './app.vue';
import router from './router.js';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import 'vue-awesome/icons/comment-dots';
import 'vue-awesome/icons/calendar';
import 'vue-awesome/icons/eye';
import 'vue-awesome/icons/long-arrow-alt-up';
// import 'vue-awesome/icons/book-open'
// import 'vue-awesome/icons/thumbs-up'
import Icon from 'vue-awesome/components/Icon.vue';
Vue.component('v-icon', Icon);


//highlight.js 配置
import hljs from './js/highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block);
    });
  });

//时间格式设置
import moment from 'moment';
Vue.filter('timeformat-full',function(value){
    return moment(value).format('YYYY-MM-DD HH:mm:ss');
});
Vue.filter('timeformat-day',function(value){
    return moment(value).format('YYYY-MM-DD');
});
const bus = new Vue();
var vm = new Vue({
    el:'#app',
    data:{bus},
    router,
    render:a=>a(app)
});
