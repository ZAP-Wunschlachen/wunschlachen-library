<template>
  <div>
    <!-- <AppointmentRegistrationSuccessful :appointment="appointment">
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
    </AppointmentRegistrationSuccessful> -->
    <!-- components/AppointmentRegistrationPickDate.vue -->
    <!-- <AppointmentRegistrationPickDate
      :available-appointments="availableAppointments"
    ></AppointmentRegistrationPickDate> -->

    <AppointmentRegistrationError
      :appointment="appointment"
    ></AppointmentRegistrationError>
  </div>
</template>

<script setup lang="ts">
import type { Appointment } from "~/types/types";

const appointment = ref<Appointment>({
  date: new Date(),
  location: {
    branch: "Reinickendorf",
    address: "Gotthardstr. 29",
  },
  dentist: {
    name: "Dr. Werner",
  },
});

const handleChoice = (choice: string) => {
  alert(`Choice is ${choice}`);
};

const availableAppointments = ref<Appointment[]>([
  { ...appointment.value },
  { ...appointment.value },
  { ...appointment.value },
]);
</script>
