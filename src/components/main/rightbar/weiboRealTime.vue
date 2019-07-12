<template>
  <div id="container">
    <h3 class="h3">微博热搜榜</h3>
    <table>
      <thead>
        <tr>
          <th class="th-1">序号</th>
          <th class="th-2">关键词</th>
          <th class="th-3">热度</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="td-1">
            <v-icon name="long-arrow-alt-up" scale="0.7"/>
          </td>
          <td class="td-2">
            <a :href="stick.url">{{stick.title}}</a>
          </td>
        </tr>
        <tr v-for="(elem,index) in weiboData" :key="elem.title">
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
  name: "",
  data: () => ({
    stick:[],
    weiboData:[],
  }),
  created() {
    this.getWeiboData()
  },
  methods: {
    getWeiboData() {
      this.$http.get('https://neveralone.cn/api/weibo').then((result)=>{
        this.weiboData = result.body.top10
        this.stick = result.body.stick
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
    margin-bottom: 15px;
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
      width:70%;
      text-align:left;
    }
    .td-3,.th-3{
      width: 20%;
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
        color: #f26d5f;
      }
      tr{
        width: 100%;
        line-height: 30px;
        .td-2{
          a{
            color:#0078b6;
            font-size: 12px;
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
