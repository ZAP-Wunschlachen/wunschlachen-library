<template>
  <div class="mb-6">
    <label
      v-if="label"
      :for="id"
      :class="{
        'text-[var(--success-green-1)]': success,
        'text-[var(--error-red-0)]': error,
        'text-[var(--warm-light-3)]': warning,
        'text-[var(--soft-concrete-1)]': isDisabled,
      }"
      class="block mb-2 text-sm font-medium"
    >
      {{ label }}
    </label>
    <div class="relative flex items-center">
      <div
        v-if="prependIcon"
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <MaterialIcon :name="prependIcon" size="1.5" :color="getColor()" />
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
          'border border-1 rounded-lg text-sm block w-full p-2.5',
          prependIcon ? 'pl-10' : '',
          appendIcon ? 'pr-10' : '',
          {
            'cursor-not-allowed text-[var(--soft-concrete-1)] placeholder-[var(--soft-concrete-1)]':
              isDisabled,

            'border-[var(--soft-concrete-1)] focus:border-2 focus:border-[var(--dental-light-blue-1)] placeholder-[var(--dental-blue--4)] text-[var(--dental-blue-0)]':
              !warning && !success && !error && !isDisabled,
            'border-[var(--warning-0)] border-2 text-[var(--warm-light-3)] bg-yellow-50 placeholder-yellow-700 focus:ring-yellow-500 focus:border-[var(--warning-0)] dark:border-yellow-500 dark:placeholder-yellow-500 dark:text-yellow-400':
              warning,
            'border-[var(--success-green-0)] border-2 text-[var(--success-green-1)] bg-green-50 placeholder-[var(--success-green-1)] focus:ring-green-500 focus:border-[var(--success-green-0)] dark:border-green-500 dark:placeholder-green-500 dark:text-green-400':
              success,
            'border-[var(--error-red-0)] border-2 bg-red-50 placeholder-[var(--error-red-0)] focus:ring-[var(--error-red-0)] focus:border-[var(--error-red-0)] dark:border-red-500 dark:placeholder-red-500 dark:text-red-500':
              error,
          },
        ]"
        :disabled="isDisabled"
      />
      <div
        v-if="appendIcon"
        class="absolute inset-y-0 end-0 flex items-center pe-3"
      >
        <MaterialIcon :name="appendIcon" size="1.5" :color="getColor()" />
      </div>
    </div>
    <p
      v-if="error"
      :class="{
        'text-[var(--error-red-0)]': error,
        'text-[var(--warm-light-3)]': warning,
        'text-[var(--soft-concrete-1)]': isDisabled,
      }"
      class="mt-2 text-sm"
    >
      {{ placeholder }} cannot be empty.
    </p>
    <p
      v-else-if="message"
      :class="{
        'text-[var(--success-green-1)]': success,
        'text-[var(--error-red-0)]': error,
        'text-[var(--warm-light-3)]': warning,
        'text-[var(--soft-concrete-1)]': isDisabled,
      }"
      class="mt-2 text-sm"
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
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from "vue";

const emit = defineEmits(["update:modelValue", "input-error"]);

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
  prependIcon: {
    type: String,
    default: "",
  },
  appendIcon: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const inputValue = ref(props.modelValue);
const isTouched = ref(false);

const updateValue = (event) => {
  inputValue.value = event.target.value;
  emit("update:modelValue", inputValue.value);
  emit("input-error", { id: props.id, isError: !inputValue.value.trim() });
};

const checkEmpty = () => {
  isTouched.value = true;
  emit("input-error", { id: props.id, isError: !inputValue.value.trim() });
};

const getColor = () => {
  if (props.error) return "var(--error-red-0)";
  if (props.warning) return "var(--warm-light-3)";
  if (props.success) return "var(--success-green-1)";
  if (props.isDisabled) return "var(--soft-concrete-1)";
  return "currentColor";
};
</script>

<style scoped>
.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

input:focus {
  outline: none;
}
</style>
