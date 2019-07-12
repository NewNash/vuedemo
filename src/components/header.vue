<template>
    <div id="header-container">
        <div class="box-container">
            <div class="title">
              <h1><routerLink to="/">You Are Not Alone</routerLink></h1>
            </div>
          <ul class="header-nav">
              <li>
                  <routerLink to="/">main</routerLink>
              </li>
              <li v-for="item in categorys" :key="item._id">
                  <router-link :to="'/c/'+item.name"> {{ item.name }} </router-link>
              </li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            categorys:[],
        }
    },
    created() {
        this.getCategorys()
    },
    methods:{
        getCategorys(){
            this.$http.get('https://neveralone.cn/api/getCategory').then(res=>{
                this.categorys = res.body
            })
        },
    }
}
</script>
<style lang="scss" scoped>
    #header-container{
        width:100%;
        height: 60px;
        background:linear-gradient(to bottom right, #fff, #bebebe) ;
        .box-container{
            width: 1200px;
            height: 100%;
            margin:0 auto;
            position: relative;
            display: flex;
            justify-content: space-between;
              .title{
                width: 30%;
                margin-top: 12px;
                font-size: 14px;
                a{
                  color:#4f97b2;
                }
              }
            .header-nav{
                width: 45%;
                height: 60px;
                display: flex;
                justify-content: space-between;
                li{
                    a{
                        color: #989898;
                        display: inline-block;
                        height: 60px;
                        line-height: 60px;
                        padding: 0 10px;
                        font-size: 16px;
                    }
                    a:hover{
                      color:#bbb;
                    }
                }
            }
        }
    }
</style>
