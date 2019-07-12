<template>
  <div id="container">
    <h3 class="h3">{{title}}</h3>
    <table>
      <thead>
        <tr>
          <th class="th-1">序号</th>
          <th class="th-2">关键词</th>
          <th class="th-3">搜索指数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(elem,index) in contents" :key="elem.title">
          <td class="td-1">{{index+1}}</td>
          <td class="td-2">
            <a :href="elem.url" target="_blank">{{elem.title}}</a>
          </td>
          <td class="td-3">{{elem.number}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props:['type','title'],
  name: "",
  data: () => ({
      contents:[]
  }),
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('https://neveralone.cn/api/hotlist?id='+this.type).then((result)=>{
        this.contents = result.body
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#container{
  .h3{
    color:#8b8a8a;
    text-align: center;
    margin: 15px 0;
    padding: 5px;
    border-bottom: 1px solid #8b8a8a;
  }
  table{
    width:350px;
    padding: 10px;
    font-size: 14px;
    .td-1,.th-1{
      width: 12%;
      text-align: center;
    }
    .td-2,.th-2{
      width:65%;
      text-align:left;
    }
    .td-3,.th-3{
      width: 23%;
      text-align:center;
    }
    thead{
      width: 100%;
      margin-bottom: 10px;
      th{
        font-size: 16px;
        color:#999;
      }
    }
    tbody{
      width: 100%;
      .td-1{
        color: #424242;
      }
      tr{
        width: 100%;
        line-height: 30px;
        .td-2{
          a{
            color:#2464B2;
            font-size: 12px;
            &:hover{
              text-decoration: underline;
            }
          }

        }
        .td-3{
          color:#8b8a8a;
        }
      }
    }
  }
}
</style>
