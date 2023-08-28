<template>
  <div>
    <main-content>
      <div class="pb-4 mb-8 border-b border-gray-200">
        <h1
          id="content"
          class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Alert
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
          Alerts are available for any length of text, as well as an optional
          dismiss button (and optional auto-dismissing).
        </p>
        <div class="ad-example">
          <div>
            <ad-alert show> Default Alert </ad-alert>
            <ad-alert show variant="success">Success Alert</ad-alert>
            <ad-alert
              v-model="showDismissibleAlert"
              variant="error"
              dismissible
            >
              Dismissable Alert!
            </ad-alert>
            <button @click="showDismissibleAlert = true">
              Show Dismissable Alert ({{
                showDismissibleAlert ? "visible" : "hidden"
              }})
            </button>
          </div>
        </div>
        <div class="">
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
        <br />
        <h2>Visible State</h2>
        <p>
          Use the show prop to control the visibility state of the alert. By
          default alerts are not shown. Set the prop show to explicitly display
          them. The show prop accepts boolean true or false to show and hide the
          alert respectively. It can also be set to a positive integer
          (representing seconds) to create a self dismissing alert. See the Auto
          Dismissing Alerts section below for details.
        </p>
        <h3><code>v-model</code> support</h3>
        <p>
          You can use the v-model directive to create two-way data bindings on
          the show prop as in v-model="showDismissibleAlert" above. Useful when
          you use dismissible because when user closes the alert, your variable
          will be updated. Do not use the show prop when using v-model.
        </p>
        <h2>Contextual variants</h2>
        <p>
          For proper styling of &#x3C;ad-alert&#x3E;, use one of the four
          required contextual variants by setting the variant prop to one of the
          following: info, success, warning or danger. The default is info.
        </p>
        <div class="ad-example">
          <div>
            <ad-alert variant="info" show>Info Alert</ad-alert>
            <ad-alert variant="success" show>Success Alert</ad-alert>
            <ad-alert variant="warning" show>Warning Alert</ad-alert>
            <ad-alert variant="error" show>Error Alert</ad-alert>
          </div>
        </div>
        <div class=" ">
          <pre v-pre class="hljs"><code class="html">
            &#x3C;ad-alert variant=&#x22;info&#x22; show&#x3E;Info Alert&#x3C;/ad-alert&#x3E;
            &#x3C;ad-alert variant=&#x22;success&#x22; show&#x3E;Success Alert&#x3C;/ad-alert&#x3E;
            &#x3C;ad-alert variant=&#x22;warning&#x22; show&#x3E;Warning Alert&#x3C;/ad-alert&#x3E;
            &#x3C;ad-alert variant=&#x22;error&#x22; show&#x3E;Error Alert&#x3C;/ad-alert&#x3E;
            </code></pre>
        </div>
        <h2>Additial content inside alerts</h2>
        <p>
          &#x3C;ad-alert&#x3E; can also contain additional HTML elements like
          headings and paragraphs, which will be styled with the appropriate
          color matching the variant.
        </p>
        <div class="ad-example">
          <div>
            <ad-alert variant="info" show>
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </ad-alert>
          </div>
        </div>
        <div class=" ">
          <pre v-pre class="hljs"><code class="html">
            &#x3C;ad-alert variant=&#x22;info&#x22; show&#x3E;
              &#x3C;h4 class=&#x22;alert-heading&#x22;&#x3E;Well done!&#x3C;/h4&#x3E;
              &#x3C;p&#x3E;
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              &#x3C;/p&#x3E;
              &#x3C;hr /&#x3E;
              &#x3C;p class=&#x22;mb-0&#x22;&#x3E;
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              &#x3C;/p&#x3E;
            &#x3C;/ad-alert&#x3E;
            </code></pre>
        </div>
        <h2>Dismissible Alerts</h2>
        <p>
          Using the dismissible prop it's possible to dismiss any
          &#x3C;ad-alert&#x3E; inline. This will add a close X button. Use the
          dismiss-label prop to change the hidden label text associated with the
          dismiss button.
        </p>
        <div class="ad-example">
          <div>
            <ad-alert show dismissible>
              Dismissible Alert! Click the close button over there
              <b>&rArr;</b>
            </ad-alert>
          </div>
        </div>
        <div class=" ">
          <pre v-pre class="hljs"><code class="html">
            &#x3C;ad-alert show dismissible&#x3E;
              Dismissible Alert! Click the close button over there
              &#x3C;b&#x3E;&#x26;rArr;&#x3C;/b&#x3E;
              &#x3C;/ad-alert&#x3E;
            </code></pre>
        </div>
        <h2>Auto dismissing alerts</h2>
        <p>
          Using the dismissible prop it's possible to dismiss any
          &#x3C;ad-alert&#x3E; inline. This will add a close X button. Use the
          dismiss-label prop to change the hidden label text associated with the
          dismiss button. To create a &#x3C;ad-alert&#x3E; that dismisses
          automatically after a period of time, set the show prop (or the
          v-model) to the number of seconds you would like the
          &#x3C;ad-alert&#x3E; to remain visible for. Only integer number of
          seconds are supported.
        </p>
        <div class="ad-example">
          <div>
            <ad-alert
              :show="dismissCountDown"
              dismissible
              variant="warning"
              @dismissed="dismissCountDown = 0"
              @dismiss-count-down="countDownChanged"
            >
              This alert will dismiss after {{ dismissCountDown }} seconds...
            </ad-alert>
            <br />
            <button variant="info" class="m-1" @click="showAutoDismissingAlert">
              Show alert with count-down timer
            </button>
          </div>
        </div>
        <div class=" ">
          <pre v-pre class="hljs"><code class="html">
        &lt;template&gt;
          &lt;ad-alert
            :show=&quot;dismissCountDown&quot;
            dismissible
            variant=&quot;warning&quot;
            @dismissed=&quot;dismissCountDown = 0&quot;
            @dismiss-count-down=&quot;countDownChanged&quot; &gt;
            This alert will dismiss after {{ dismissCountDown }} seconds...
          &lt;/ad-alert&gt;
        &lt;/template&gt;
        &lt;script&gt;
        export default {
          data() {
            return {
              dismissSecs: 5,
              dismissCountDown: 0,
            };
          },
          methods: {
            countDownChanged(dismissCountDown) {
              this.dismissCountDown = dismissCountDown;
            },
            showAlert() {
              this.dismissCountDown = this.dismissSecs;
            },
          },
        };
        &lt;/script&gt;
            </code></pre>
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
    </main-content>
  </div>
</template>
<script>
import AdAlert from "@/components/AdAlert.vue";
import MainContent from "@/components/MainContent.vue";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

export default {
  components: {
    MainContent,
    AdAlert,
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      showkah: false,
      htmlContent: `
        <p>Hello, <strong>world!</strong></p>
        <button onclick="alert('Halo dari JavaScript')">Klik saya</button>
      `,
      //   PropGandaVModel: true,
      tableHeads: ["Property", "Type", "Default", "Description"],
      tableBody: [
        {
          property: "dismissible",
          type: "Boolean",
          default: "false",
          description: "When set, enables the dismiss close button",
        },
        {
          property: "show",
          type: "Boolean",
          default: "false",
          description:
            "When set, shows the alert. Set to a number (seconds) to show and automatically dismiss the alert after the number of seconds has elapsed",
        },
        {
          property: "variant",
          type: "String",
          default: "info",
          description:
            "Applies one of the Bootstrap theme color variants to the component",
        },
      ],
    };
  },
  mounted() {
    hljs.highlightAll();
  },
  methods: {
    showAlert() {
      this.showDismissibleAlert = true;
      console.log("showAlert");
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAutoDismissingAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    toggleAlert() {
      this.showDismissibleAlert = !this.showDismissibleAlert;
    },
  },
};
</script>

<!-- <ad-alert show variant="error" dismissible>texst apalah itu </ad-alert>
    <ad-alert :show="showkah" variant="success">texst apalah itu </ad-alert>
    <ad-alert :show="showDismissibleAlert" variant="error" dismissible
      >texst apalah itu
    </ad-alert>
    <button v-on:click="showAlert">show alert</button>
    <button @click="showkah = true">show alert</button> -->
