<template>
  <div>
    <AppointmentRegistrationInsertPatientInfo
      :name="name"
      :nameState="nameState"
      :lastName="lastName"
      :lastNameState="lastNameState"
      :email="email"
      :emailState="emailState"
      :rememberUsername="rememberUsername"
      @update:name="updateName"
      @update:lastName="updateLastName"
      @update:email="updateEmail"
      @validate:name="validateName"
      @validate:lastName="validateLastName"
      @validate:email="validateEmail"
      @validate="validateForm"
      @update:rememberUsername="updateRememberUsername"
      nameMessage="adsad"
    >
      <template #logo> dsadsads </template>
    </AppointmentRegistrationInsertPatientInfo>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const nameState = ref("");
const lastName = ref("");
const lastNameState = ref("");
const email = ref("");
const emailState = ref("");
const rememberUsername = ref(false);

const updateName = (value: string) => {
  name.value = value;
  validateName();
};

const updateLastName = (value: string) => {
  lastName.value = value;
  validateLastName();
};

const updateEmail = (value: string) => {
  email.value = value;
  validateEmail();
};

const validateName = (input) => {
  // Add your validation logic here
  console.log("dasdasdsads", name.value);
  nameState.value = name.value ? "success" : "error";
};

const validateLastName = () => {
  // Add your validation logic here
  lastNameState.value = lastName.value ? "success" : "error";
};

const validateEmail = () => {
  // Add your validation logic here
  emailState.value = email.value.includes("@") ? "success" : "error";
};

const validateForm = () => {
  validateName();
  validateLastName();
  validateEmail();
};

const updateRememberUsername = (value: boolean) => {
  rememberUsername.value = value;
};
</script>
