import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';
// import Login from '@scr/component/Login';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/Portafolio",
    name: "Portafolio",
    component: () => import("../components/Portafolio"),
  },
  {
    path: "/agregar",
    name: "agregar",
    component: () => import("../components/CreateComponent"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/Login"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../components/ListComponent"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/EditComponent"),
  },
  {
    path: '/conocenos',
    name: 'Conocenos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Conocenos.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
