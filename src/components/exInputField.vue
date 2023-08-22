<template>
  <!-- <input type="text" name="" id="" :value="value" @input="updateValue" />
   -->
  <div>
    <form @submit.prevent="onSubmit" class="add-form">
      <label for="email">
        <h2>Email</h2>
      </label>
      <input
        class="exInputField"
        type="email"
        placeholder="Enter your email"
        v-model="email"
        required
      />
      <p>{{ email }}</p>
      <input type="submit" value="Submit" class="btn-btn-block" />
    </form>
  </div>
</template>
<script>
export default {
  name: "exInputField",
  //   props: {
  //     // Tambahkan properti v-model
  //     // modelValue: {
  //     //   type: String,
  //     //   default: "",
  //     // },
  //     inputValue
  //   },
  //   props: ["value"],
  data() {
    return {
      email: "",
    };
  },
  methods: {
    onSubmit(event) {
      console.log(event);
    },
  },
  // props: {
  //   value: {
  //     type: String,
  //   },
  //   // email:{
  //   //   type: String
  //   // }
  // },
  // methods: {
  //   updateValue(event) {
  //     this.$emit("input", event.target.value);
  //   },
  // },
  //   computed: {
  //     inputValue: {
  //       get() {
  //         return this.modelValue;
  //       },
  //       set(value) {
  //         this.$emit("update:modelValue", value);
  //       },
  //     },
  //   },
};
</script>
<style>
.exInputField:required:invalid {
  background-color: brown;
}
.exInputField:required {
  background-color: aqua;
}
</style>
