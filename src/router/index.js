import { createRouter, createWebHistory } from "vue-router";
//import App from "/src/App.vue";
import AboutUs from "/src/components/AboutUs.vue";
import Home from "/src/components/Home.vue";

// Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutUs },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/* new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app"); */

export default router;
