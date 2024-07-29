<template>
  <AppointmentRegistrationChooseLocation :locations="locations">
    <template #logo>Logo goes here</template>
  </AppointmentRegistrationChooseLocation>
</template>

<script setup>
const locations = [
  {
    id: 1,
    city: "Berlin",
    district: "Mitte",
    street: "Unter den Linden",
    street_number: "1",
    zip_code: "10117",
  },
  {
    id: 2,
    city: "Munich",
    district: "Altstadt-Lehel",
    street: "Marienplatz",
    street_number: "8",
    zip_code: "80331",
  },
  // Add more locations as needed
];
</script>
