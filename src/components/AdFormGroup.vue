<template>
  <div :class="validate">
    <label v-if="label" :id="id" :for="labelFor" class="d-block">{{
      label
    }}</label>
    <div>
      <slot :class="validate"></slot>
      <div
        v-if="invalidFeedback"
        :id="invalidFeebackId"
        class="invalid-feedback"
      >
        {{ invalidFeedback }}
      </div>
      <div v-if="validFeedback" :id="validFeebackId" class="valid-feedback">
        {{ validFeedback }}
      </div>
      <small
        v-if="helperText"
        :id="helperTextId"
        class="form-text text-muted"
        >{{ helperText }}</small
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "AdFormGroup",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    helperText: {
      type: String,
    },
    id: {
      type: String,
    },
    invalidFeedback: {
      type: String,
    },
    label: {
      type: String,
    },
    labelFor: {
      type: String,
    },
    state: {
      type: Boolean,
      default: null,
    },
    validFeedback: {
      type: String,
    },
    validated: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    validate() {
      if (this.state) {
        return "is-valid";
      } else {
        if (this.invalidFeedback) {
          return "is-invalid";
        } else {
          return "";
        }
      }
    },
    invalidFeebackId() {
      return this.id + "__AV_feedback_invalid";
    },
    validFeebackId() {
      return this.id + "__AV_feedback_valid";
    },
    helperTextId() {
      return this.id + "__AV_helper_text";
    },
  },
};
</script>
<style>
.d-block {
  display: block !important;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.text-muted {
  color: #6c757d !important;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #28a745;
}

.is-valid {
}
.is-invalid {
}

.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip,
.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip {
  display: block;
}

.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip,
.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip {
  display: block;
}
</style>
