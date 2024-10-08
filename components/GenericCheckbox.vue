<template>
  <label :class="labelClasses">
    <span class="checkbox-container">
      <input
        type="checkbox"
        :name="checkbox"
        :checked="modelValue"
        @change="updateValue"
        :class="inputClasses"
        :disabled="disabled"
      />
    </span>

    <slot name="label"> </slot>
  </label>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checkbox: {
    type: String,
    default: "checkbox",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
// console.log('===============',props.modelValue);

const emit = defineEmits(["update:modelValue", "input-error","set-checkbox"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.checked);
  emit("set-checkbox",event.target.checked);
  // alert();
  emit("input-error", { id: props.checkbox, isError: !event.target.checked });
};

const labelClasses = computed(() => ({
  label: true,
  "label-success": props.success,
  "label-error": props.error,
  "label-disabled": props.disabled,
}));

const inputClasses = computed(() => ({
  "input-checkbox": true,
  "input-success": props.success,
  "input-error": props.error,
  "input-disabled": props.disabled,
}));
</script>

<style scoped>
.label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  line-height: 15.6px;
  letter-spacing: -0.13px;
}
.label-success {
  color: var(--success-green-1);
}
.label-error {
  color: var(--error-red-0);
}
.label-disabled {
  color: var(--soft-concrete-2);
  opacity: 0.5;
  cursor: not-allowed;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-checkbox {
  appearance: none;
  background-color: white;
  margin: 0;
  padding: 0;
  width: 28px;
  height: 28px;
  border: 1px solid;
  border-radius: 4px;
  display: grid;
  place-content: center;
  transform: translateY(-0.075em);
}

.input-checkbox::before {
  content: "";
  width: 16px;
  height: 16px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  background-color: currentColor;
  border-radius: 2px;
}

.input-checkbox:checked::before {
  transform: scale(1);
  background-color: currentColor;
}

.input-checkbox:checked {
  border-width: 2px;
  border-color: currentColor;
}

.input-checkbox:disabled::before {
  border-color: currentColor;
}

.input-checkbox:hover::before {
  border-color: currentColor;
}

.input-success {
  border-color: var(--success-green-0);
  color: var(--success-green-0);
}
.input-success:hover {
  border-color: var(--success-green-0);
  background-color: var(--success-green-minus-1);
}

.input-error {
  border-color: var(--error-red-0);
  color: var(--error-red-0);
}
.input-error:hover {
  border-color: var(--error-red-0);
  background-color: var(--error-red-minus-1);
}

.input-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.label-text {
  font-weight: 300;
}
</style>
