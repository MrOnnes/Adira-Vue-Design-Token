import AdAlertVue from "./components/AdAlert.vue";
import VueButton from "./components/vue-button.vue";
import AdFormInputVue from "./components/AdFormInput.vue";

const adiraDesignSystem = {
  install(Vue) {
    Vue.component("AdAlert", AdAlertVue);
    Vue.component("VueButton", VueButton);
    Vue.component("AdFormInput", AdFormInputVue);
  },
};

export default adiraDesignSystem;
