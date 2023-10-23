import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MicrosoftLogin from "../views/MicrosoftLogin.vue";
import GoogleLogin from "../views/GoogleLogin.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/microsoft-login", component: MicrosoftLogin },
  { path: "/google-login", component: GoogleLogin },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
