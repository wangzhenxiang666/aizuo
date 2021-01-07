<template>
    <div>
        <van-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
        <div class="logding">
        <van-loading size="24px" type="spinner" v-show="is_show">加载中...</van-loading>
           
        </div>
        <div class="zz">
             <van-card v-for="item in list" :key="item.filmId" @click='getDetail(item.filmId)'>
            <template #thumb>
                <img :src="item.poster" width="66" />
            </template>
            <template #title>
                <div class="title">
                    {{ item.name }}
                    <span class="item">{{ item.filmType.name }}</span>
                </div>
            </template>
            <template #desc>
                <div class="desc">
                    <div>
                        观众评分 <span class="grade">{{ item.grade }}</span>
                    </div>
                    <div>主演：{{ item.actors | parseActors }}</div>
                    <div>{{ item.nation }} | {{ item.runtime }} 分钟</div>
                    <div class="nowPlayingFilm-buy">购票</div>
                </div>
            </template>
            </van-card>
        </div>
        </van-pull-refresh>
    </div>
</template>
<script>
import Vue from 'vue';
import { Loading,Toast, Card,Tag,Button,PullRefresh } from 'vant';

Vue.use(Toast);
Vue.use(Loading);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);

Vue.use(PullRefresh);
import uri from '@/config/uri'
export default {
    data(){
        return{
            list:[],
            is_show:true,
            isLoading: false,
            pageNum: 1,
        }
    },
    
    methods:{
        onRefresh() {
            this.getData()
        },
        getData(){
            this.$http.get(uri.getNowPlaying+'?pageNum='+this.pageNum).then(ret=>{
            console.log(ret);
            if(ret.status==0){
                if(this.pageNum<=Math.ceil(ret.data.total / 10)){
                    this.list=[...ret.data.films,...this.list]
                    this.pageNum++
                }
               
            }else{
                Toast.fail('请求失败');
            }
                this.is_show=false
                this.isLoading=false

        })
        },
        getDetail(filmId){
            this.$router.push('/film/'+filmId)
        }
  },
    
    filters: {
        parseActors(actors) {
            if (actors) {
                var str = "";
                actors.forEach((el) => {
                    str += el.name + " ";
                });
                return str.substr(0, 15) + "...";
            } else {
                return "暂无主演";
            }
        },
    },
    created(){
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
    .logding{
        text-align: center;
    }
    img {
    border-radius: 0;
}
.zz{
    border-bottom: 50px;
}
// 样式设置
.title {
    font-size: 16px;
    color: black;
}
.van-card{
    height: 130px;
    background-color: #fff;
    border-bottom:1px solid #ededed ;
}
.item {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.grade {
    color: #ffb232;
    font-size: 14px;
}
.desc {
    font-size: 13px;
    position: relative;
    
}
.nowPlayingFilm-buy {
    float: right;
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: absolute;
    border: 1px solid #ff5f16;
    top:40%;
    right: 1%;
    
    border-radius: 4px;
}
</style>