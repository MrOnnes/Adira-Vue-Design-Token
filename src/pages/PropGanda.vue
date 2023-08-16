<template>
  <div>
    <div v-if="show || otherProp">
      <h1>Hidden konten</h1>
      <p>{{ otherProp }}</p>
    </div>
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
  },
  computed: {
    otherProp() {
      return this.value;
    },
  },
};
</script>
