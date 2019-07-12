<template>
    <div class="detailBox">
        <headerComponent></headerComponent>
        <section>
            <div>
                <artinfoComponent></artinfoComponent>
                <commentComponent></commentComponent>
            </div>
            <div class="rightbar">
              <div class="rightbarBox">
                <tagComponent></tagComponent>
                <latestArticleComponent></latestArticleComponent>
                <relatedComponent></relatedComponent>
              </div>

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
export default {
    components:{
        headerComponent,
        rightbarComponent,
        artinfoComponent,
        footerComponent,
        commentComponent,
        tagComponent,
        latestArticleComponent,
        relatedComponent
    },
    mounted() {
      //do something after mounting vue instance

    },
    methods: {
      methodName() {

      }
    },
    destroyed() {
      //do something after destroying vue instance

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
          }
          //
        }
    }
</style>
