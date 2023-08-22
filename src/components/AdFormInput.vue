<template>
  <input
    class="form-control"
    :class="validate"
    :type="type"
    :placeholder="placeholder"
    :id="fieldId"
    :value="value"
    @input="updateValue"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: "AdFormInput",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    form: {
      type: String,
    },
    type: {
      type: String,
      default: "Text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    value: {
      type: String,
    },
    onError: {
      type: Boolean,
      default: false,
    },
    state: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    // validate() {
    //   // if (this.state) {
    //   //   return "is-valid";
    //   // } else {
    //   //   return "is-invalid";
    //   // }
    //   if (this.onError && !this.state) {
    //     // Tambahkan kondisi untuk menerapkan class hanya saat onError true dan state false
    //     return "is-invalid";
    //   } else if (this.state) {
    //     return "is-valid";
    //   } else {
    //     return "";
    //   }
    // },
    validate() {
      if (this.state === true) {
        return "is-valid";
      } else if (this.state === false) {
        return "is-invalid";
      } else {
        return "";
      }
    },
    fieldId() {
      return this.id || "input-" + this._uid;
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
      console.log(event.target.value);
    },
  },
};
</script>
<style>
.form-control {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px px);
  padding: 0.63rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #344054;
  background-color: #fcfcfd;
  background-clip: padding-box;
  border: 1px solid #98a2b3;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control:disabled {
  background-color: #f2f4f7;
}
.form-control:focus {
  box-shadow: 0px 0px 4px 0px rgba(255, 221, 0, 0.4),
    0px 1px 3px 0px rgba(16, 24, 40, 0.1);
  color: #495057;
  background-color: #fff;
  border-color: #fd0;
  outline: 0;
}
.error-field {
  border: 1px solid #f97066;
  color: #f97066;
}
.error-field:focus {
  box-shadow: 0px 0px 4px 0px #f97066, 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
}
input.is-invalid {
  border: 1px solid #f97066;
  color: #f97066;
}
.is-invalid:focus {
  box-shadow: 0px 0px 4px 0px #f97066, 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
}
</style>
