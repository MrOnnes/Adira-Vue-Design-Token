<template>
  <div>
    <ul class="breadcrumb">
      <slot></slot>
      <ad-breadcrumb-item
        v-for="(item, index) in items"
        :key="index"
        :active="item.active || false"
      >
        {{ item.text }}
      </ad-breadcrumb-item>
    </ul>
  </div>
</template>
<script>
import AdBreadcrumbItem from "./AdBreadcrumbItem.vue";
export default {
  name: "AdBreadcrumb",
  components: {
    AdBreadcrumbItem,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
    },
  },
};
</script>
<style>
.breadcrumb {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}
</style>
