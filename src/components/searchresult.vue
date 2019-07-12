<template>
    <div class="searchBox">
        <headerComponent></headerComponent>
        <mainComponent :type="type" :name="name"></mainComponent>
        <footerComponent></footerComponent>
    </div>
</template>
<script>
import headerComponent from './header.vue'
import footerComponent from './footer.vue'
import mainComponent from './main/main.vue'
export default {
    data() {
        return {
            content:[],
            type:this.$route.params.type,
            name:this.$route.params.name
        }
    },
   components:{
        headerComponent,
        mainComponent,
        footerComponent,
    },
    watch: {
        '$route'(to,from){
            this.type = this.$route.params.type
            this.name = this.$route.params.name
        }
    }
}
</script>
<style lang="scss" scoped>
.searchBox{
    min-height: 100vh;
    position: relative;
    padding-bottom: 50px;
}
</style>
