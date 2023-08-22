<template>
  <main id="content-wrapper" class="flex-auto min-w-0 w-full">
    <div class="flex">
      <div class="flex-auto pt-6 px-8 max-w-4xl">
        <slot></slot>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "MainContent",
  data() {
    return {};
  },
};
</script>
