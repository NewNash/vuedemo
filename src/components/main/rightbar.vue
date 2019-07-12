<template>
    <div class="rightbarBox">

      <!-- <relatedComponent ></relatedComponent> -->
      <weiboComponent ></weiboComponent>
      <!-- <transition>
        <div v-if="tagFixed" class="FIXbOX">
          <tagComponent  class="tagFixed"></tagComponent>
          <latestComponent   class="latestFixed"></latestComponent>
          <weiboComponent  class="weiboFixed"></weiboComponent>
        </div>
      </transition> -->
      <hotSearchComponent :type="'1'" :title="'百度实时搜索热点'"></hotSearchComponent>
      <hotSearchComponent :type="'2'" :title="'近期热议话题'" ref='hotsearch'></hotSearchComponent>
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
import hotSearchComponent from  './rightbar/hotsearch.vue'
import toparrowComponent from  './rightbar/toparrow.vue'
import relatedComponent from './article/related.vue'
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
        relatedComponent,
        hotSearchComponent
    },
    mounted() {
      window.addEventListener('scroll',this.showTopArrow)
    },
    methods: {
      showTopArrow() {
        console.log(23)
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if(scrollTop>200){
          this.topArrowSwitch = true;
        }
        else{
          this.topArrowSwitch = false;
        }
        this.targetHeight = this.$refs.hotsearch.$el.offsetTop+ this.$refs.hotsearch.$el.clientHeight+50
        // console.log(this.$refs.hotsearch.$el.offsetTop+ this.$refs.hotsearch.$el.clientHeight+10)
        if(scrollTop>this.targetHeight){
          this.tagFixed = true;
        }
        if(scrollTop<this.targetHeight){
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
  // .latestFixed{
  //   position: fixed;
  //   top:250px;
  // }
  // .weiboFixed{
  //   position: fixed;
  //   top:500px;
  // }
  // .v-enter-active {
  //   transition: all 2s ease;
  // }
  // .v-leave-active {
  // transition: all 0.8s ease;
  // }
  // .v-enter,.v-leave-to{
  // opacity: 0;
  // }
  // .v-leave-to{
  //   transform: translateY(-50px);
  // }
}
</style>
