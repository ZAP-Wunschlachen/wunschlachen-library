<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
      <div class="header">
        <h2>Registrieren Sie sich oder loggen Sie sich ein</h2>
      </div>
      <div class="section">
        <div class="sub-section">
          <p class="p-large">Neu bei Wunschlachen?</p>
          <div>
            <GenericButton
              :outlined="false"
              :plain="false"
              class="register-button"
              :disabled="false"
              @click="handleRegister"
            >
              <template #label> <p class="p-large">Registrieren</p></template>
            </GenericButton>
          </div>
        </div>
        <div class="sub-section">
          <p class="p-large">Ich habe bereits ein Wunschlachen-Konto</p>
          <div>
            <GenericButton
              :outlined="false"
              :plain="false"
              class="login-button"
              :disabled="false"
              @click="handleLogin"
            >
              <template #label> <p class="p-large">Eingloggen</p></template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineEmits } from "vue";

const emit = defineEmits(["register", "login"]);

const handleRegister = () => {
  emit("register");
};

const handleLogin = () => {
  emit("login");
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

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.sub-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.register-button {
  min-width: 290px;
  margin: 10p;
  color: white;
}

.login-button {
  min-width: 290px;
  margin: 10p;
  background: var(--Dental-Light-Blue-0, #c5e1fc);
  color: var(--dental-blue-0);
}
</style>
