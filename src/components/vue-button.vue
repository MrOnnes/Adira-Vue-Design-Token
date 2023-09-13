<template>
  <button class="Button" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "VueButton",
  props: {
    onClick: {
      type: Function,
    },
  },
};
</script>

<style>
.button-style {
  background: red;
  color: white;
  border: 0;
}
</style>
