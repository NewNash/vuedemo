<template>
    <div class="article-container">
        <div class="content-box" v-for="content in contents" :key="content._id">
            <img :src="content.imgSrc" alt="">
            <div class="article">
                <router-link :to="'/article/'+content._id">
                    <h3 class="title" v-html="content.title"> </h3>
                </router-link>
                <p class="content"> {{content.content | htmlFilter}} </p>
            </div>
            <div class="icon">
                <span class="time">
                    <v-icon name="calendar" scale="0.7"/>
                    {{ content.date|timeformat-day }}
                    </span>
                <span class="comment">
                  <v-icon name="comment-dots" scale="0.7"/>
                  {{ content.commentLength }}
                </span>
                <span class="readTimes">
                     <v-icon name="eye" scale="0.7"/>
                </span>
                <!-- <span class="good">
                   点赞
                    <v-icon name="thumbs-up" scale="0.7"/>
                </span> -->
                <span class="readAll">
                    <router-link :to="'/article/'+content._id">
                        阅读全文
                    </router-link>
                </span>
            </div>
        </div>
        <div v-if="isEnough">
            <p class="getmore" @click="getMoreContents" v-if="!nomoreContents">加载更多</p>
            <p class="nomore" v-if="nomoreContents">已经到头啦。。。</p>
        </div>

    </div>
</template>
<script>
    export default {
        props:['type','name'],
        data() {
            return {
                contents: [],
                nomoreContents:false,
                isEnough:true,
                pages:1,
                skipPages:0,
                oneReqNumber:10,
                sameSource:false,
            }
        },
        created() {
            this.getContents()
        },
        watch: {
                type:function(){
                   this.getContents()
                } ,
                name:function(){
                    this.getContents()
                },

        },
        methods: {
            getContents(sameSource){
              if(!sameSource){
                this.pages = 1
                this.skipPages = 0
              }
              this.$http.get('https://neveralone.cn/api/articleList',{
                params:{
                  type:this.type,
                  name:this.name,
                  pages:this.pages,
                  skip:this.skipPages,
                  oneReqNumber:this.oneReqNumber
                }
              }).then(res=>{
                if(sameSource){
                  for(var i =0 ;i<res.body.content.length;i++){
                      this.contents.push(res.body.content[i])
                  }
                }
                else{
                  this.contents = res.body.content
                }
                if(this.contents.length<this.oneReqNumber){
                    this.isEnough = false
                }
                else{
                  this.isEnough = true
                  if(res.body.contentLength == this.contents.length){
                    this.nomoreContents = true
                  }
                  if(res.body.contentLength > this.contents.length){
                    this.nomoreContents = false
                  }
                }
                this.sameSource = false
              })
            },
            getMoreContents(){
                this.pages++
                this.skipPages++
                this.sameSource = true
                this.getContents(this.sameSource)
            }
        },
        filters: {
            htmlFilter(value) {
                return value.replace(/<\/?.+?\/?>/g, '')
            },
        },
    }
</script>
<style lang="scss" scoped>
    .article-container {
        position: relative;
        width: 800px;
        padding-bottom: 50px;
        .content-box {
            height: 180px;
            overflow: hidden;
            position: relative;
            padding: 15px;
            border-bottom: 1px solid #ccc;
            img {
                float: left;
                width: 240px;
                height: 140px;
            }

            .article {
                float: right;
                width: 500px;
                height: 135px;
                padding-left: 15px;
                overflow: hidden;

                .title {
                    color: #585757;
                    font-size: 18px;
                }

                .content {
                    font-size: 14px;
                    margin-top: 10px;
                    line-height: 25px;
                    color: #9e9e9e
                }
            }

            .icon {
                position: absolute;
                bottom: 10px;
                width: 100%;
                font-size: 12px;
                color: #9e9e9e;
                span{
                    display: inline-block;
                    margin-right: 15px;
                }
                .readAll {
                    position: absolute;
                    right: 25px;
                    a{
                        color:#9e9e9e
                    }a:hover{
                        color:#131212;
                    }
                }
            }
        }
        .getmore{
            display:block;
            margin: 20px auto 0;
            width:80px;
            border:1px solid #a7a7a7;
            color:#a7a7a7;
            border-radius: 3px;
            text-align: center;
            padding: 3px;
            background: #fff;
            cursor: pointer;
            &:hover{
                color:#333;
                border:1px solid #333;
            }
        }
        .nomore{
            margin: 20px auto 0;
            color:#a7a7a7;
            text-align: center;
        }
    }
</style>
