<template>
  <div>
    <AppointmentRegistrationSuccessful :appointment="appointment">
      <template #clock-icon>
        <img src="https://picsum.photos/id/237/200/300" />
      </template>
      <template #map-icon>
        <img src="https://picsum.photos/id/237/200/300" />
      </template>
      <template #logo>
        <img src="https://picsum.photos/id/237/200/300" />
      </template>
      <template #favicon>
        <img src="https://picsum.photos/id/237/200/300" />
      </template>
    </AppointmentRegistrationSuccessful>
  </div>
</template>

<script setup lang="ts">
import type { Appointment } from "~/types/types";

const appointment: Appointment = {
  date: new Date(),
  location: {
    branch: "Reinickendorf",
    address: "Gotthardstr. 29",
  },
  dentist: {
    name: "Dr. Werner",
  },
};
</script>
