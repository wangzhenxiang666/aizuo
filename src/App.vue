<template>
  <div id="app">
    <Footer v-show="isShow"></Footer>
    <router-view/>
  </div>
</template>

<script>
import Footer from '@/components/Navigation/Footer'
// import uri from '@/config/uri'
export default {
  data(){
    return {
      // isShow:true,
    }
  },
  components: { Footer },
   created() {
    //  this.$http.get(uri.getCities).then(ret=>console.log(ret))
    // this.$eventBus.$on('show_jiojio',(flag)=>{
    //   this.isShow = flag;
    // })
    },
    computed:{
      
        isShow() {
            return this.$store.state.global.isShowFooter;
        },
      
    }
}
</script>
<style lang="scss">

</style>
