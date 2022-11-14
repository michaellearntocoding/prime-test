import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import News from './components/News.vue'
import VueRecaptcha from "vue3-recaptcha-v2";
import './assets/main.css'
import VueSlickCarousel from 'vue-slick-carousel'

const routes = [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/",
      name: "Login",
      component: Login,
    },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

// createApp(App).mount('#app')
createApp(App).use(router).use(VueSlickCarousel).use(VueRecaptcha, {
  siteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  alterDomain: false, // default: false
}).mount('#app')