import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import filmRouter from './routes/film'
import cineamaRouter from './routes/cinema'
import centerRouter from './routes/center'
import VuexCmp from "@/views/Vuex";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
const routes = [
 


{
  path:'/',
  redirect:'/films/nowplaying'
},
{
  path: "/vuex",
  component: VuexCmp,
},
...filmRouter,
cineamaRouter,
centerRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
