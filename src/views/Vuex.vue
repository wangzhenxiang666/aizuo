<template>
    <div>
        <h1>这是vuex专用组件</h1>
        <button @click="clickHandler">触发修改</button>
        <button @click="clickHandler2">模块化</button>
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    created(){
        // console.log(user/this.$store.state.age);
        // console.log(this.$store.state.num2);
    },
    computed:{
        // ...mapActions(["num", "num2"]),
        ...mapState("user", ["username", "age", "email"]),
        ...mapGetters("user", ["isAdult"]),

    },
    mounted(){
    },
    methods:{
            ...mapMutations("user", ["setUsername"]),
             ...mapActions("user", ["asyncSetAge"]),
        clickHandler() {
            
            // this.asynSetNum(70);
            
            // console.log(this.$store.getters.ageIsAdult);
        },
        clickHandler2() {
            
        // console.log(this.$store.state.user.age);
        // console.log(this.age);
            
            // this.asynSetNum(70);
            // this.$store.commit("user/setUsername", "administrator");
            // this.setUsername("zhangsan");
            //  this.$store.dispatch("user/asyncSetAge", 17);
            // this.asyncSetAge(100)
            // console.log(this.$store.getters.ageIsAdult);
            console.log(this.$store.getters["user/isAdult"])
            
            console.log(this.isAdult);
        },
    }
}
</script>