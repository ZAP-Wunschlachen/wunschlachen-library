<template>
  <div>
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
      <div v-if="prependIcon" class="input-icon left-2">
        <span v-html="prependIcon"></span>
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
          'shadow-[0_0_0_1px_var(--dental-blue--4)] text-[var(--dental-blue--4)] active:shadow-[0_0_0_1px_var(--soft-concrete-1)] focus:text-[var(--dental-blue-0)] rounded-lg sm:text-[16px] md:text-[18px] lg:text-[20px] block w-full p-[8px] focus:shadow-[0_0_0_2px_var(--dental-light-blue-1)]',
          {
            'cursor-not-allowed text-[var(--soft-concrete-1)] placeholder-[var(--soft-concrete-1)]':
              isDisabled,

            'placeholder-[var(--dental-blue--4)] font-light text-[var(--dental-blue-0)]':
              !warning && !success && !error && !isDisabled,
            'shadow-[0_0_0_2px_var(--warning-0)] text-[var(--warm-light-3)] bg-yellow-50 placeholder-yellow-700 focus:shadow-[0_0_0_2px_var(--warning-0)]':
              warning,
            'shadow-[0_0_0_2px_var(--success-green-0)] text-[var(--success-green-1)] bg-green-50 placeholder-[var(--success-green-1)] focus:shadow-[0_0_0_2px_var(--success-green-0)]':
              success,
            'shadow-[0_0_0_2px_var(--error-red-0)] bg-red-50 placeholder-[var(--error-red-0)] focus:shadow-[0_0_0_2px_var(--error-red-0)]':
              error,
          },
        ]"
        :disabled="isDisabled"
        :style="prependIcon ? 'padding-left: 2.5rem;' : ''"
      />
      <div v-if="appendIcon" class="input-icon right-2">
        <span v-html="appendIcon"></span>
      </div>
    </div>
    <div class="flex items-center h-[24px]">
      <div v-if="error" class="flex flex-row items-center gap-[8px]">
        <div
          v-if="errorIconUrl"
          v-html="errorIconUrl"
          class="icon-container"
        ></div>
        <p
          :class="{
            'text-[var(--error-red-0)]': error,
            'text-[var(--warm-light-3)]': warning,
            'text-[var(--soft-concrete-1)]': isDisabled,
          }"
          class="text-[13px] font-normal"
        >
          {{ placeholder }} kann nicht leer sein.
        </p>
      </div>

      <p
        v-else-if="message"
        :class="{
          'text-[var(--success-green-1)]': success,
          'text-[var(--error-red-0)]': error,
          'text-[var(--warm-light-3)]': warning,
          'text-[var(--soft-concrete-1)]': isDisabled,
        }"
        class="text-sm"
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
import { defineProps, defineEmits, ref, computed } from "vue";
import { useIcons } from "@/composables/useIcons";
const { getDirectusIcon } = useIcons();

const emit = defineEmits(["update:modelValue", "input-error"]);

const { data: errorIconUrl } = await useAsyncData("errorIconUrl", async () => {
  return await getDirectusIcon("exclamation_circle");
});

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
  prependIcon: {
    type: String,
    default: "",
  },
  appendIcon: {
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

<style>
.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

input:focus {
  outline: none;
}

.icon-container svg {
  width: 16px;
  height: 16px;
}

.icon-container svg path {
  stroke: var(--error-red-0);
}
</style>
