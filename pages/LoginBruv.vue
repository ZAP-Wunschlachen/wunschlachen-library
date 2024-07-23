<template>
  <div class="flex flex-col gap-[10px] m-4">
    <AppointmentRegistrationStartScreen
      @register="
        () => {
          console.log('register');
        }
      "
      @login="
        () => {
          console.log('login');
        }
      "
    >
      <template #logo> loginBRUv </template>
    </AppointmentRegistrationStartScreen>

    <h1 class="mx-auto">AFTER INSERT MAIL</h1>

    <AppointmentRegistrationInsertMail
      @sign-in="
        (input) => {
          console.log('Sign in emitted', input);
        }
      "
    >
      <template #logo>Logoasdasdsd Bruv</template>
    </AppointmentRegistrationInsertMail>

    <h1 class="mx-auto">AFTER INSERT OTP</h1>
    <AppointmentRegistrationInsertCode
      v-model:otp="otp"
      :otpState="otpState"
      @validate="handleOtpSubmit"
    >
      <template v-if="otpState === 'error'" #error>sad</template>
      <template v-if="otpState === 'success'" #success>success</template>
      <template #logo> logo BRUv </template>
    </AppointmentRegistrationInsertCode>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const otp = ref("");
const otpState = ref("");

const handleOtpSubmit = (input: string) => {
  // Handle OTP submission
  if (!input.includes("1")) {
    otpState.value = "error";
  }
};
</script>
