<template>
    <div class="container">
       <van-list
  v-model="loading"
  :finished="finished"
  finished-text="我是有底线的"
  @load="onLoad"
>
       
        <div class="zz">
             <van-card v-for="item in list" :key="item.filmId" >

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
                        上映时间 <span>{{item.premiereAt|parsePremiereAt}}</span>
                    </div>
                    <div>主演：{{ item.actors | parseActors }}</div>
                    <div>{{ item.nation }} | {{ item.runtime }} 分钟</div>
                    <div class="nowPlayingFilm-buy">订票</div>
                </div>
            </template>
            </van-card>
        </div>
            </van-list>
        
    </div>
</template>
<script>
import Vue from 'vue';
import { Loading,Toast, Card,Tag,Button,List} from 'vant';

Vue.use(Toast);
Vue.use(Loading);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
import uri from '@/config/uri'
import moment from 'moment'
export default {
    data(){
        return{
            list:[],
            is_show:true,
            pageNum: 1,
            loading: false,
            finished: false,
        }
    },
    methods:{
        onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            this.getData()
     
    },
        getData(){
            this.$http.get(uri.getComingSoon+'?pageNum='+this.pageNum).then(ret=>{
            console.log(ret);
            if(ret.status==0){
                if(this.pageNum<=Math.ceil(ret.data.total / 5)){
                    this.list=[...this.list,...ret.data.films]
                    this.pageNum++
                } else {
                            // 没有数据（显示加载完成）
                            this.finished = true;
                        }
               
            }else{
                Toast.fail('请求失败');
            }
                this.loading = false;

        })
        },
    
  
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
        parsePremiereAt(timestamp) {
            // 周几的数组（可以避免去使用分支判断）
            const arr = [
                "周日",
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六",
            ];
            // 注意时间单位的问题，接口返回的时间单位是秒，而moment时间单位是毫秒
            // 周几
            const week = arr[moment(timestamp * 1000).format("d")];
            // 日
            const day = moment(timestamp * 1000).format("D");
            // 月
            const month = moment(timestamp * 1000).format("M");
            return `${week} ${month}月${day}日`;
        },
    },
    created(){
        // this.getData()
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
.container {
    margin-bottom: 50px;
}
.zz{
    border-bottom: 80px;
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