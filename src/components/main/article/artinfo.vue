<template>
    <div class="artBox">
        <h1 class="title" v-html="content.title"></h1>
        <div class="article-info">
            <span class="time">
                <v-icon name="calendar" scale="0.6"/>
                <!-- <i class="fal fa-calendar-alt"></i> -->
                {{ content.date|timeformat-full }}
            </span>
            <span class="comment">

                <v-icon name="comment-dots" scale="0.7"/>
                {{ commentLength }}


            </span>
            <span class="readTimes">

                <v-icon name="eye" scale="0.7"/>

            </span>
            <!-- <span class="good">
                   点赞
                <v-icon name="thumbs-up" scale="0.7"/>

            </span> -->
        </div>
        <p class="content" v-html="content.content" v-highlight>
        </p>
        <p >
            <router-link
            class="tag"
            v-for="item in content.tag"
            :key="item"
            :to="'/tag/'+item"
            >{{ item }}</router-link>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
             id:this.$route.params.id,
             content:{},
             commentLength:''
        }
    },
    created(){
        this.getContentsDetail()
        // console.log(this.content.tag)
        // this.$root.bus.$emit('relatedTags',this.content.tag)
    },
    methods:{
        getContentsDetail(){
            this.$http.get('https://neveralone.cn/api/articleInfo?id='+this.id).then(res=>{
                this.content = res.body[0]
                this.$root.bus.$emit('relatedTags',this.content.tag)
            })
        },
    },
    mounted() {
        this.$root.bus.$on('commentLength',(msg)=>{this.commentLength = msg})
    },
    watch: {
        '$route'(){
          this.id = this.$route.params.id
          this.getContentsDetail()
        }
    }
}
</script>
<style lang="scss" scoped>
.artBox{
    width:800px;
    padding-bottom: 50px;
    .title{
        margin:10px 0 0px;
        font-size: 30px;
    }
    .article-info{
        color:rgb(99, 99, 99);
        font-size: 13px;
        padding:10px;
        border-bottom:1px solid #9e9d9d;
        margin-bottom: 15px;
        span{
            display:inline-block;
            margin-right: 20px;
        }
    }
    .content{
        text-indent: 5px;
        line-height: 30px;
    }
    .tag{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 5px;
        background: #6c757d;
        color:#fff;
        border-radius: 4px;
        margin:30px 20px 0 0;
        border:1px solid #6c757d;
    }
    .tag:hover{
        cursor: pointer;
        background: #fff;
        color:#6c757d;
    }
}
</style>
