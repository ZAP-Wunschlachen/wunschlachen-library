<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
      <div class="input-section">
        <div class="header">
          <h2>Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein</h2>
        </div>

        <div class="input-group">
          <GenericInput
            class="w-full"
            id="email"
            placeholder="E-Mail-Adresse"
            v-model="localEmail"
            :success="emailState === 'success'"
            :error="emailState === 'error'"
            @input="updateEmail"
          />
          <GenericInput
            class="w-full"
            id="password"
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="Passwort"
            v-model="localPassword"
            :success="passwordState === 'success'"
            :error="passwordState === 'error'"
            @input="updatePassword"
          >
            <template #appendIcon>
              <div @click="togglePasswordVisibility">
                <slot name="passwordIcon" :visible="passwordVisible"></slot>
              </div>
            </template>
          </GenericInput>
          <GenericCheckbox v-model="rememberUsername">
            <template #label
              ><p class="p-small">Benutzernamen speichern</p>
            </template></GenericCheckbox
          >

          <NuxtLink @click.prevent="forgotPassword">
            <div class="link-container">
              <a class="a-small">Passwort vergessen?</a>
            </div>
          </NuxtLink>
        </div>
      </div>
      <GenericButton
        :outlined="false"
        :plain="false"
        :disabled="isSubmitDisabled"
        class="submit-button"
        @click="handleSubmit"
      >
        <template #label> Weiter </template>
      </GenericButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from "vue";

interface Props {
  email: string;
  emailState: string;
  password: string;
  passwordState: string;
  rememberUsername: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:email", value: string): void;
  (e: "update:password", value: string): void;
  (e: "validate:password"): void;
  (e: "validate:email"): void;
  (e: "forgot-password"): void;
  (e: "validate"): void;
  (e: "update:rememberUsername", value: boolean): void;
}>();

const localEmail = ref(props.email);
const localPassword = ref(props.password);
const rememberUsername = ref(props.rememberUsername);
const passwordVisible = ref(false);

const updateEmail = () => {
  emit("update:email", localEmail.value);
  emit("validate:email");
};

watch(rememberUsername, (newValue) => {
  emit("update:rememberUsername", newValue);
});

const updatePassword = () => {
  emit("update:password", localPassword.value);
  emit("validate:password");
};

const forgotPassword = () => {
  emit("forgot-password");
};

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

watch(
  () => [props.email, props.password],
  () => {
    localEmail.value = props.email;
    localPassword.value = props.password;
  }
);

const isSubmitDisabled = computed(() => {
  return props.emailState !== "success" || props.passwordState !== "success";
});

const handleSubmit = () => {
  emit("validate");
  if (!isSubmitDisabled.value) {
    // Handle the form submission
    alert("Form submitted successfully!");
  }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 144px;
  padding-bottom: 280px;
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

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Equivalent to gap-4 */
  width: 100%;
}

.link-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}

.submit-button {
  min-width: 290px;
  margin: 10px;
}
</style>
