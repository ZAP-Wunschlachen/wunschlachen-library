<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="logo-slot">
        <slot name="logo"> </slot>
      </div>
      <div class="otp-section">
        <h2>Bitte den per E-Mail gesendeten Code eingeben</h2>

        <div class="otp-input-text">
          <GenericOtpInput
            :isSuccess="otpState === 'success'"
            :isError="otpState === 'error'"
            :isDisabled="otpState === 'disabled'"
            v-model="otpValue"
          />
          <slot name="error"> </slot>
          <slot name="success"> </slot>
        </div>
      </div>

      <GenericButton
        :outlined="false"
        :plain="false"
        :disabled="disabled"
        :sending="sending"
        class="submit-button"
        @click="handleSubmit"
      >
        <template #label>
          <p class="p-large">Einloggen</p>
        </template>
      </GenericButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from "vue";

interface Props {
  otpState: string;
  disabled: Boolean;
  sending: Boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["validate"]);

const otpValue = ref("");

const handleSubmit = () => {
  emit("validate", otpValue.value);
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 144px;
  padding-bottom: 280px;
  padding-left: 0;
  padding-right: 0;
  min-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--dental-light-blue-3);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
}

.logo-slot {
  display: flex;
  justify-content: center;
  align-items: center;
}

.otp-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 59px;
  align-self: stretch;
  text-align: center;
}

.submit-button {
  max-width: 290px;
  margin: 10px;
}

.otp-input-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
