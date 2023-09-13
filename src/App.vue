<template>
  <div id="app">
    <header class="sticky-header z-40 border-y">
      <main-nav />
    </header>
    <div class="w-full px-4 mx-auto max-w-8xl">
      <div class="flex">
        <side-bar />
        <router-view></router-view>
        <!-- <main-content> -->
        <!-- <router-link to="/">Home</router-link> -->
        <!-- <router-view></router-view> -->
        <!-- <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
            <h1
              class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              id="content"
            >
              Lorem Ipsum
            </h1>
            <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum, orci eu convallis rutrum, nunc lacus porta neque, at
              efficitur sapien elit ac ligula. Ut ut purus vitae augue vehicula
              pellentesque. In tellus urna, rutrum vitae consequat nec, lobortis
              at elit.
            </p>
          </div>
          <div id="main-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dictum, orci eu convallis rutrum, nunc lacus porta neque, at
              efficitur sapien elit ac ligula. Ut ut purus vitae augue vehicula
              pellentesque. In tellus urna, rutrum vitae consequat nec, lobortis
              at elit.
            </p>
            <h2 class="">Form Input</h2>
            <ad-form-input
              v-model="text"
              placeholder="Test ad-form-input"
            ></ad-form-input>
            <div>Value: {{ text }}</div>
            <br />
            <ad-form-input
              :id="type - text"
              type="text"
              placeholder="text"
            ></ad-form-input>
            <ad-form-input
              :id="type - number"
              type="number"
              placeholder="number"
            ></ad-form-input>
            <ad-form-input
              :id="type - email"
              type="email"
              placeholder="email"
            ></ad-form-input>
            <ad-form-input
              :id="type - password"
              type="password"
              placeholder="password"
            ></ad-form-input>
            <ad-form-input
              :id="type - search"
              type="search"
              placeholder="search"
            ></ad-form-input>
            <ad-form-input
              :id="type - url"
              type="url"
              placeholder="url"
            ></ad-form-input>
            <ad-form-input
              :id="type - tel"
              type="tel"
              placeholder="tel"
            ></ad-form-input>
            <ad-form-input
              :id="type - date"
              type="date"
              placeholder="date"
            ></ad-form-input>
            <ad-form-input
              :id="type - time"
              type="time"
              placeholder="time"
            ></ad-form-input>
            <ad-form-input
              :id="type - range"
              type="range"
              placeholder="range"
            ></ad-form-input>
            <ad-form-input
              :id="type - color"
              type="color"
              placeholder="color"
            ></ad-form-input>
            <br />
            <ad-form-input
              v-model="range"
              placeholder="Test ad-form-input range"
              type="range"
            ></ad-form-input>
            <div>Value: {{ range }}</div>
            <br />

            <ad-form-input
              id="input-none"
              :state="null"
              placeholder="No validation"
            ></ad-form-input>
            <ad-form-input
              id="input-valid"
              :state="true"
              placeholder="Valid input (style coming soon)"
            ></ad-form-input>
            <ad-form-input
              id="input-invalid"
              :state="false"
              placeholder="Invalid input"
            ></ad-form-input>
            <br />
            <ad-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
            />
            <br /> -->
        <!-- TODO BUAT BAGIAN LIST -->
        <!-- <pre>{{ $data }}</pre>

            <button @click="disabled = (disabled + 1) % 2">Switch</button>

            <button @click="setError">Error</button>
          </div> -->
        <!-- </main-content> -->
      </div>
    </div>

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
  </div>
</template>

<script>
// import AdFormInput from "./components/AdFormInput.vue";
import MainNav from "./components/MainNav.vue";
import SideBar from "./components/SideBar.vue";
// import MainContent from "./components/MainContent.vue";
// import AdFormGroup from "./components/AdFormGroup.vue";
// import ExInputField from "./components/exInputField.vue";

export default {
  name: "App",
  components: {
    // AdFormInput,
    MainNav,
    SideBar,
    // MainContent,
    // AdFormGroup,
    // ExInputField,
  },
  data() {
    return {
      text: "",
      range: "27",
      sizes: ["Small", "Medium", "Large", "Extra Large"],
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
    nameState() {
      if (this.name.length > 3) {
        return true;
      } else if (this.name.length > 0) {
        return false;
      }
      return null;
    },
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
/* @import url("https://cdn.jsdelivr.net/gh/MrOnnes/adira-design-token@latest/tokens/src/styles.css"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  width: auto;
}

#main-content > h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 1rem;
  margin-top: 2rem !important;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: white;
}
.ad-example {
  padding: 1.5rem;

  border-width: 0.2rem;
  border: solid 2 #fafafa;
  /* border: solid #f8f9fa; */

  margin: 1rem 0 0 0;
}
/* .alert-heading {
} */
.ad-code {
  position: relative;
}
hr {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem !important;
}

#main-content > p {
  max-width: 80%;
}
</style>
