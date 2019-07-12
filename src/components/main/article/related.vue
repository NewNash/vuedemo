<template>
  <div id="container">
    <h3 class="title">相关阅读</h3>
      <ul>
        <li v-for="(elem,index) in contents" :key="elem.key">
          {{index+1}}.
          <router-link :to="'/article/'+elem._id">
            {{elem.title}}
          </router-link>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    contents:[],
    tags:[]
  }),
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      this.$root.bus.$on('relatedTags',(data)=>{
        this.tags = data;
        this.$http.get('https://neveralone.cn/api/related',
        {params:{
        tags:this.tags
        }}).then((result)=>{
        this.contents = result.body
      })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#container{
  margin-top: 10px;
  width: 350px;
  .title{
    border-bottom: 1px solid #999;
    text-align: center;
    padding-bottom: 4px;
    color: #8a8a8a;
  }
  ul{
    padding-left: 5px;
    li{
      color: #999;
      font-size: 14px;
      margin-top: 10px;
      position: relative;
      padding-right: 80px;
      a{
        color: #999;
      }
    }
  }
}
</style>
