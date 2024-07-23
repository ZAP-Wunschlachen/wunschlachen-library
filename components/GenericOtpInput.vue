<template>
  <form @submit.prevent="handleSubmit" id="otp-form">
    <div class="otp-container">
      <input
        v-for="(digit, index) in digits"
        :key="index"
        type="text"
        class="otp-input"
        v-model="digits[index]"
        @keydown="handleKeyDown"
        @input="handleInput(index)"
        @focus="handleFocus"
        @paste="handlePaste"
        maxlength="1"
      />
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";

const digits = ref(["", "", "", ""]);
const inputs = ref([]);

const handleKeyDown = (e) => {
  if (
    !/^[0-9]{1}$/.test(e.key) &&
    e.key !== "Backspace" &&
    e.key !== "Delete" &&
    e.key !== "Tab" &&
    !e.metaKey
  ) {
    e.preventDefault();
  }

  if (e.key === "Delete" || e.key === "Backspace") {
    const index = inputs.value.indexOf(e.target);
    if (index > 0) {
      digits.value[index - 1] = "";
      inputs.value[index - 1].focus();
    }
  }
};

const handleInput = (index) => (e) => {
  const { target } = e;
  if (target.value) {
    if (index < inputs.value.length - 1) {
      inputs.value[index + 1].focus();
    } else {
      document.querySelector("button[type=submit]").focus();
    }
  }
};

const handleFocus = (e) => {
  e.target.select();
};

const handlePaste = (e) => {
  e.preventDefault();
  const text = e.clipboardData.getData("text");
  if (!new RegExp(`^[0-9]{${digits.value.length}}$`).test(text)) {
    return;
  }
  const pastedDigits = text.split("");
  pastedDigits.forEach((digit, index) => {
    digits.value[index] = digit;
  });
  document.querySelector("button[type=submit]").focus();
};

const handleSubmit = () => {
  alert(`Submitted code: ${digits.value.join("")}`);
};

onMounted(() => {
  inputs.value = Array.from(document.querySelectorAll("input[type=text]"));
});
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
  border: 1px solid; /* Equivalent to border-[1px] in Tailwind */
  border-radius: 0.375rem; /* Equivalent to rounded in Tailwind */
  padding: 0.5rem; /* Equivalent to p-2 in Tailwind */
  outline: none;
}

.otp-input:focus {
  background-color: white;
  border-width: 2px; /* Equivalent to focus:border-[2px] in Tailwind */
  border-color: var(
    --dental-light-blue-1
  ); /* Equivalent to focus:border-[var(--dental-light-blue-1)] in Tailwind */
}
</style>
