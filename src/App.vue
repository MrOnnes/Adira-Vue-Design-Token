<template>
  <div id="app">
    <!-- <AdFormInput
      placeholder="email@adira.co.id"
      v-model="text"
      :class="{ 'error-field': isError }"
      :disabled="disabled == 1"
    /> -->
    <!-- <AdFormGroup>
      <ad-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></ad-form-input>
    </AdFormGroup> -->
    <!-- <ad-form-group
      id="fieldset-1"
      helper-text="Let us know your name."
      label="Enter your name"
      label-for="input-1"
      valid-feedback="Thank you!"
      :invalid-feedback="invalidFeedback"
      :state="state"
    >
      <ad-form-input id="input-1" v-model="name" :state="state"></ad-form-input>
    </ad-form-group> -->
    <ad-form-group
      id="fieldset-1"
      helper-text="Let us know your name."
      label="Enter your name"
      label-for="input-1"
      valid-feedback="Thank you!"
      :invalid-feedback="invalidFeedback"
      :state="state"
    >
      <ad-form-input id="input-1" v-model="name" :state="state"></ad-form-input>
    </ad-form-group>
    <p>value {{ text }}</p>
    <ExInputField />
    <pre>{{ $data }}</pre>

    <button @click="disabled = (disabled + 1) % 2">Switch</button>

    <button @click="setError">Error</button>
  </div>
</template>

<script>
import AdFormInput from "./components/AdFormInput.vue";
import AdFormGroup from "./components/AdFormGroup.vue";
// import ExInputField from "./components/exInputField.vue";

export default {
  name: "App",
  components: {
    AdFormInput,
    AdFormGroup,
    // ExInputField,
  },
  data() {
    return {
      text: "",
      disabled: 0,
      isError: false,
      name: "",
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
    };
  },
  computed: {
    state() {
      return this.name.length >= 4;
    },
    invalidFeedback() {
      if (this.name.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "Please enter something.";
    },
  },
  methods: {
    // onSubmit(event) {
    //   console.log(event);
    // },
    setError() {
      this.isError = !this.isError;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  width: auto;
}
</style>
