<template>
  <div
    v-if="show || otherProp"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
    class="alert"
    :class="`alert-${variant}`"
    :variant="variant"
  >
    <slot></slot>
    <p>{{ otherProp }}</p>
    <button
      v-if="dismissable"
      @click="closeAlert"
      type="button"
      aria-label="Close"
      class="close"
    >
      x
    </button>
  </div>
</template>

<script>
export default {
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
    dismissable: {
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
/* Tambahkan gaya yang sesuai dengan kebutuhan Anda */
</style>
