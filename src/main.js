import Vue from 'vue'
import App from './App.vue'
import {router} from "./router";
import axios from "axios"
import store from "./store";
import Moment from "vue-moment"

Vue.use(Moment)
axios.defaults.baseURL = "https://vue-chat-88f4c-default-rtdb.firebaseio.com/"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
