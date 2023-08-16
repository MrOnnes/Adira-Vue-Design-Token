<template>
  <div>
    <pre><code class="language-javascript">{{ code }}</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    code: String, // Properti yang menerima kode yang akan ditampilkan
  },
};
</script>

<style>
/* Gaya tambahan jika diperlukan */
</style>
