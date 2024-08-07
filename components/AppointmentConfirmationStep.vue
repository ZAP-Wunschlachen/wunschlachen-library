<template>
  <div class="appointment-confirmation">
    <p class="title">Terminbestätigung</p>
    <div class="dentist-info">{{ formattedDentist }}</div>
    <div class="appointment-date">{{ formattedDate }}</div>
    <div class="appointment-type">
      Terminart:
      <span>{{ appointment.treatment.name }}</span>
    </div>
    <div class="action-buttons">
      <GenericButton
        :outlined="false"
        :plain="false"
        :disabled="false"
        @click="confirmAppointment"
        class="select-button"
      >
        <template #label>
          <p class="p-large">Bestätigen</p>
        </template>
      </GenericButton>

      <GenericButton
        :outlined="false"
        :plain="true"
        :disabled="false"
        @click="cancelAppointment"
        class="select-button"
      >
        <template #label>
          <p class="p-large">Abbrechen</p>
        </template>
      </GenericButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { AvailableTime, TreatmentTemplate } from "../types/types";

type SelectedAppointment = {
  date: AvailableTime;
  slotIndex: number;
  treatment: TreatmentTemplate;
};

const props = defineProps({
  appointment: {
    type: Object as PropType<SelectedAppointment>,
    required: true,
  },
});

const emit = defineEmits(["confirm", "cancel"]);

const formattedDentist = computed(() => {
  return `Dr. ${props.appointment.date.dentist.first_name} ${props.appointment.date.dentist.last_name}`;
});

const formattedDate = computed(() => {
  const date = new Date(props.appointment.date.date);
  return `${date.toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })} um ${props.appointment.date.slots[props.appointment.slotIndex]} Uhr`;
});

const confirmAppointment = () => {
  console.log("Termin bestätigt");
  emit("confirm");
};
const cancelAppointment = () => {
  console.log("Termin abgebrochen");
  emit("cancel");
};
</script>

<style scoped>
.appointment-confirmation {
  max-width: 28rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.confirmation-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1.5rem;
}

.dentist-info,
.appointment-date,
.appointment-type {
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 1rem;
}
.title {
  text-align: center;
  color: var(--dental-blue-0);
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 25px;
}
.appointment-type span {
  font-weight: 400;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
