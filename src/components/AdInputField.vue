<template>
  <form action="">
    <label :for="fieldId">{{ label }}</label>
    <input
      :type="type"
      :id="fieldId"
      :placeholder="placeholder"
      v-model="inputValue"
    />
    <small v-if="helperText" class="helper-text">{{ helperText }}</small>
  </form>
</template>
<script>
export default {
  name: "AdFormField",
  props: {
    label: {
      type: String,
      // required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    helperText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    fieldId() {
      return this.id || "input-" + this._uid;
    },
  },
};
</script>
<style scoped>
.helper-text {
  color: var(--color-text-gray, #667085);
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
}
</style>
