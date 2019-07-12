<template>
    <div class="tag-container">
        <h4>热门标签</h4>
        <div class="tag-box" >
            <router-link
            class="tag-block"
            v-for="(item,index) in tags"
            :key="index"
            :to="'/tag/'+item"
            >
            {{ item }}
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            tags:[],
        }
    },
    created(){
        this.getTags()
    },
    methods:{
        getTags(){
            this.$http.get('https://neveralone.cn/api/tagList').then(res=>{
                this.tags = res.body
            })
        },
    }
}
</script>
<style lang="scss" scoped>
    .tag-container{
        width:350px;
        box-sizing: border-box;
        margin: 20px 0;
        h4{
            margin-bottom: 10px;
            padding-bottom: 5px;
            text-align: center;
            border-bottom:1px solid #ccc;
            color:#8b8a8a;
        }
        .tag-box{
            padding-left: 8px;
            .tag-block{
                background: #fff;
                border:1px solid#959ea7;
                border-radius: 3px;
                padding: 3px 4px;
                margin: 5px ;
                color:#6c757d;
                display:inline-block;
                line-height: 25px;
                font-size: 16px;
                transition: all .5s;
            }
            .tag-block:hover{
                color:#fff;
                background: #6c757d;
            }
        }

    }
</style>
