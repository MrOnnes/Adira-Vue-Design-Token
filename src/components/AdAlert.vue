<template>
  <div
    v-if="localShow || showDismissibleAlert"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
    class="alert"
    :variant="variant"
    :class="`alert-${variant}`"
  >
    <button
      v-if="dismissible"
      type="button"
      aria-label="Close"
      class="close"
      @click="dismiss"
    >
      ×
    </button>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "AdAlert",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    dismissLabel: {
      type: String,
      default: "close",
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    fade: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "info",
    },
  },
  data() {
    return {
      countDown: 0,
      localShow: this.parseShow(this.show),
    };
  },
  computed: {
    showDismissibleAlert() {
      return this.$attrs.value;
    },
  },
  watch: {
    show(newValue) {
      this.countDown = this.parseCountDown(newValue);
      this.localShow = this.parseShow(newValue);
    },
    countDown(newValue) {
      this.clearCountDownInterval();
      const show = this.show;
      // Check if `show` is a numeric value
      if (!isNaN(show) && typeof show !== "boolean") {
        this.$emit("dismiss-count-down", newValue);
        if (show !== newValue) {
          this.$emit("update:modelValue", newValue);
        }
        if (newValue > 0) {
          this.localShow = true;
          this.$_countDownTimeout = setTimeout(() => {
            this.countDown--;
          }, 1000);
        } else {
          this.$nextTick(() => {
            this.localShow = false;
          });
        }
      }
    },
    localShow(newValue) {
      const show = this.show;
      // Only emit dismissed events for dismissible or auto-dismissing alerts
      if (
        !newValue &&
        (this.dismissible || (!isNaN(show) && typeof show !== "boolean"))
      ) {
        this.$emit("dismissed");
        console.log("dismissed");
      }
      // Only emit booleans if we weren't passed a number via v-model
      if (!isNaN(show) && typeof show !== "boolean" && show !== newValue) {
        this.$emit("update:modelValue", newValue);
        console.log("update:modelValue " + newValue);
      }
    },
  },
  created() {
    this.$_filterTimer = null;

    const show = this.show;
    this.countDown = this.parseCountDown(show);
    this.localShow = this.parseShow(show);
  },
  beforeDestroy() {
    this.clearCountDownInterval();
  },
  methods: {
    dismiss() {
      this.clearCountDownInterval();
      this.countDown = 0;
      this.localShow = false;
      this.$emit("input", false);
      console.log("dismiss alert");
    },
    clearCountDownInterval() {
      clearTimeout(this.$_countDownTimeout);
      this.$_countDownTimeout = null;
    },

    // // --- Helper methods ---
    parseCountDown(show) {
      if (show === "" || typeof show === "boolean") {
        return 0;
      }
      if (!isNaN(show)) {
        show = parseInt(show);
      } else {
        show = 0;
      }
      return show > 0 ? show : 0;
    },

    parseShow(show) {
      if (show === "" || show === true) {
        return true;
      }
      if (this.toInteger(show, 0) < 1) {
        // Boolean will always return false for the above comparison
        return false;
      }
      return !!show;
    },

    toInteger(value, defaultValue) {
      const parsed = parseInt(value);
      return isNaN(parsed) ? defaultValue : parsed;
    },
  },
};
</script>
<style>
.fade {
  transition: opacity 0.15s linear;
}
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.alert-warning {
  color: #344054;
  background-color: #fffaeb;
  border-color: #fedf89;
}
.alert-success {
  color: #344054;
  background-color: #d1fadf;
  border-color: #32d583;
}
.alert-info {
  color: #344054;
  background-color: #d1e9ff;
  border-color: #53b1fd;
}
.alert-error {
  color: #344054;
  background-color: #fee4e2;
  border-color: #f97066;
}
.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  color: inherit;
}
button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
</style>
