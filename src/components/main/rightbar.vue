<template>
    <div class="rightbarBox">
        <div :class="{tagFixed:tagFixed}" >
          <tagComponent></tagComponent>
          <latestComponent ></latestComponent>
          <weiboComponent ></weiboComponent>
        </div>
      <toparrowComponent v-if="topArrowSwitch"></toparrowComponent>
    </div>
</template>
<script>
import tagComponent from './rightbar/tag.vue'
import weiboComponent from  './rightbar/weiboRealTime.vue'
import latestComponent from  './rightbar/latestArticle.vue'
import toparrowComponent from  './rightbar/toparrow.vue'
export default {
  data:()=>({
    topArrowSwitch:false,
    tagFixed:false,
    targetHeight:null,
  }),
    components:{
        tagComponent,
        weiboComponent,
        latestComponent,
        toparrowComponent,
    },
    mounted() {
      window.addEventListener('scroll',this.showTopArrow)
    },
    methods: {
      showTopArrow() {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>100){
          this.topArrowSwitch = true;
          this.tagFixed = true;
        }
        else{
          this.topArrowSwitch = false;
          this.tagFixed = false;
        }
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.showTopArrow)
},
}
</script>
<style lang="scss" scoped>
.rightbarBox{
  width: 350px;
  position: relative;
  .tagFixed{
    position: fixed;
    top:0;
  }
}
</style>
