<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>

      <div class="max-w-[400px]">
        <div class="header">
          <h2 class="my-5 text-center">Geben Sie Ihre persönlichen Daten ein</h2>
        </div>
        <PatientForm :form-data="formData" @submit="handleSubmit" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits('submit');
const formData = ref({
  'first_name': '',
  'last_name': '',
  'birthday': '',
  'patient_number': ''
});



const handleSubmit = (patientData: any) => {
  emit("submit", patientData);
};
</script>
<style>
.message-container {
  height: 1rem !important;
}
</style>