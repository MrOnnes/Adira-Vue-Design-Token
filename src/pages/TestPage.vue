<template>
  <div>
    Test Page
    <br />
    <ad-button @click.native="handleButtonClick">button test</ad-button>
    <ad-button href="#">link</ad-button>
  </div>
</template>
<script>
import AdButton from "@/components/AdButton.vue";
export default {
  components: {
    AdButton,
  },
  data() {
    return {};
  },
  methods: {
    handleButtonClick() {
      console.log("Button clicked!");
    },
  },
};
</script>
