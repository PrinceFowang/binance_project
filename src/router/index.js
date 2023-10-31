import { createRouter, createWebHistory } from "vue-router";
//import App from "/src/App.vue";
import AboutUs from "/src/components/AboutUs.vue";
import Home from "/src/components/Home.vue";
import BeginnersGuide from "/src/components/BeginnersGuide.vue";
import CryptoPrices from "/src/components/CryptoPrices.vue";
import TrendingsArticles from "/src/components/TrendingsArticles.vue";
// Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: AboutUs },
  { path: "/Beginners", name: "Beginners", component: BeginnersGuide },
  { path: "/Crypto", name: "Crypto", component: CryptoPrices },
  { path: "/News", name: "News", component: TrendingsArticles },
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
