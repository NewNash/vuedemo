<template>
  <div id="arrowBox" >
    <div class="container" @click="toTop">
      <v-icon name="long-arrow-alt-up" class="arrow" scale="1.8" />
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods:{
    toTop(){
      if(document.body.scrollTop){
        var timer = setInterval(() => {
          if(document.body.scrollTop>0){
            document.body.scrollTop = document.body.scrollTop-50
          }
          else{
            clearInterval(timer)
          }
        }, 10);
      }
      else{
        var timer = setInterval(() => {
          if(document.documentElement.scrollTop>0){
            document.documentElement.scrollTop = document.documentElement.scrollTop/1.1-10
          }
          else{
            clearInterval(timer)
          }
        }, 10);
      }
      }
  }
}
</script>
<style lang="scss" scoped>
#arrowBox{
  position: fixed;
  bottom: 50px;
  right: 5%;
  .container{
    width: 50px;
    height: 50px;
    background: #cbcbcb;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      background: #626262;
    }
    .arrow{
      margin:11px 18px;
      color:#fff;
      display: inline-block;
      cursor: pointer;
    }
  }
}

</style>
