<template>
    <div :class="{active:isDw}">
        <van-tabs @click="onClick" v-model='active'>
        <van-tab title="正在热映"></van-tab>
        <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data(){
       return {
            active:0,
            urls:['/films/nowPlaying','/films/comingSoon'],
            isDw:false
       }
    },
    
    created(){
        this.active=this.urls.indexOf(this.$route.path)
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            var scrollTop=document.documentElement.scrollTop
            if(scrollTop>=150){
                this.isDw=true
            }else{
                this.isDw=false

            }
        })
    },
    methods: {
    onClick(index) {
        this.$router.push(this.urls[index])
    },
  },
}
</script>
<style lang="scss" scoped>
    .active{
        position: fixed;
        z-index: 999;
        width: 100%;
    }
</style>