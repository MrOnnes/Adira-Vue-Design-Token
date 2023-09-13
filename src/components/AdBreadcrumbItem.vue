<template>
  <li :class="['breadcrumb-item', { active: active }]">
    <ad-breadcrumb-link :active="active">
      <slot></slot>
    </ad-breadcrumb-link>
  </li>
</template>
<script>
import AdBreadcrumbLink from "./AdBreadcrumbLink.vue";
export default {
  name: "AdBreadcrumbItem",
  components: {
    AdBreadcrumbLink,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
</style>
