
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MaterialKit from "./plugins/material-kit";
import Axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(VueAxios ,Axios);

Axios.defaults.baseURL = 'http://localhost:3000/';

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
