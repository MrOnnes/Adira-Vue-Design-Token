<template>
  <div>
    <ad-alert show>this is not dismissable</ad-alert>
    <ad-alert variant="warning" v-model="showDismissibleAlert" dismissable=""
      >this is dismissable alert</ad-alert
    >
    <button @click="showDismissibleAlert = true">
      show dismissable alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </button>
    <ad-alert variant="success" show>
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </ad-alert>
  </div>
</template>
<script>
import AdAlert from "@/components/AdAlert.vue";
// import CustomAlert from "./CustomAlert.vue";
// import PropGanda from "./PropGanda.vue";

export default {
  components: {
    AdAlert,
    // CustomAlert,
    // PropGanda,
  },
  data() {
    return {
      showDismissibleAlert: true,
      showkah: false,
      //   PropGandaVModel: true,
    };
  },
  methods: {
    showAlert() {
      this.showDismissibleAlert = true;
      console.log("showAlert");
    },
    toggleAlert() {
      this.showDismissibleAlert = !this.showDismissibleAlert;
    },
  },
};
</script>

<!-- <ad-alert show variant="error" dismissable>texst apalah itu </ad-alert>
    <ad-alert :show="showkah" variant="success">texst apalah itu </ad-alert>
    <ad-alert :show="showDismissibleAlert" variant="error" dismissable
      >texst apalah itu
    </ad-alert>
    <button v-on:click="showAlert">show alert</button>
    <button @click="showkah = true">show alert</button> -->
