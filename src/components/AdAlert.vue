<template>
  <div
    v-if="show || otherProp"
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
      @click="closeAlert"
    >
      ×
    </button>
    <slot />
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
    value: {
      type: Boolean, // Tambahkan properti value
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
  computed: {
    otherProp() {
      return this.value;
    },
  },
  methods: {
    closeAlert() {
      this.$emit("input", false);
      console.log("closeAlert");
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
