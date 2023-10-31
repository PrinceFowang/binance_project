import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "@/store"; // Import your VueX store
import axios from "axios"; // Import Axios

// Configure Axios with your base URL, headers, and other settings here
axios.defaults.baseURL = "https://api.example.com"; // Replace with your API URL
// You can set headers, interceptors, and other configurations as needed

const app = createApp(App);

// Make Axios available globally by adding it to the app's config
app.config.globalProperties.$axios = axios;

app
  .use(router)
  .use(store) // Register the VueX store
  .mount("#app");
