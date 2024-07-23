<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
      <div class="input-section">
        <div class="header">
          <h2 class="text-center">
            Geben Sie Ihre E-Mail-Adresse oder Telefonnummer ein
          </h2>
        </div>
        <GenericInput
          class="w-full"
          :prependIcon="mailIcon"
          id="default"
          placeholder="Default Input"
          v-model="inputValue"
        >
          <template #prependIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M22.6562 7.28613V18.2236C22.6562 19.5181 21.6069 20.5674 20.3125 20.5674H4.6875C3.39308 20.5674 2.34375 19.5181 2.34375 18.2236V7.28613M22.6562 7.28613C22.6562 5.99172 21.6069 4.94238 20.3125 4.94238H4.6875C3.39308 4.94238 2.34375 5.99172 2.34375 7.28613M22.6562 7.28613V7.53896C22.6562 8.35285 22.234 9.10847 21.5409 9.53503L13.7284 14.3427C12.9751 14.8063 12.0249 14.8063 11.2716 14.3427L3.45915 9.53503C2.76599 9.10847 2.34375 8.35285 2.34375 7.53896V7.28613"
                stroke="#172774"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </GenericInput>
      </div>
      <GenericButton
        :plain="false"
        :disabled="false"
        @click="handleSignInClick"
      >
        <template #label>
          <p class="p-large">Eingloggen</p>
        </template>
      </GenericButton>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["sign-in"]);

const inputValue = ref("");

const handleSignInClick = () => {
  emit("sign-in", inputValue.value);
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
