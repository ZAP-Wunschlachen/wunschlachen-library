<template>
  <AppointmentRegistrationInsertPhone
    @sign-in="handleSignIn"
    v-model:phoneNumber="phoneNumber"
    @validate:password="validatePhoneNumber"
    :phoneState="phoneState"
    :message="message"
    :sending="false"
    :disabled="false"
  >
    <template #logo>Logo goes here</template>
    <template #prependIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          :class="{
            'path-success': phoneState === 'success',
            'path-error': phoneState === 'error',
          }"
          stroke="#172774"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.487 19.413a3.68 3.68 0 0 1-4.613-.508l-.52-.507a1.246 1.246 0 0 1 0-1.742l2.204-2.18a1.234 1.234 0 0 1 1.73 0 1.246 1.246 0 0 0 1.74 0l3.46-3.459a1.22 1.22 0 0 0 0-1.741 1.234 1.234 0 0 1 0-1.73l2.191-2.191a1.245 1.245 0 0 1 1.742 0l.507.519a3.68 3.68 0 0 1 .508 4.613 33.372 33.372 0 0 1-8.95 8.926Z"
        />
      </svg>
    </template>
    <template #message
      ><p class="p-large max-w-[300px] text-center">
        Message for validation if right or wrong
      </p>
    </template>
  </AppointmentRegistrationInsertPhone>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const phoneNumber = ref("");
const phoneState = ref("");
const message = ref("");
const sending = ref(false);
const disabled = ref(false);

const validatePhoneNumber = (input) => {
  if (!input || input.length === 0) {
    phoneState.value = "error";
    message.value = "empty bruv";
    disabled.value = true;
  } else {
    phoneState.value = "success";
    message.value = "";
    disabled.value = false;
  }
  sending.value = true; // Change this to whatever logic determines the 'sending' state
};

const handleSignIn = (input) => {
  sending.value = true;
  disabled.value = true;
};

// Example watch effect to control sending and disabled based on phoneState and message
watch([phoneState, message], () => {
  if (phoneState.value === "success" && !message.value) {
    sending.value = false;
    disabled.value = false;
  } else {
    sending.value = true;
    disabled.value = true;
  }
});
</script>

<style scoped>
.path-success {
  stroke: var(--success-green-0);
}

.path-error {
  stroke: var(--error-red-0);
}
</style>
