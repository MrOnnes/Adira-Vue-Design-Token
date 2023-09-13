<template>
  <!-- <ad-link><slot></slot></ad-link> -->
  <component
    :is="active ? 'ad-link' : 'span'"
    :aria-current="active ? 'location' : ariaCurrent || null"
    :html="html"
    :text="text"
  >
    <slot></slot>
  </component>
</template>
<script>
import AdLink from "./AdLink.vue";
export default {
  name: "AdBreadcrumbLink",
  components: {
    AdLink,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    ariaCurrent: {
      type: String,
      default: "",
    },
    html: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
