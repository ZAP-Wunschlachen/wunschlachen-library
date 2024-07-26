<template>
  <AppointmentRegistrationInsertPhone
    @sign-in="handleSignIn"
    v-model:phoneNumber="phoneNumber"
    @validate:password="validatePhoneNumber"
    :phoneState="phoneState"
    :message="message"
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
          stroke="#172774"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.487 19.413a3.68 3.68 0 0 1-4.613-.508l-.52-.507a1.246 1.246 0 0 1 0-1.742l2.204-2.18a1.234 1.234 0 0 1 1.73 0 1.246 1.246 0 0 0 1.74 0l3.46-3.459a1.22 1.22 0 0 0 0-1.741 1.234 1.234 0 0 1 0-1.73l2.191-2.191a1.245 1.245 0 0 1 1.742 0l.507.519a3.68 3.68 0 0 1 .508 4.613 33.372 33.372 0 0 1-8.95 8.926Z"
        />
      </svg>
    </template>
    <template #message>asdssads</template>
  </AppointmentRegistrationInsertPhone>
</template>

<script setup lang="ts">
import { ref } from "vue";

const phoneNumber = ref("");
const phoneState = ref("");
const message = ref("");

const validatePhoneNumber = (input) => {
  if (!input || input.length === 0) {
    phoneState.value = "error";

    message.value = "empty bruv";
  } else {
    phoneState.value = "success";
    message.value = "";
  }
};

const handleSignIn = (input) => {
  console.log("Sign in emitted", input);
};
</script>
