<template>
  <a
    :href="href"
    :aria-disabled="disabled ? 'true' : null"
    :tabindex="disabled ? '-1' : tabindex"
    :target="target"
    :class="{ disabled: disabled }"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "AdLink",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: "",
    },
    append: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    event: {
      type: String,
      default: "",
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactActiveClass: {
      type: String,
      default: "",
    },
    exactPath: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: "#",
    },
    noPrefetch: {
      type: Boolean,
      default: false,
    },
    prefetch: {
      type: Boolean,
      default: false,
    },
    rel: {
      type: String,
      default: "",
    },
    replace: {
      type: Boolean,
      default: false,
    },
    routerComponentName: {
      type: String,
      default: "",
    },
    routerTag: {
      type: String,
      default: "",
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    target: {
      type: String,
      default: "_self",
    },
    to: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedHref() {
      return this.href;
    },
  },
  methods: {
    onClick(event) {
      const eventIsEvent = event instanceof Event;

      if (eventIsEvent && this.disabled) {
        event.stopImmediatePropagation();
      }

      if (eventIsEvent && this.computedHref === "#") {
        event.stopPropagation();
      }
    },
  },
};
</script>
<style>
a.disabled {
  pointer-events: none;
}
</style>
<!-- <style scoped></style> -->
