<template>
  <div>
    <label
      v-if="label"
      :for="id"
      :class="[
        'label',
        success ? 'label-success' : '',
        error ? 'label-error' : '',
        warning ? 'label-warning' : '',
        isDisabled ? 'label-disabled' : '',
      ]"
    >
      {{ label }}
    </label>
    <div class="input-container">
      <div v-if="hasPrependIcon" class="input-icon left">
        <slot name="prependIcon"></slot>
      </div>
      <input
        :type="type"
        :id="id"
        :aria-label="ariaLabel"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        @blur="checkEmpty"
        :class="[
          'input',
          isDisabled ? 'input-disabled' : '',
          warning ? 'input-warning' : '',
          success ? 'input-success' : '',
          error ? 'input-error' : '',
        ]"
        :disabled="isDisabled"
        :style="inputStyle"
      />
      <div v-if="hasAppendIcon" class="input-icon right">
        <slot name="appendIcon"></slot>
      </div>
    </div>
    <div class="message-container">
      <div v-if="error" class="error-message">
        <div class="icon-container">
          <slot name="errorIcon"></slot>
        </div>
        <p
          :class="[
            'message-text',
            error ? 'text-error' : '',
            warning ? 'text-warning' : '',
            isDisabled ? 'text-disabled' : '',
          ]"
        >
          {{ placeholder }} kann nicht leer sein.
        </p>
      </div>

      <p
        v-else-if="message"
        :class="[
          'message',
          success ? 'text-success' : '',
          error ? 'text-error' : '',
          warning ? 'text-warning' : '',
          isDisabled ? 'text-disabled' : '',
        ]"
      >
        <span class="font-medium">{{
          success
            ? "Well done!"
            : error
            ? "Oh, snap!"
            : warning
            ? "Attention!"
            : ""
        }}</span>
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed, useSlots } from "vue";

const emit = defineEmits(["update:modelValue", "input-error"]);
const slots = useSlots();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  ariaLabel: {
    type: String,
    default: "input",
  },
  placeholder: {
    type: String,
    default: "",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  warning: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const inputValue = ref(props.modelValue);

const hasPrependIcon = computed(() => !!slots.prependIcon);
const hasAppendIcon = computed(() => !!slots.appendIcon);

const inputStyle = computed(() => {
  let style = "";
  if (hasPrependIcon.value) style += "padding-left: 2.5rem; ";
  if (hasAppendIcon.value) style += "padding-right: 2.5rem; ";
  return style;
});

const updateValue = (event) => {
  inputValue.value = event.target.value;
  emit("update:modelValue", inputValue.value);
  emit("input-error", { id: props.id, isError: !inputValue.value.trim() });
};

const checkEmpty = () => {
  emit("input-error", { id: props.id, isError: !inputValue.value.trim() });
};
</script>

<style scoped>
.label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.label-success {
  color: var(--success-green-1);
}

.label-error {
  color: var(--error-red-0);
}

.label-warning {
  color: var(--warm-light-3);
}

.label-disabled {
  color: var(--soft-concrete-1);
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon.left {
  position: absolute;
  left: 0.5rem;
}

.input-icon.right {
  position: absolute;
  right: 0.5rem;
}

.input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 0 0 1px var(--dental-blue--4);
  color: var(--dental-blue--4);
}

.input:focus {
  box-shadow: 0 0 0 2px var(--dental-light-blue-1);
  color: var(--dental-blue-0);
  outline: none;
}

.input-disabled {
  cursor: not-allowed;
  color: var(--soft-concrete-1);
  placeholder: var(--soft-concrete-1);
}

.input-warning {
  box-shadow: 0 0 0 2px var(--warning-0);
  color: var(--warm-light-3);
  background-color: #fffae5; /* Equivalent to bg-yellow-50 */
  placeholder: #b98900; /* Equivalent to placeholder-yellow-700 */
}

.input-success {
  box-shadow: 0 0 0 2px var(--success-green-1);
  color: var(--success-green-1);
  background-color: #e6ffed; /* Equivalent to bg-green-50 */
  placeholder: var(--success-green-1);
}

.input-success:focus {
  box-shadow: 0 0 0 2px var(--success-green-1);
  color: var(--success-green-1);
  background-color: #e6ffed; /* Equivalent to bg-green-50 */
}

.input-error {
  box-shadow: 0 0 0 2px var(--error-red-0);
  background-color: #ffe5e5; /* Equivalent to bg-red-50 */
  placeholder: var(--error-red-0);
}

.input-error:focus {
  box-shadow: 0 0 0 2px var(--error-red-0);
  background-color: #ffe5e5; /* Equivalent to bg-red-50 */
  placeholder: var(--error-red-0);
}

.message-container {
  display: flex;
  align-items: center;
  height: 1.5rem;
}

.error-message {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.icon-container svg {
  width: 1rem;
  height: 1rem;
}

.icon-container svg path {
  stroke: var(--error-red-0);
}

.message-text {
  font-size: 0.8125rem;
  font-weight: 400;
}

.text-error {
  color: var(--error-red-0);
}

.text-warning {
  color: var(--warm-light-3);
}

.text-disabled {
  color: var(--soft-concrete-1);
}

.message {
  font-size: 0.875rem;
}

.font-medium {
  font-weight: 500;
}

.text-success {
  color: var(--success-green-1);
}
</style>
