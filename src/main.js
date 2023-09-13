import Vue from "vue";
import App from "./App.vue";
// import "./style.css";
import VueRouter from "vue-router";
import Prism from "prismjs";
import vuePlugin from "@highlightjs/vue-plugin";
import AdiraDesignSystem from ".";
// import "https://cdn.jsdelivr.net/gh/MrOnnes/adira-design-token@latest/tokens/src/styles.min.css";

Vue.use(vuePlugin);
Vue.use(AdiraDesignSystem);
Vue.use(VueRouter);
Prism.highlightAll();

// Komponen halaman yang akan digunakan untuk routing
import Home from "./pages/HomePage.vue";
import About from "./pages/AboutPage.vue";
import FormInputPage from "./pages/FormInputPage.vue";
import AlertPageVue from "./pages/AlertPage.vue";
import TestPageVue from "./pages/TestPage.vue";
import BreadCrumbPageVue from "./pages/BreadcrumbPage.vue";
import ButtonPageVue from "./pages/ButtonPage.vue";
import LinkPageVue from "./pages/LinkPage.vue";
// import Menu1_1 from "./components/Menu1_1.vue";
// import Menu1_2 from "./components/Menu1_2.vue";
// import Menu2_1 from "./components/Menu2_1.vue";
// import Menu2_2 from "./components/Menu2_2.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/form-input", component: FormInputPage },
  { path: "/alert", component: AlertPageVue },
  { path: "/breadcrumb", component: BreadCrumbPageVue },
  { path: "/button", component: ButtonPageVue },
  { path: "/link", component: LinkPageVue },
  { path: "/test-page", component: TestPageVue },

  // { path: "/menu1.1", component: Menu1_1 },
  // { path: "/menu1.2", component: Menu1_2 },
  // { path: "/menu2.1", component: Menu2_1 },
  // { path: "/menu2.2", component: Menu2_2 },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
