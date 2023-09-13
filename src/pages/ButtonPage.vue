<template>
  <main-content>
    <div class="pb-4 mb-8 border-b border-gray-200">
      <h1
        id="content"
        class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Button
      </h1>
      <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum,
        orci eu convallis rutrum, nunc lacus porta neque, at efficitur sapien
        elit ac ligula. Ut ut purus vitae augue vehicula pellentesque. In tellus
        urna, rutrum vitae consequat nec, lobortis at elit.
      </p>
    </div>
    <div id="main-content">
      <h2>Overview</h2>
      <p>
        Alerts are available for any length of text, as well as an optional
        dismiss button (and optional auto-dismissing).
      </p>
      <div class="ad-example">
        <div style="display: flex">
          <ad-button>Button</ad-button>
          <ad-button variant="danger">Button</ad-button>
          <ad-button variant="success">Button</ad-button>
          <ad-button variant="primary">Button</ad-button>
        </div>
      </div>
      <div class="">
        <pre v-pre class="hljs">
        <code class="html">
    &#x3C;template&#x3E;
        &lt;ad-button&gt;Button&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;danger&quot;&gt;Button&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;success&quot;&gt;Button&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;primary&quot;&gt;Button&lt;/ad-button&gt;
    &#x3C;/template&#x3E;
        </code>
    </pre>
      </div>
      <br />

      <h2>Element type</h2>
      <p>
        The &lt;ad-button&gt; component generally renders a &lt;ad-button&gt;
        element. However, you can also render an &lt;a&gt; element by providing
        an href prop value.
      </p>
      <div class="ad-example">
        <div style="display: flex">
          <ad-button>i am a button</ad-button>
          <ad-button href="#">i am a link</ad-button>
        </div>
      </div>
      <div class="">
        <pre v-pre class="hljs">
        <code class="html">
    &lt;div&gt;
        &lt;ad-button&gt;i am a button&lt;/ad-button&gt;
        &lt;ad-button href=&quot;#&quot;&gt;i am a link&lt;/ad-button&gt;
    &lt;/div&gt;
        </code>
    </pre>
      </div>
      <br />

      <h2>Type</h2>
      <p>
        You can specify the button's type by setting the prop type to 'button',
        'submit' or 'reset'. The default type is 'button'.
        <br />
        Note the type prop has no effect when either href or to props are set.
      </p>

      <h2>Variant</h2>
      <p>primary, secondary, success, danger, warning, info, light and dark.</p>
      <div class="ad-example">
        <div style="display: flex">
          <ad-button variant="primary">Primary</ad-button>
          <ad-button variant="secondary">Secondary</ad-button>
          <ad-button variant="success">Success</ad-button>
          <ad-button variant="danger">Danger</ad-button>
          <ad-button variant="warning">Warning</ad-button>
          <ad-button variant="info">Info</ad-button>
          <ad-button variant="light">Light</ad-button>
          <ad-button variant="dark">Dark</ad-button>
          <ad-button variant="link">Link</ad-button>
        </div>
      </div>
      <div class="">
        <pre v-pre class="hljs">
        <code class="html">
    &lt;div&gt;
        &lt;ad-button variant=&quot;primary&quot;&gt;Primary&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;secondary&quot;&gt;Secondary&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;success&quot;&gt;Success&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;danger&quot;&gt;Danger&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;warning&quot;&gt;Warning&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;info&quot;&gt;Info&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;light&quot;&gt;Light&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;dark&quot;&gt;Dark&lt;/ad-button&gt;
        &lt;ad-button variant=&quot;link&quot;&gt;Link&lt;/ad-button&gt;
    &lt;/div&gt;
        </code>
    </pre>
      </div>
      <br />

      <h2>Block level Button</h2>
      <p>
        Create block level buttons — those that span the full width of a parent
        — by setting the block prop.
      </p>
      <div class="ad-example">
        <div style="display: flex">
          <ad-button block variant="primary">Block Level Button</ad-button>
        </div>
      </div>
      <div class="">
        <pre v-pre class="hljs">
        <code class="html">
    &lt;div&gt;
        &lt;ad-button block variant=&quot;primary&quot;&gt;Block Level Button&lt;/ad-button&gt;
    &lt;/div&gt;
        </code>
    </pre>
      </div>
      <br />

      <h2>Disabled state</h2>
      <p>
        Set the disabled prop to disable button default functionality. disabled
        also works with buttons rendered as &lt;a&gt; elements
      </p>
      <div class="ad-example">
        <div style="display: flex">
          <ad-button disabled variant="primary">disabled</ad-button>
          <ad-button disabled>disabled</ad-button>
        </div>
      </div>
      <div class="">
        <pre v-pre class="hljs">
        <code class="html">
    &lt;div&gt;
        &lt;ad-button disabled variant=&quot;primary&quot;&gt;disabled&lt;/ad-button&gt;
        &lt;ad-button disabled&gt;disabled&lt;/ad-button&gt;
    &lt;/div&gt;
        </code>
    </pre>
      </div>
      <br />
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
      <h2>Event</h2>
      <p>Lorem Ipsum</p>
      <br />
      <div>
        <table class="table-auto w-full text-sm border-collapse">
          <thead>
            <tr>
              <th
                v-for="tableHead in tableHeadsEvent"
                :key="tableHead"
                class="border-b p-4 pl-8 pt-0 pb-3 text-left"
              >
                <div>{{ tableHead }}</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableBodyEvent" :key="row">
              <!-- <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                <code>{{ row.property }}</code>
              </td> -->
              <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                {{ row.event }}
              </td>
              <td class="border-b border-slate-100 p-4 pl-8 text-slate-500">
                {{ row.arguments }}
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
    <br />
  </main-content>
</template>
<script>
import MainContent from "@/components/MainContent.vue";
import AdButton from "@/components/AdButton.vue";
import hljs from "highlight.js";
export default {
  components: {
    MainContent,
    AdButton,
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
          property: "block",
          type: "Boolean",
          default: "false",
          description:
            "Renders a 100% width button (expands to the width of its parent container)",
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
          property: "tag",
          type: "String",
          default: "button",
          description:
            "Specify the HTML tag to render instead of the default tag",
        },
        {
          property: "type",
          type: "String",
          default: "button",
          description:
            "The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'",
        },
        {
          property: "variant",
          type: "String",
          default: "secondary",
          description:
            "Applies one of the theme color variants to the component",
        },
      ],
      tableHeadsEvent: ["Event", "Arguments", "Description"],
      tableBodyEvent: [
        {
          event: "click.native",
          arguments: "Native click event object",
          description: "Emitted when non-disabled button clicked",
        },
      ],
    };
  },
  mounted() {
    hljs.highlightAll();
  },
};
</script>
