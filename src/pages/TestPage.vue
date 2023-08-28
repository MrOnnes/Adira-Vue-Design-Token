<template>
  <div>
    Test Page
    <br />
    <!-- <ad-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </ad-alert>
    <button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </button> -->
    <br />
    <!-- <ad-alert show>Default Alert</ad-alert> -->
    <!-- <ad-alert show variant="success">Success Alert</ad-alert> -->
    <ad-alert v-model="showDismissibleAlert" variant="error" dismissible>
      Dismissable Alert!
    </ad-alert>
    <br />
    <button @click="showDismissibleAlert = true">
      Show Dismissable Alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
