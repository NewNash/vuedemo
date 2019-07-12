<template>
  <div id="container">
    <h3 class="h3">最近文章</h3>
    <div class="article">
      <p v-for="(elem,index) in articles" :key="elem._id" class="item">
        <span class="index">{{index+1}}.</span>
        <router-link class="title" :to="'/article/'+elem._id">
          {{elem.title}}
        </router-link>
        <span class="time">{{elem.date|timeformat-day}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    articles:[]
  }),
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      this.$http.get('https://neveralone.cn/api/latestArticle').then((result)=>{
        this.articles = result.body
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#container{
  margin:20px 0;
  width:350px;
  .h3{
    padding: 5px;
    color:#8b8a8a;
    text-align: center;
    border-bottom: 1px solid #999;
  }
  .article{
    color:#999;
    font-size: 14px;
    .item{
      position: relative;
      margin:10px 0;
      padding-right: 80px;
      padding-left: 20px;
      .index{
        position: absolute;
        left: 4px;
        top:3px;
      }
      .title{
        color:#999;
      }
      .title:hover{
        color:#333;
      }
      .time{
        position: absolute;
        right: 3px;
        top:5px;
        line-height: 100%;
      }
    }
  }
}
</style>
