import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from "./modules/user";
import global from "./modules/global";

export default new Vuex.Store({
  state: {
          num: 0,
          num2: 100,
          age:20
  },
  mutations: {
    setNum(qq,zz){
      qq.num+=zz
    },
    setNum2(qq,zz){
      qq.num2+=zz
    }
  },
  actions: {
    asynSetNum(context,arg){
      setTimeout(()=>{
        context.commit('setNum2',arg)
      },3000)
    }
  },
  getters:{
    ageIsAdult(state) {
      return state.age >= 18 ? "成年了" : "未成年";
  },
  },
  modules: {
    user,
    global
  }
})
