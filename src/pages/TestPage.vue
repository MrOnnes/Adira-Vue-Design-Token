<template>
  <div>
    Test Page
    <pre v-pre class="hljs">
        <code class="html">
    &#x3C;template&#x3E;
      &#x3C;ad-alert show&#x3E;Default Alert&#x3C;/ad-alert&#x3E;
      &#x3C;ad-alert show variant=&#x22;success&#x22;&#x3E;Success Alert&#x3C;/ad-alert&#x3E;
      &#x3C;ad-alert v-model=&#x22;showDismissibleAlert&#x22; variant=&#x22;error&#x22; dismissible&#x3E;
        Dismissable Alert!
      &#x3C;/ad-alert&#x3E;
      &#x3C;button @click=&#x22;showDismissibleAlert = true&#x22;&#x3E;

        Show Dismissable Alert (&#123;&#123; showDismissibleAlert ? 'visible' : 'hidden' &#125;&#125;)

      
      &#x3C;/button&#x3E;
    &#x3C;/template&#x3E;
        </code>
    </pre>
  </div>
</template>
<script>
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
// import "highlight.js/styles/agate.css";
export default {
  mounted() {
    hljs.highlightAll();
  },
};
</script>
