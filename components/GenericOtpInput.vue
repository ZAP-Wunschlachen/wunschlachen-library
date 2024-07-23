<template>
  <form @submit.prevent="handleSubmit" id="otp-form">
    <div class="otp-container">
      <input
        v-for="(digit, index) in digits"
        :key="index"
        type="text"
        class="otp-input"
        :class="{
          'input-error': isError,
          'input-success': isSuccess,
          'input-disabled': isDisabled,
        }"
        v-model="digits[index]"
        @keydown="handleKeyDown"
        @input="handleInput(index)"
        @focus="handleFocus"
        @paste="handlePaste"
        maxlength="1"
        :disabled="isDisabled"
      />
    </div>
  </form>
</template>

#### Script ```typescript
<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits } from "vue";

interface Props {
  modelValue: string;
  isError?: boolean;
  isSuccess?: boolean;
  isDisabled?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);
const digits = ref(["", "", "", ""]);
const inputs = ref<HTMLInputElement[]>([]);

onMounted(() => {
  inputs.value = Array.from(document.querySelectorAll("input[type=text]"));
});

// Watch for changes in digits and emit the updated value to the parent component
watch(
  digits,
  (newDigits) => {
    const joinedDigits = newDigits.join("");
    emit("update:modelValue", joinedDigits);
  },
  { deep: true } // Ensure the watcher is deep to track changes within the array
);

// Watch for changes in the modelValue prop and update the digits array accordingly
watch(
  () => props.modelValue,
  (newValue) => {
    const newDigits = newValue.split("");
    for (let i = 0; i < digits.value.length; i++) {
      digits.value[i] = newDigits[i] || "";
    }
  }
);

const handleKeyDown = (e: KeyboardEvent) => {
  const index = inputs.value.indexOf(e.target as HTMLInputElement);

  if (
    !/^[0-9]{1}$/.test(e.key) &&
    !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(
      e.key
    ) &&
    !e.metaKey
  ) {
    e.preventDefault();
  }

  if (e.key === "ArrowRight" && index < inputs.value.length - 1) {
    inputs.value[index + 1].focus();
  }

  if (e.key === "ArrowLeft" && index > 0) {
    inputs.value[index - 1].focus();
  }

  if (["Delete", "Backspace"].includes(e.key)) {
    if (digits.value[index]) {
      digits.value[index] = "";
    } else if (index > 0) {
      digits.value[index - 1] = "";
      inputs.value[index - 1].focus();
    }
  }

  if (/^[0-9]{1}$/.test(e.key) && index < inputs.value.length - 1) {
    inputs.value[index + 1].focus();
  }
};

const handleInput = (index: number) => (e: Event) => {
  const { target } = e as { target: HTMLInputElement };
  if (target.value && /^[0-9]{1}$/.test(target.value)) {
    digits.value[index] = target.value;
    if (index < inputs.value.length - 1) {
      inputs.value[index + 1].focus();
    } else {
      document.querySelector("button[type=submit]")?.focus();
    }
  } else {
    target.value = digits.value[index];
  }
};

const handleFocus = (e: FocusEvent) => {
  (e.target as HTMLInputElement).select();
};

const handlePaste = (e: ClipboardEvent) => {
  e.preventDefault();
  const text = e.clipboardData?.getData("text") || "";
  if (!new RegExp(`^[0-9]{${digits.value.length}}$`).test(text)) {
    return;
  }
  const pastedDigits = text.split("");
  pastedDigits.forEach((digit, index) => {
    digits.value[index] = digit;
  });
  inputs.value[pastedDigits.length - 1].focus();
};

const handleSubmit = () => {
  alert(`Submitted code: ${digits.value.join("")}`);
};
</script>
<style scoped>
.otp-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem; /* Equivalent to gap-3 in Tailwind */
}

.otp-input {
  width: 3.5rem; /* Equivalent to w-14 in Tailwind */
  height: 3.5rem; /* Equivalent to h-14 in Tailwind */
  text-align: center;
  font-size: 1.5rem; /* Equivalent to text-2xl in Tailwind */
  font-weight: 800; /* Equivalent to font-extrabold in Tailwind */
  color: #0f172a; /* Equivalent to text-slate-900 in Tailwind */
  border: 1px solid var(--soft-concrete-1); /* Equivalent to border-[1px] in Tailwind */
  border-radius: 0.375rem; /* Equivalent to rounded in Tailwind */
  padding: 0.5rem; /* Equivalent to p-2 in Tailwind */
  outline: none;
}

.otp-input:focus {
  background-color: white;
  border-width: 3px; /* Equivalent to focus:border-[2px] in Tailwind */
  border-color: var(
    --dental-light-blue-1
  ); /* Equivalent to focus:border-[var(--dental-light-blue-1)] in Tailwind */
}

.input-error {
  border-color: var(--error-red-0);
  color: var(--error-red-0);
}

.input-error:focus {
  border-color: var(--error-red-0);
  color: var(--error-red-0);
}

.input-success {
  border-color: var(--success-green-1);
  color: var(--success-green-1);
}

.input-success:focus {
  border-color: var(--success-green-1);
  color: var(--success-green-1);
}

.input-disabled {
  background-color: var(--soft-concrete-1);
  border-color: var(--soft-concrete-1);
  color: var(--soft-concrete-1);
}

.input-disabled:focus {
  background-color: var(--soft-concrete-1);
  border-color: var(--soft-concrete-1);
  color: var(--soft-concrete-1);
}
</style>
