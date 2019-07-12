<template>
    <div class="detailBox">
        <headerComponent></headerComponent>
        <section>
            <div>
                <artinfoComponent></artinfoComponent>
                <commentComponent></commentComponent>
            </div>
            <div class="rightbar">
              <div :class="{rightbarBox:tagFixed}">
                <tagComponent></tagComponent>
                <latestArticleComponent></latestArticleComponent>
                <relatedComponent></relatedComponent>

              </div>
                <topArrowComponent v-if="tagFixed"></topArrowComponent>
            </div>
        </section>
        <footerComponent></footerComponent>
    </div>
</template>
<script>
import headerComponent from '../../header.vue'
import rightbarComponent from '../rightbar.vue'
import artinfoComponent from './artinfo.vue'
import footerComponent from '../../footer.vue'
import commentComponent from './comment.vue'
import tagComponent from '../rightbar/tag.vue'
import latestArticleComponent from '../rightbar/latestArticle.vue'
import relatedComponent from './related.vue'
import topArrowComponent from '../rightbar/toparrow.vue'
export default {
    data:()=>({
        topArrowSwitch:false,
        tagFixed:false
    }),
    components:{
        headerComponent,
        rightbarComponent,
        artinfoComponent,
        footerComponent,
        commentComponent,
        tagComponent,
        latestArticleComponent,
        relatedComponent,
        topArrowComponent
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
    destroyed() {
        window.removeEventListener('scroll', this.showTopArrow)
    }
}
</script>
<style lang="scss" scoped>
.detailBox{
    height: 100%;
    min-height: 100vh;
    position: relative;
    padding-bottom: 60px;
}
    section{
        position: relative;
        width:1300px;
        margin: 0 auto;
        padding-top: 20px;
        display: flex;
        justify-content: space-around;
        .rightbar{
          position: relative;
          width: 350px;
          // border: 1px solid red;
          .rightbarBox{
            position: fixed;
              top: 10px;
          }
          //
        }
    }
</style>
