<template>
  <div class="confirmation-container">
    <div class="logo-container">
      <slot name="logo"></slot>
    </div>

    <div class="title-container">
      <h2>Terminbestätigen</h2>
      <p class="p-large" style="margin-top: 10px">
        Bitte überprüfen Sie Ihre Angaben und bestätigen Sie den gebuchten
        Termin
      </p>
    </div>
    <div class="appointment-confirmation">
      <div class="titles-container">
        <slot name="clock-icon"></slot>

        <div class="information-container">
          <h3>{{ formattedDate }}</h3>
          <p class="p-large">{{ formattedHour }}</p>
        </div>
      </div>

      <div class="titles-container">
        <slot name="tooth-icon"></slot>

        <div class="information-container">
          <h3>Behandler</h3>
          <p class="p-large">{{ formattedDentist }}</p>
        </div>
      </div>

      <div class="titles-container">
        <slot name="person-icon"></slot>

        <div class="information-container">
          <h3>Patient</h3>
          <p class="p-large">{{ formattedPatient }}</p>
        </div>
      </div>

      <div class="titles-container">
        <slot name="schedule-icon"></slot>

        <div class="information-container">
          <h3>Terminart</h3>
          <p class="p-large">{{ appointment.treatment.name }}</p>
        </div>
      </div>

      <div class="action-buttons" style="gap: 32px">
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
          :outlined="true"
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
  patient: {
    type: Object as PropType<any>,
    required: true,
  },
});

const emit = defineEmits(["confirm", "cancel"]);

const formattedDentist = computed(() => {
  return `Dr. ${props.appointment.date.dentist.first_name} ${props.appointment.date.dentist.last_name}`;
});

const formattedPatient = computed(() => {
  return `${props.patient.first_name} ${props.patient.last_name} - ${props.patient.birthday}`;
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

const formattedHour = computed(() => {
  const date = new Date(props.appointment.date.date);
  return `um ${props.appointment.date.slots[props.appointment.slotIndex]} Uhr`;
});

const confirmAppointment = () => {
  emit("confirm");
};
const cancelAppointment = () => {
  emit("cancel");
};
</script>

<style scoped>
.appointment-confirmation {
  max-width: 28rem;
  margin: 0 auto;
  padding: 1.5rem;

  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: white;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
  margin-top: 8px;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  text-align: center;
  color: #172774;
}

.confirmation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  background-color: #f8fafd;
  height: 100vh;
}

.titles-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: start;
  justify-content: start;
}

.information-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #172774;
}
</style>
