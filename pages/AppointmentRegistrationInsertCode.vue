<template>
  <AppointmentRegistrationInsertCode
    v-model:otp="otp"
    :otpState="otpState"
    @validate="handleValidateOtp"
    :disabled="disabled"
    :sending="sending"
  >
    <template v-if="otpState === 'error'" #error>
      <h3 class="text-error-red-0">{{ OtpResponse }}</h3>
    </template>
    <template v-if="otpState === 'success'" #success>
      <h3 class="text-success-green-0">{{ OtpResponse }}</h3>
    </template>
    <template #logo> Code here bruv </template>
  </AppointmentRegistrationInsertCode>
</template>

<script setup>
const otp = ref("");
const otpState = ref("");
const OtpResponse = ref("");
const sending = ref(false);
const disabled = ref(false);

const handleValidateOtp = async (input) => {
  console.log("input", input);
  sending.value = true;
  disabled.value = true;

  if (input > 0) {
    OtpResponse.value = "nice it workd!";
    otpState.value = "error";
    disabled.value = true;

    console.log("otpState", otpState.value);
  }
};
</script>
