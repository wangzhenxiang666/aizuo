<template>
    <div class="zz">
        <div>
            <img v-lazy="filmInfo.poster" width="100%">
        </div>
        <div>
             <div>{{ filmInfo.name }}</div>
            <div>{{ filmInfo.category }}</div>
            <div>{{ filmInfo.premiereAt | parsePermiereAt }} 上映</div>
            <div>{{ filmInfo.nation }} | {{ filmInfo.runtime }} 分钟</div>
            <div>{{ filmInfo.synopsis }}</div>
        </div>
        <div>
                <div><h2>表演人员</h2></div>
            <Actors  :key="filmInfo.actors.length">
                <div
                    class="swiper-slide"
                    v-for="(item, index) in filmInfo.actors"
                    :key="index"
                    width="85"
                >
                    <img :src="item.avatarAddress" width="85" />
                </div>
            </Actors>
        </div>
        <div></div>
    </div>
</template>
<script>
import uri from '@/config/uri'
import Vue from 'vue';
import Actors from "@/views/Films/Actors";
import {mapMutations} from 'vuex'
import { Toast } from 'vant';
import moment from 'moment'
Vue.use(Toast);
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
    // loading用于配置懒加载时需要用的图片
    loading: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-05-30%2F5cef8c3cc4e26.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612531448&t=390f4234694264ace047f872806f08a9"
});
export default {
    data(){
        return{
            filmInfo:{actors: [] }
        }
    },
    components:{
        Actors
    },
    methods: {
        ...mapMutations("global", ["setFooter"]),
    },
       created(){
           this.$http
            .get(uri.getDetail + "?filmId=" + this.$route.params.filmId)
            .then((ret) => {
                if (ret.status == 0) {
                    this.filmInfo = ret.data.film;
                }else{
                   Toast.fail('网络繁忙');
               }
           })
        //    this.$eventBus.$emit("show_jiojio", false);
        this.setFooter(false);

       },
       beforeDestroy(){
        //    this.$eventBus.$emit("show_jiojio", true);
        this.setFooter(true);

       },
       filters:{
           parsePermiereAt(timestamp){
                return moment(timestamp * 1000).format("YYYY-MM-DD");
           }
       }
}
</script>
<style lang="scss" scoped>
    .zz{
       margin-bottom: 60px;
    }
    
</style>