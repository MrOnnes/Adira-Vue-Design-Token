<template>
  <div>
    <MainContent>
      <div class="pb-4 mb-8 border-b border-gray-200">
        <h1
          id="content"
          class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Breadcrumb
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
          <!-- &lt;ad-link&gt; is the building block for most components that offer
          link functionality. -->
        </p>
        <div class="ad-example">
          <div>
            <ad-breadcrumb :items="items"></ad-breadcrumb>
          </div>
        </div>
        <div class="">
          <pre v-pre class="hljs">
                <code class="html">
        &lt;template&gt;
            &lt;ad-breadcrumb :items=&quot;items&quot;&gt;&lt;/ad-breadcrumb&gt;
        &lt;/template&gt;

        &lt;script&gt;
        export default {
            data() {
            return {
                items: [
                {
                text: &quot;Admin&quot;,
                href: &quot;#&quot;,
                },
                {
                text: &quot;Manage&quot;,
                href: &quot;#&quot;,
                },
                {
                text: &quot;Library&quot;,
                active: true,
                },
                ]
            }
            }
        }
        &lt;/script&gt;
                </code>
            </pre>
        </div>
        <br />

        <h2>Breadcrumb items</h2>
        <p>
          Items are rendered using :items prop. It can be an array of objects to
          provide link and active state. Links can be href's for anchor tags.
          Breadcrumb works under the assumption that there is one active link in
          every set of ordered breadcrumbs, so the active state of the last
          element is automatically set to false.
        </p>
        <br />
        <!-- <div class="ad-example">
          <div>
            <ad-link href="#foo" disabled>Disabled Link</ad-link>
          </div>
        </div> -->
        <div class="">
          <pre v-pre class="hljs">
                <code class="java">
        const items = [
        {
            text: 'Home',
            href: 'https://google.com'
        },
        {
            text: 'Posts',
            href: 'https://posts.com'
        },
        {
            text: 'Another Story',
            active: true
        }
        ]
                </code>
            </pre>
        </div>
        <h2>Manually placed items</h2>
        <p>
          You may also manually place individual &lt;ad-breadcrumb-item&gt;
          child components in the default slot of the &lt;ad-breadcrumb&gt;
          component, as an alternative to using the items prop, for greater
          control over the content of each item:
        </p>
        <div class="ad-example">
          <div>
            <ad-breadcrumb>
              <ad-breadcrumb-item href="#">Home</ad-breadcrumb-item>
              <ad-breadcrumb-item href="#">Foo</ad-breadcrumb-item>
              <ad-breadcrumb-item href="#">Bar</ad-breadcrumb-item>
              <ad-breadcrumb-item active>Active</ad-breadcrumb-item>
            </ad-breadcrumb>
          </div>
        </div>
        <div class="">
          <pre v-pre class="hljs">
                <code class="html">
        &lt;template&gt;
            &lt;ad-breadcrumb&gt;
              &lt;ad-breadcrumb-item href=&quot;#&quot;&gt;Home&lt;/ad-breadcrumb-item&gt;
              &lt;ad-breadcrumb-item href=&quot;#&quot;&gt;Foo&lt;/ad-breadcrumb-item&gt;
              &lt;ad-breadcrumb-item href=&quot;#&quot;&gt;Bar&lt;/ad-breadcrumb-item&gt;
              &lt;ad-breadcrumb-item active&gt;Active&lt;/ad-breadcrumb-item&gt;
            &lt;/ad-breadcrumb&gt;
        &lt;/template&gt;
                </code>
            </pre>
          <br />
          <p>Remember to set the active prop on the last item.</p>
        </div>
        <br />

        <br />
        <h2>Properties</h2>
        <p>&lt;ad-breadcrumb&gt;</p>
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
              <tr v-for="row in tableBodyBreadcrumb" :key="row">
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
        <p>&lt;ad-breadcrumb-item&gt;</p>
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
      <ad-breadcrumb>breadcrumb</ad-breadcrumb>
      <br />
      <ad-breadcrumb :items="items"></ad-breadcrumb>
      <ad-breadcrumb-item>item</ad-breadcrumb-item>
    </MainContent>
  </div>
</template>
<script>
import MainContent from "@/components/MainContent.vue";
import AdBreadcrumb from "@/components/AdBreadcrumb.vue";
import AdBreadcrumbItem from "@/components/AdBreadcrumbItem.vue";
import hljs from "highlight.js";
export default {
  components: {
    MainContent,
    AdBreadcrumb,
    AdBreadcrumbItem,
  },
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
      tableHeads: ["Property", "Type", "Default", "Description"],
      tableBodyBreadcrumb: [
        {
          property: "active",
          type: "Boolean",
          default: "false",
          description:
            "When set to `true`, places the component in the active state with active styling",
        },
      ],
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
