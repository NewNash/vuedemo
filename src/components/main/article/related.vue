<template>
  <div id="container">
    <h3>相关阅读</h3>
      <ul>
        <li v-for="elem in contents" :key="elem.key">
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
        this.tags = data
        this.$http.get('https://neveralone.cn/api/related',
        {params:{
        tags:this.tags
        }}).then((result)=>{
        this.contents = result.body
      })
      })
      // console.log(this.tags)

    }
  }
}
</script>
<style lang="scss" scoped>
#container{
  h3{
    text-align: center;
    border-bottom: 1px solid #333;
  }
}
</style>
