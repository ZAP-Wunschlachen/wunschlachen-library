<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
      <div class="input-section">
        <div class="header">
          <h2 class="text-center">Geben Sie Ihre Telefonnummer ein</h2>
        </div>
        <GenericInput
          class="w-full"
          :prependIcon="true"
          id="default"
          placeholder="Telefonnummer"
          :message="message"
          :success="phoneState === 'success'"
          :error="phoneState === 'error'"
          v-model="phoneNumber"
        >
          <template #prependIcon>
            <slot name="prependIcon"></slot>
          </template>
        </GenericInput>
      </div>

      <slot name="message"></slot>

      <GenericButton
        :plain="false"
        :disabled="disabled"
        @click="handleSignInClick"
        :sending="sending"
      >
        <template #label>
          <p class="p-large">Weiter</p>
        </template>
      </GenericButton>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";

const props = defineProps({
  phoneNumber: String,
  phoneState: String,
  message: String,
  disabled: Boolean,
  sending: Boolean,
});

const emit = defineEmits([
  "sign-in",
  "update:phoneNumber",
  "validate:password",
]);

const phoneNumber = ref(props.phoneNumber);
const phoneState = ref(props.phoneState);

watch(
  () => props.phoneNumber,
  (newVal) => {
    phoneNumber.value = newVal;
  }
);

watch(
  () => props.phoneState,
  (newVal) => {
    phoneState.value = newVal;
  }
);

const updatePhoneNumber = () => {
  emit("update:phoneNumber", phoneNumber.value);
  emit("validate:password", phoneNumber.value);
};

const handleSignInClick = () => {
  emit("sign-in", phoneNumber.value);
};

watch(phoneNumber, updatePhoneNumber);
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

.input-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-center {
  max-width: 300px;
  text-align: center;
}

.submit-button {
  min-width: 290px;
  margin: 10px;
}
</style>
