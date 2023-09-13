import AdAlertVue from "./components/AdAlert.vue";
import AdBreadcrumbVue from "./components/AdBreadcrumb.vue";
import AdBreadcrumbItemVue from "./components/AdBreadcrumbItem.vue";
import AdButtonVue from "./components/AdButton.vue";
import AdLinkVue from "./components/AdLink.vue";
// import VueButton from "./components/vue-button.vue";
import AdFormInputVue from "./components/AdFormInput.vue";

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
