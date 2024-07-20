<template>
  <form @submit.prevent="handleSubmit" id="otp-form">
    <div class="flex items-center justify-center gap-3">
      <input
        v-for="(digit, index) in digits"
        :key="index"
        type="text"
        class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 border-[1px] rounded p-[8px] outline-none focus:bg-white focus:border-[2px] focus:border-[var(--dental-light-blue-1)]"
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
/* Add any additional scoped styles here */
</style>
