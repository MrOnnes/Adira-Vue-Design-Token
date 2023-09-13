import AdAlertVue from "./components/AdAlert.vue";
import AdBreadcrumbVue from "./components/AdBreadcrumb.vue";
import AdBreadcrumbItemVue from "./components/AdBreadcrumbItem.vue";
import AdButtonVue from "./components/AdButton.vue";
import AdLinkVue from "./components/AdLink.vue";
import AdFormInputVue from "./components/AdFormInput.vue";
import "./style.css";
// import "https://cdn.jsdelivr.net/gh/MrOnnes/adira-design-token@0.2.3/tokens/src/styles.css";

const adiraDesignSystem = {
  install(Vue) {
    Vue.component("AdAlert", AdAlertVue);
    Vue.component("AdBreadcrumb", AdBreadcrumbVue);
    Vue.component("AdBreadcrumbItem", AdBreadcrumbItemVue);
    Vue.component("AdButton", AdButtonVue);
    Vue.component("AdFormInput", AdFormInputVue);
    Vue.component("AdLink", AdLinkVue);
  },
};

export default adiraDesignSystem;
