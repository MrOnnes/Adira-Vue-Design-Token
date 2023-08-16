import Vue from "vue";
import App from "./App.vue";
import "./style.css";
import "prismjs/themes/prism.css";
import VueRouter from "vue-router";
import Prism from "prismjs";

Vue.use(VueRouter);
Prism.highlightAll();

// Komponen halaman yang akan digunakan untuk routing
import Home from "./pages/HomePage.vue";
import About from "./pages/AboutPage.vue";
import FormInputPage from "./pages/FormInputPage.vue";
import AlertPageVue from "./pages/AlertPage.vue";
// import Menu1_1 from "./components/Menu1_1.vue";
// import Menu1_2 from "./components/Menu1_2.vue";
// import Menu2_1 from "./components/Menu2_1.vue";
// import Menu2_2 from "./components/Menu2_2.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/form-input", component: FormInputPage },
  { path: "/alert", component: AlertPageVue },

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
