<template>
  <AppointmentRegistrationOldPatient
    @pick-choice="
      (input) => {
        console.log('input', input);
      }
    "
  >
    <template #logo>Logo goes here </template>
  </AppointmentRegistrationOldPatient>
</template>
