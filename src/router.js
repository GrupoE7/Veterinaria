import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
 import CreateComponent from "./components/CreateComponent.vue";
 
 import crearusuario from "./components/crearusuario.vue";

import ListComponent from "./components/ListComponent.vue";
import error_clave from "./components/error_clave.vue";





Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

///////////////////////////////

{
  path: "/ListComponent",
  name: "ListComponent",  
  components: { default: ListComponent, header: MainNavbar, footer: MainFooter },
  props: {
    header: { colorOnScroll: 400 },
    footer: { backgroundColor: "black" }
  }
},
///////////////////////////////////////////////
{
  path: "/error_clave",
  name: "error_clave",  
  components: { default: error_clave, header: MainNavbar, footer: MainFooter },
  props: {
    header: { colorOnScroll: 400 },
    footer: { backgroundColor: "black" }
  }
},
//////////////////////////////////////////////////
{
  path: "/CreateComponent",
     name: "CreateComponent",  
   components: { default: CreateComponent, header: MainNavbar, footer: MainFooter },
   props: {
     header: { colorOnScroll: 400 },
     footer: { backgroundColor: "black" }
   }
 },
 /////////////////////////////////////////////////

///////////////////////////////////////////////////////////
{
  path: "/crearusuario",
     name: "crearusuario",  
   components: { default: crearusuario, header: MainNavbar, footer: MainFooter },
   props: {
     header: { colorOnScroll: 400 },
     footer: { backgroundColor: "black" }
   }
 },


    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
