<template>
    <div class="commentContainer">
        <div class="formbox">
            <p class="username">
                <span>姓名 </span>
                <input type="text" name="username"
                ref="username"
                @blur="verifyName"
                v-model="username">
                <span class="tips_username"
                :class="{wrong:!nameIsCorrect,correct:nameIsCorrect}"
                >{{ usernameTips }}</span>
            </p>
            <p class="email">
                <span>邮箱 </span>
                <input type="email" name="email" ref="email" v-model="email" @blur="verifyEmail">
                <span class="tips_email"
                :class="{wrong:!emailIsCorrect,correct:emailIsCorrect}"
                >{{ emailTips}} </span>
            </p>
            <p class="comment-box">
                 <textarea name="comment" class="comment" @blur="verifyComment" v-model="comment" ></textarea>
                 <span class="commentTips"
                 :class="{wrong:!commentIsCorrect,correct:commentIsCorrect}"
                 >{{ commentTips }}</span>
            </p>
            <button @click="postComment" class="btn">提交评论</button>
        </div>

        <div class="commentList">
            <div v-for="(item,index) in comments" :key="index" class="commentLine">
                <p class="commentname">
                    <span class="name">{{ item.username}}</span>
                    <span class="date">{{ item.time | timeformat-full }}</span>
                </p>
                <p class="commentcontent">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                username:'',
                nameIsCorrect:false,
                usernameTips:'',
                email:'',
                emailIsCorrect:false,
                emailTips:'',
                comment:'',
                commentIsCorrect:false,
                commentTips:'',
                comments:new Array()
            }
        },
    created() {
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get('https://neveralone.cn/api/getComments?articleID='+this.$route.params.id).then(result=>{
               this.comments = result.body
               this.$root.bus.$emit('commentLength',this.comments.length)
            })
        },
        postComment(){
            if(this.nameIsCorrect){
                if(this.emailIsCorrect){
                        var newComment={
                        articleID:this.$route.params.id,
                        username:this.username,
                        email:this.email,
                        time:Date.now(),
                        content:this.comment
                    }
                    this.comments.unshift(newComment)
                    this.$http.post('https://neveralone.cn/api/postComment',newComment)
                    this.username = this.email = this.comment = ''
                    this.nameIsCorrect = this.emailIsCorrect = false
                    this.emailTips = this.usernameTips = ''
                }
                else{
                    this.$refs.email.focus()
                }
            }
            else{
                this.$refs.username.focus()
            }

        },
        verifyName(){
            if(this.username ===""){
                this.nameIsCorrect = false
                this.usernameTips = '用户名不能为空'
            }
            else if(this.username.length>16){
                this.nameIsCorrect = false
                this.usernameTips = '用户名过长'
            }
            else{
                this.nameIsCorrect = true;
                this.usernameTips = ''
            }
        },
        verifyEmail(){
            var emailRules = /^[a-zA-Z\d_-]+@[a-zA-Z\d]+(\.[a-zA-Z\d]+)+$/
            if(emailRules.test(this.email)){
                this.emailIsCorrect = true;
                this.emailTips = ''
            }
            else{
                this.emailIsCorrect = false;
                this.emailTips = '请正确填写邮箱'
            }
        },
        verifyComment(){
            if(this.comment===''){
                this.commentIsCorrect = false;
                this.commentTips = '不能为空'
            }
            else if(this.comment.length<5){
                this.commentIsCorrect = false;
                this.commentTips = '内容太短'
            }
            else{
                 this.commentIsCorrect = true;
                 this.commentTips = ''
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.commentContainer{
    // border:1px solid red;
    width: 800px;
    margin: 0 auto;
    padding-bottom: 100px;
    // position: relative;
    .formbox{
        padding:20px;
        .wrong{
            color:red;
        }
        .correct{
            color:green;
        }
        .username{
            .tips_username{
                font-size: 12px;
            }
        }
        .email{
            .tips_email{
                font-size: 12px;
            }
        }
        .comment-box{
            position: relative;
            .commentTips{
                font-size: 12px;
                position: absolute;
                left: 10px;
                bottom:-25px;
            }
        }
        span{
            color:#333;
        }
        input{
            height:20px;
            border-radius: 3px;
            margin:5px 3px;
            border:1px solid rgb(155, 165, 157);
            font-size: 14px;
            padding-left: 3px;

        }
        textarea{
            width:730px;
            height: 100px;
            margin: 10px 0 0 0;
            padding:5px;
            font-size:14px;
            display: block;
            border-radius: 3px;
            color:#4a4e52;
            resize: both;
        }
        button{
            right: 30px;
            background-color: transparent;
            color:#6c757d;
            padding: 5px;
            border:1px solid #6c757d;
            border-radius: 5px;
            cursor: pointer;
            margin:10px 0 0 650px;
        }
        button:hover{
            color:#fff;
            background-color: #6c757d;
        }
    }
    .commentList{
        background: #eeecec73;
        .commentLine{
            margin-top: 2px;
            padding: 15px;
            background: #ebe9e9;
            border-radius: 5px;
            // border:1px solid blue;
            .commentcontent{
                margin-top: 10px;
                line-height: 25px;
                letter-spacing: 1px;
                text-indent: 30px;
                font-size: 14px;
                word-break:break-all;
                color:#222;
            }
            .commentname{
                // margin-right: 10px;
                // font-size: 12px;
                // line-height: 20px;
                .username{
                    color:#557597;
                    font-weight: 600;
                    display: inline-block;
                    margin:0 15px 10px 0;
                }
                .date{
                    font-size: 14px;
                    color:#666;
                }
            }
        }
    }
}
</style>
