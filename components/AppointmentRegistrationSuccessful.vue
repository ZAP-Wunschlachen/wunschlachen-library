<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="logo-container">
        <!-- <p>Loading logo...</p> -->
        <slot name="logo"></slot>
      </div>
      <div class="details-wrapper">
        <div class="confirmation-message">
          <div class="icon-message-wrapper">
            <div class="favicon-container">
              <!-- Add favicon image here -->
              <slot name="favicon"></slot>
            </div>
            <div class="message-container">
              <h2 style="color: var(--success-green-0)">
                Der Termin ist gebucht
              </h2>
              <p style="color: var(--success-green-1)" class="p-large">
                {{ item.dentist.gender === "M" ? "Herr" : "Frau" }}
                | {{ item.dentist.last_name }}
                {{ item.dentist.gender === "M" ? "Zahnärzt" : "Zahnärztin" }}
              </p>
            </div>
          </div>
        </div>
        <div class="appointment-details">
          <div class="appointment-card">
            <div class="appointment-info">
              <div class="info-row">
                <div class="icon-container">
                  <!-- Add clock icon here -->
                  <slot name="clock-icon"></slot>
                </div>
                <div class="text-container">
                  <h3>{{ formattedDate }}</h3>
                  <p class="p-large">Ggf. bitte rechtzeitig absagen</p>
                </div>
              </div>
              <div class="separator"></div>
              <div class="info-row">
                <div class="icon-container">
                  <!-- Add map icon here -->
                  <slot name="map-icon"></slot>
                </div>
                <div class="text-container">
                  <h3>Zahnarztpraxis Berlin - {{ formattedLocation }}</h3>
                  <p class="p-large">{{ formattedAddress }}</p>
                </div>
              </div>
            </div>
            <p style="margin-top: 32px" class="p-large">
              Sie erhalten in Kürze eine Bestätigungs via E-Mail. Wir freuen uns
              auf Sie!
            </p>
            <div class="svg-container">
              <!-- Add SVG here -->
              <IconsSuccessAppointment></IconsSuccessAppointment>
            </div>
            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
              style="margin-top: 24px"
              @click="handleClick()"
            >
              <template #label>
                <p class="p-large" style="font-weight: 300; color: white">
                  Zurück zur Übersicht
                </p>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type CreatedData = {
  appointment: Appointment;
  location: Location;
  dentist: Dentist;
};

import { computed, ref } from "vue";
import {
  Appointment,
  AvailableTime,
  Dentist,
  TreatmentTemplate,
} from "../types/types";

const props = defineProps<{
  data: CreatedData;
}>();

const item = ref<CreatedData>(props.data);

const emit = defineEmits(["close"]);

const handleClick = () => {
  emit("close");
};

const formattedLocation = computed(() => {
  return item.value.location ? item.value.location.district : "Kein Standort";
});

const formattedAddress = computed(() => {
  return item.value.location
    ? `${item.value.location.street} ${item.value.location.street_number} | ${item.value.location.zip_code} ${item.value.location.city}`
    : "Keine Adresse";
});

const formattedDate = computed(() => {
  const date = new Date(item.value.appointment.start_date_time);

  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const datePart = date.toLocaleDateString("de-DE", optionsDate);
  const timePart = date.toLocaleTimeString("de-DE", optionsTime);

  return `Am ${datePart} | um ${timePart} Uhr`;
});

const formattedDentist = computed(() => {
  console.log("item", item.value);
  return item.value.dentist ? item.value.dentist.name : "Kein Zahnarzt";
});

// if (!item.value) {
//   console.error("Error fetching item:");
// } else {
//   console.log("item", item.value);
// }
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
}

.container {
  display: flex;
  width: 100%;
  min-width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: var(--dental-light-blue-3);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.logo-container {
  text-align: center;
}

.details-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 61px;
  width: 100%;
}

.confirmation-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-message-wrapper {
  display: flex;
  gap: 32px;
}

.message-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.light-text {
  font-weight: 300;
}

.appointment-details {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.appointment-card {
  display: flex;
  flex-direction: column;
  min-width: 350px;
  max-width: 400px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  border: 1px solid var(--soft-concrete-1, #dddddf);
}

.appointment-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-row {
  display: flex;
  gap: 10px;
}

.icon-container {
  width: 24px;
  height: 24px;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.separator {
  width: 100%;
  height: 2px;
  background-color: var(--dental-blue-0);
}

.confirmation-note {
  margin-top: 40px;
}

.svg-container {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}

.generic-button {
  margin-top: 24px;
  padding: 10px 20px;
  background-color: #172774;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-label {
  font-weight: 300;
  margin: 0;
}

.h4-with-space::before {
  content: "";
  display: inline-block;
  width: 5px;
}
</style>
