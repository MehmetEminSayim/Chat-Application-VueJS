import Vue from "vue"
import VueRouter from "vue-router"
import Welcome from "./components/Welcome";
import Chat from "./components/Chat";

Vue.use(VueRouter)

export const router = new VueRouter({
  routes : [
    { path : "/" , component : Welcome },
    { path : "/chat" , component : Chat, props: true, name :"chatpage" ,beforeEnter(to,from,next){
      if (to.params.name){
        next();
      }else {
        next("/")
      }
      } },
    { path : "*" ,redirect : "/" }
  ],
  mode : "history"
})
