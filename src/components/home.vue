<template>
    <div class="app-container" @scroll='test'>
        <headerComponent></headerComponent>
        <mainComponent :type="type"></mainComponent>
       <footerComponent ></footerComponent>
    </div>
</template>
<script>
import headerComponent from './header.vue'
import footerComponent from './footer.vue'
import mainComponent from './main/main.vue'

export default {
    data() {
        return {
            type:'main',
        }
    },
    components:{
        headerComponent,
        footerComponent,
        mainComponent,
    },methods: {
      test() {
        console.log('test')
      }
    }
}
</script>
<style lang="scss" scoped>
.app-container{
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding-bottom: 60px;
}
</style>
