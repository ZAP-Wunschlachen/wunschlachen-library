<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
      <div class="input-section">
        <div class="header">
          <h2>
            Bitte Geben Sie Ihren vollständigen Namen sowie Ihr Geburtsdatum ein
          </h2>
        </div>

        <div class="input-group">
          <GenericInput
            class="w-full"
            id="name"
            placeholder="Vorname"
            v-model="localName"
            :success="nameState === 'success'"
            :error="nameState === 'error'"
            @input="updateName"
            :message="nameMessage"
          />
          <GenericInput
            class="w-full"
            id="lastName"
            placeholder="Nachname"
            v-model="localLastName"
            :success="lastNameState === 'success'"
            :error="lastNameState === 'error'"
            @input="updateLastName"
            :message="lastNameMessage"
          />
          <input
            class="date-input w-full"
            type="date"
            id="birthdate"
            placeholder="Geburtsdatum"
            v-model="localBirthdate"
            @input="updateBirthdate"
          />
        </div>
      </div>

      <slot name="message"></slot>

      <GenericButton
        :outlined="false"
        :plain="false"
        :disabled="disabled"
        :sending="sending"
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
  name: string;
  nameState: string;
  lastName: string;
  lastNameState: string;
  birthdate: string;
  birthdateState: string;
  rememberUsername: boolean;
  nameMessage: String;
  lastNameMessage: String;
  birthdateMessage: String;
  disabled: Boolean;
  sending: Boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:name", value: string): void;
  (e: "update:lastName", value: string): void;
  (e: "update:birthdate", value: string): void;
  (e: "validate:name"): void;
  (e: "validate:lastName"): void;
  (e: "validate:birthdate"): void;
  (e: "validate"): void;
  (e: "update:rememberUsername", value: boolean): void;
}>();

const localName = ref(props.name);
const localLastName = ref(props.lastName);
const localBirthdate = ref(props.birthdate);
const rememberUsername = ref(props.rememberUsername);

const updateName = () => {
  emit("update:name", localName.value);
  emit("validate:name");
};

const updateLastName = () => {
  emit("update:lastName", localLastName.value);
  emit("validate:lastName");
};

const updateBirthdate = () => {
  emit("update:birthdate", localBirthdate.value);
  emit("validate:birthdate");
};

watch(rememberUsername, (newValue) => {
  emit("update:rememberUsername", newValue);
});

watch(
  () => [props.name, props.lastName, props.birthdate],
  () => {
    localName.value = props.name;
    localLastName.value = props.lastName;
    localBirthdate.value = props.birthdate;
  }
);

const isSubmitDisabled = computed(() => {
  return (
    props.nameState !== "success" ||
    props.lastNameState !== "success" ||
    props.birthdateState !== "success"
  );
});

const handleSubmit = () => {
  emit("validate");
  if (!isSubmitDisabled.value) {
    // Handle the form submission
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
  background-color: #f3f4f6; /* Adjust the background color as needed */
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
  max-width: 400px;
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
  text-align: center;
}

.text-center {
  max-width: 300px;
  text-align: center;
}

.input-group {
  display: flex;
  flex-direction: column;
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

.date-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
