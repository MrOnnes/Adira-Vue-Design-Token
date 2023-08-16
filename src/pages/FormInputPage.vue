<template>
  <div>
    <main-content>
      <div class="pb-4 mb-8 border-b border-gray-200">
        <h1
          class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          id="content"
        >
          Form Input
        </h1>
        <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum,
          orci eu convallis rutrum, nunc lacus porta neque, at efficitur sapien
          elit ac ligula. Ut ut purus vitae augue vehicula pellentesque. In
          tellus urna, rutrum vitae consequat nec, lobortis at elit.
        </p>
      </div>
      <div id="main-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum,
          orci eu convallis rutrum, nunc lacus porta neque, at efficitur sapien
          elit ac ligula. Ut ut purus vitae augue vehicula pellentesque. In
          tellus urna, rutrum vitae consequat nec, lobortis at elit.
        </p>
        <h2 class="">Default form</h2>
        <p>
          This is an example of a form component including an email, password,
          checkbox, and submit button that you can use as a starting point for
          any form elemen
        </p>
        <br />

        <ad-form-input
          v-model="text"
          placeholder="Test ad-form-input"
        ></ad-form-input>
        <div>Value: {{ text }}</div>
        <br />
        <div>
          <pre>{{ $defaultForm }}</pre>
          <CodeBlock :code="exampleCode[0]"></CodeBlock>
        </div>
        <br />
        <h2>Input type</h2>
        <br />
        <div>
          <div>
            <div
              v-for="value in types"
              :key="value"
              class="flex flex-wrap my-1"
            >
              <div style="flex: 0 0 25%; max-width: 25%; align-self: center">
                <label
                  >Type <code>{{ value }}</code> :</label
                >
              </div>
              <div style="flex: 0 0 75%; max-width: 75%">
                <ad-form-input :type="value" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <CodeBlock :code="exampleCode[1]"></CodeBlock>
        <br />
        <h2>Range type input</h2>
        <br />
        <ad-form-input
          v-model="range"
          placeholder="Test ad-form-input range"
          type="range"
        ></ad-form-input>
        <div>Value: {{ range }}</div>
        <br />
        <CodeBlock :code="exampleCode[2]"></CodeBlock>
        <br />
        <h2>Contextual states</h2>
        <br />
        <div>
          <div
            v-for="validation in validations"
            :key="validation"
            class="flex flex-wrap my-1"
          >
            <div style="flex: 0 0 25%; max-width: 25%; align-self: center">
              <label>{{ validation.label }}</label>
            </div>
            <div style="flex: 0 0 75%; max-width: 75%" :key="validation">
              <ad-form-input
                :id="validation.id"
                :state="validation.state"
                :placeholder="validation.placeholder"
              />
            </div>
          </div>
        </div>
        <br />
        <CodeBlock :code="exampleCode[3]"></CodeBlock>
        <br />
        <ad-form-input
          id="input-live"
          v-model="name"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Enter your name"
          trim
        />
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
import MainContent from "@/components/MainContent.vue";
import AdFormInput from "@/components/AdFormInput.vue";
import CodeBlock from "../components/CodeBlock.vue";

export default {
  components: {
    MainContent,
    AdFormInput,
    CodeBlock,
  },
  defaultForm() {
    return {
      text: "text",
    };
  },
  data() {
    return {
      exampleCode: [
        `
<template>
  <div>
    <ad-form-input v-model="text" placeholder="Test ad-form-input"></ad-form-input>
    <div>Value: {{ text }}</div>
  </div>
</template>
<script>
    export default {
        data() {
        return {
         text: ''
        }
     }
    }
<//script>
        `,
        `
<template>
    <div>
        <div v-for="type in types" :key="type" class="flex flex-wrap">
            <div>
                <label>Type <code>{{ type }}</code> :
                </label>
            </div>
            <div>
                <ad-form-input :type="type" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                types: [
                    "text",
                    "number",
                    "email",
                    "password",
                    "search",
                    "url",
                    "tel",
                    "date",
                    "time",
                    "range",
                    "color",
                 ],
            }
        }
    }
<//script>
        `,

        `
<template>
    <div>
        <ad-form-input v-model="value" type="range" />
        <div>
            Value: {{ value }}
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                value: 2
            }
        }
    }
<//script>
        `,

        `
<template>
    <div v-for="validation in validations" :key="validation" class="flex flex-wrap my-1">
        <div>
            <label>
                {{ validation.label }}
            </label>
        </div>
        <div>
            <ad-form-input :id="validation.id"
            :state="validation.state"
            :placeholder="validation.placeholder" />
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                validations: [
                    {
                        label: "No State",
                        id: "input-none",
                        state: null,
                        placeholder: "No validation",
                    },
                    {
                        label: "Valid State",
                        id: "input-valid",
                        state: true,
                        placeholder: "Valid input (style coming soon)",
                    },
                    {
                        label: "Invalid State",
                        id: "input-invalid",
                        state: false,
                        placeholder: "Invalid input",
                    },
                ],
            }
        }
    }
<//script>
        `,
        // ... tambahkan lebih banyak potongan kode sesuai kebutuhan
      ],

      types: [
        "text",
        "number",
        "email",
        "password",
        "search",
        "url",
        "tel",
        "date",
        "time",
        "range",
        "color",
      ],
      validations: [
        {
          label: "No State",
          id: "input-none",
          state: null,
          placeholder: "No validation",
        },
        {
          label: "Valid State",
          id: "input-valid",
          state: true,
          placeholder: "Valid input (style coming soon)",
        },
        {
          label: "Invalid State",
          id: "input-invalid",
          state: false,
          placeholder: "Invalid input",
        },
      ],
      tableHeads: ["Property", "Type", "Default", "Description"],
      tableBody: [
        {
          property: "disabled",
          type: "Boolean",
          default: "false",
          description:
            "When set to `true`, disables the component's functionality and places it in a disabled state",
        },
        {
          property: "id",
          type: "String",
          default: "",
          description:
            "Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed",
        },
        {
          property: "placeholder",
          type: "String",
          default: "",
          description:
            "Sets the `placeholder` attribute value on the form control",
        },
        {
          property: "required",
          type: "Boolean",
          default: "false",
          description: "Adds the `required` attribute to the form control",
        },
        {
          property: "type",
          type: "String",
          default: "text",
          description:
            "The type of input to render. See the docs for supported types",
        },
      ],
    };
  },
};
</script>
