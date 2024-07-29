<template>
  <AppointmentRegistrationPickDate
    :available-appointments="availableAppointments"
    :available-times="availableTimes"
  >
    <template #logo> asdsad </template>
    <template #favicon> asdsad </template>
    <template #arrow-left
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M10.5 20.0098L3 12.5098M3 12.5098L10.5 5.00977M3 12.5098H21"
          stroke="#172774"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
  </AppointmentRegistrationPickDate>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppointmentScheduler from "./AppointmentScheduler.vue";

const availableAppointments = ref([
  // Define your available appointments here
]);

const availableTimes = ref([
  { day: "Monday", slots: ["10:00", "11:00", "12:00"] },
  { day: "Tuesday", slots: ["13:00", "14:00", "15:00"] },
]);
</script>

<style scoped>
/* Your styles here */
</style>
