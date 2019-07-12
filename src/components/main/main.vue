<template>
    <div class="mainContainer">
        <div class="mainbox">
            <figureComponent :type="type" :name="name" class="articleComponent"></figureComponent>
            <rightbarComponent class="rightbarComponent"></rightbarComponent>
        </div>
    </div>
</template>
<script>
import figureComponent from './figure.vue'
import rightbarComponent from './rightbar.vue'
export default {
    props:['type','name'],
    components:{
        figureComponent,
        rightbarComponent
    },
    methods:{
        getContentForMain(){
            this.$emit('getContentForMain')
        }
    }
}
</script>
<style lang="scss" scoped>
.mainContainer{
    width: 100%;
    .mainbox{
        position: relative;
        width:1300px;
        margin: 0 auto;
        padding-top: 5px;
        display: flex;
        justify-content: space-around;
    }

}
</style>
