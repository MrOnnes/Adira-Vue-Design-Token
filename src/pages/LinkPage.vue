<template>
  <div>
    <MainContent>
      <div class="pb-4 mb-8 border-b border-gray-200">
        <h1
          id="content"
          class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Link
        </h1>
        <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum,
          orci eu convallis rutrum, nunc lacus porta neque, at efficitur sapien
          elit ac ligula. Ut ut purus vitae augue vehicula pellentesque. In
          tellus urna, rutrum vitae consequat nec, lobortis at elit.
        </p>
      </div>
      <div id="main-content">
        <h2>Overview</h2>
        <p>
          &lt;ad-link&gt; is the building block for most components that offer
          link functionality.
        </p>
        <div class="ad-example">
          <div>
            <ad-link href="#foo">Link</ad-link>
          </div>
        </div>
        <div class="">
          <pre v-pre class="hljs">
                <code class="html">
    &lt;ad-link href=&quot;#foo&quot;&gt;Link&lt;/ad-link&gt;
                </code>
            </pre>
        </div>
        <br />

        <h2>Link disabled state</h2>
        <p>Disable link functionality by setting the disabled prop to true.</p>
        <div class="ad-example">
          <div>
            <ad-link href="#foo" disabled>Disabled Link</ad-link>
          </div>
        </div>
        <div class="">
          <pre v-pre class="hljs">
                <code class="html">
    &lt;div&gt;
        &lt;ad-link href=&quot;#foo&quot; disabled&gt;Disabled Link&lt;/ad-link&gt;
    &lt;/div&gt;
                </code>
            </pre>
        </div>
        <br />
        <p>
          Disabling a link will set the Bootstrap v4 .disabled class on the link
          as well as handles stopping event propagation, preventing the default
          action from occurring, and removing the link from the document tab
          sequence (tabindex="-1").
          <br />
          <br />
          Note: Bootstrap v4 CSS currently does not style disabled links
          differently than non-disabled links. You can use the following custom
          CSS to style disabled links (by preventing hover style changes):
        </p>
        <br />
        <div class="">
          <pre v-pre class="hljs">
                <code class="css">
    a.disabled {
        pointer-events: none;
    }
                </code>
            </pre>
        </div>
        <br />
        <h2>Properties</h2>
        <p>Lorem Ipsum</p>
        <br />
        <div>
          <table class="table-auto w-full text-sm border-collapse">
            <thead>
              <tr>
                <th
                  v-for="tableHead in tableHeads"
                  :key="tableHead"
                  class="border-b p-4 pl-8 pt-0 pb-3 text-left"
                >
                  <div>{{ tableHead }}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in tableBody" :key="row">
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  <code>{{ row.property }}</code>
                </td>
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  {{ row.type }}
                </td>
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  {{ row.default }}
                </td>
                <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                  {{ row.description }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
      <ad-link href="#foo" tabindex="4" disabled> Ad Link </ad-link>

      <ad-link disabled> Ad Link disabled</ad-link>
      <a href="#" class="disabled"> test link</a>
    </MainContent>
  </div>
</template>
<script>
import MainContent from "@/components/MainContent.vue";
import AdLink from "@/components/AdLink.vue";
import hljs from "highlight.js";
export default {
  components: {
    MainContent,
    AdLink,
  },
  data() {
    return {
      tableHeads: ["Property", "Type", "Default", "Description"],
      tableBody: [
        {
          property: "active",
          type: "Boolean",
          default: "false",
          description:
            "When set to `true`, places the component in the active state with active styling",
        },
        {
          property: "disabled",
          type: "Boolean",
          default: "false",
          description:
            "When set to `true`, disables the component's functionality and places it in a disabled state",
        },
        {
          property: "href",
          type: "String",
          default: "",
          description:
            "Denotes the target URL of the link for standard a links",
        },
        {
          property: "target",
          type: "String",
          default: "_self",
          description: "Sets the 'target' attribute on the rendered link",
        },
      ],
    };
  },
  mounted() {
    hljs.highlightAll();
  },
};
</script>
