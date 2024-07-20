<template>
  <label
    class="flex items-center gap-3 text-sm sm:leading-[15.6px] lg:text-[14px] md:text-[14px] md:leading-[15.6px] lg:leading-[15.6px] tracking-[-0.13px]"
    :class="{
      'text-success-green-1': success,
      'text-error-red-0': error,
      'opacity-50 cursor-not-allowed text-soft-concrete-2': disabled,
    }"
  >
    <span class="checkbox-container">
      <input
        type="checkbox"
        :name="checkbox"
        :checked="modelValue"
        @change="updateValue"
        :class="[
          'appearance-none bg-white m-0 p-0 w-7 h-7 border-[1px]  bor rounded transform -translate-y-[0.075em] grid place-content-center',
          {
            'border-success-green-0 text-success-green-0 border-[2px] hover:border-success-green-0 hover:bg-success-green-minus-1':
              success,
            'border-error-red-0 hover:border-error-red-0  border-[2px]  hover:bg-error-red-minus-1':
              error,
            'border-soft-concrete-2 hover:border-dental-blue-minus-1   hover:bg-dental-light-blue-minus-2':
              !success && !error,
            'opacity-50 cursor-not-allowed': disabled,
          },
        ]"
        :disabled="disabled"
      />
    </span>
    <span style="font-weight: 300">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Checkbox",
  },
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

const emit = defineEmits(["update:modelValue", "input-error"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.checked);
  emit("input-error", { id: props.checkbox, isError: !event.target.checked });
};
</script>

<style>
.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="checkbox"]:checked {
  border-width: 2px;
}

input[type="checkbox"]::before {
  content: "";
  width: 16px;
  height: 16px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  background-color: currentColor;
  border-radius: 2px;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
  background-color: currentColor;
}

input[type="checkbox"]:checked {
  border-color: currentColor;
}

input[type="checkbox"]:disabled::before {
  border-color: currentColor;
}

input[type="checkbox"]:hover::before {
  border-color: currentColor;
}
</style>
