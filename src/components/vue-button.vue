<template>
  <button class="button-style"><slot></slot></button>
</template>

<script>
export default {
  name: "VueButton",
};
</script>

<style>
.button-style {
  background: red;
  color: white;
  border: 0;
}
</style>
