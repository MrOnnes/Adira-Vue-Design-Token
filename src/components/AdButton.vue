<template>
  <ad-link
    v-if="href"
    :href="href"
    class="btn"
    :class="computedClass"
    :disabled="disabled"
  >
    <slot></slot>
  </ad-link>
  <button
    v-else
    v-onclick="clickHandler"
    :type="type"
    class="btn"
    :class="computedClass"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script>
import AdLink from "./AdLink.vue";

const computeClass = (props) => [
  `btn-${props.variant || "secondary"}`,
  {
    [`btn-${props.size}`]: props.size,
    "btn-block": props.block,
    "rounded-pill": props.pill,
    "rounded-0": props.squared && !props.pill,
    disabled: props.disabled,
    active: props.pressed,
  },
];

export default {
  name: "AdButton",
  components: {
    AdLink,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
    },
    append: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    clickHandler: {
      type: Function,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactActiveClass: {
      type: String,
    },
    exactPath: {
      type: Boolean,
      default: false,
    },
    exactPathActiveClass: {
      type: String,
    },
    href: {
      type: String,
    },
    noPrefetch: {
      type: Boolean,
      default: false,
    },
    prefetch: {
      type: Boolean,
      default: null,
    },
    pressed: {
      type: Boolean,
      default: null,
    },
    rel: {
      type: String,
      default: null,
    },
    replace: {
      type: Boolean,
      default: false,
    },
    routerComponentName: {
      type: String,
    },
    size: {
      type: String,
    },
    squared: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: "button",
    },
    target: {
      type: String,
      default: "_self",
    },
    to: {
      type: String,
    },
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "secondary",
    },
  },
  computed: {
    computedClass() {
      return computeClass({
        variant: this.variant, // Ganti dengan nilai yang sesuai
        // size: 'large', // Ganti dengan nilai yang sesuai
        block: this.block, // Ganti dengan nilai yang sesuai
        // pill: false, // Ganti dengan nilai yang sesuai
        // squared: true, // Ganti dengan nilai yang sesuai
        disabled: this.disabled, // Ganti dengan nilai yang sesuai
        pressed: this.pressed, //
      });
    },
  },
  methods: {
    handleButtonClick() {
      if (this.clickHandler && typeof this.clickHandler === "function") {
        this.clickHandler();
        console.log("button clicked");
      }
    },
  },
};
</script>
<!-- <style>
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--figma-size-button-padding-top-bottom)
    var(--figma-size-button-padding-right-left);
  gap: var(--figma-size-button-gap);
  border-radius: var(--figma-size-button-radius);
  border: none;

  font-family: var(--figma-font-button1-font-family);
  font-style: normal;
  font-weight: var(--figma-font-button1-font-weight);
  font-size: var(--figma-size-font-button-1);
  line-height: var(--figma-size-line-height-button1);
}
</style> -->
<!-- <style>
.bd-example {
  display: flex;
  width: inherit;
  flex-wrap: wrap;
}

button:not(:disabled) {
  cursor: pointer;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--figma-size-button-padding-top-bottom)
    var(--figma-size-button-padding-right-left);
  gap: var(--figma-size-button-gap);
  /* height: 40px; */
  border-radius: var(--figma-size-button-radius);
  border: none;

  font-family: var(--figma-font-button1-font-family);
  font-style: normal;
  font-weight: var(--figma-font-button1-font-weight);
  font-size: var(--figma-size-font-button-1);
  line-height: var(--figma-size-line-height-button1);
}

.btn[disabled] {
  pointer-events: none;
  background: var(--figma-color-background-disable);
  color: var(--figma-color-text-disable);
  border-color: var(--figma-color-text-disable);
}
a.btn {
  text-decoration: none;
  display: inline-block;
  /* height: 22px; */
}

a.disabled {
  pointer-events: none;
  background: var(--figma-color-background-disable);
  color: var(--figma-color-text-disable);
  border-color: var(--figma-color-text-disable);
}

.btn-primary {
  background: var(--figma-color-background-button-primary-active);
  color: var(--figma-color-text-button-primary);
}

.btn-secondary {
  background: var(--figma-color-background-button-secondary-active);
  color: var(--figma-color-text-button-secondary);
  border: 1px solid var(--figma-color-border-button-link);
}

.btn-success {
  background: var(--figma-color-background-button-success-active);
  color: var(--figma-color-text-button-primary);
}

.btn-danger {
  background: var(--figma-color-background-button-error-active);
  color: var(--figma-color-text-white);
}

.btn-warning {
  background: var(--figma-color-background-button-warning-active);
  color: var(--figma-color-text-button-primary);
}

.btn-info {
  background: var(--figma-color-background-button-info-active);
  color: var(--figma-color-text-white);
}

.btn-light {
  background: var(--figma-color-background-button-light-active);
  color: var(--figma-color-text-button-primary);
}

.btn-dark {
  background: var(--figma-color-background-button-dark-active);
  color: var(--figma-color-text-white);
}

.btn-link {
  background: none;
  color: var(--figma-color-text-button-secondary);
  border: none;
  border-radius: var(--figma-size-button-radius);
}

/* HOVER */

.btn-primary:hover {
  background: var(--figma-color-background-button-primary-hover);
}

.btn-secondary:hover {
  background: var(--figma-color-background-button-secondary-hover);
  border: 1px solid var(--figma-color-border-button-link);
}

.btn-success:hover {
  background: var(--figma-color-background-button-success-hover);
}

.btn-danger:hover {
  background: var(--figma-color-background-button-error-hover);
}

.btn-warning:hover {
  background: var(--figma-color-background-button-warning-hover);
}

.btn-info:hover {
  background: var(--figma-color-background-button-info-hover);
}

.btn-light:hover {
  background: var(--figma-color-background-button-light-hover);
}

.btn-dark:hover {
  background: var(--figma-color-background-button-dark-hover);
}

.btn-link:hover {
  background: var(--figma-color-background-button-secondary-hover);

  border: none;
  border-radius: var(--figma-size-button-radius);
}

/* SIZE */
.btn-lg {
  padding: 1.5rem 2rem;
  font-size: var(--figma-size-font-subtitle-1);
  border-radius: var(--figma-size-button-radius);
}
.btn-sm {
  padding: 4px 12px;
  font-size: var(--figma-size-font-caption);
  border-radius: var(--figma-size-radius-medium);
}

/* Block */
.btn-block {
  display: block;
  width: 100%;
}
</style> -->
