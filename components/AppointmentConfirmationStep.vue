<template>
  <div :class="siteColors['font_color']">
    <div class="logo-container">
      <slot name="logo"></slot>
    </div>

    <div class="max-w-[400px] text-center">
      <h2>Terminbestätigen</h2>
      <p class="p-large pb-10" style="margin-top: 10px">
        Bitte überprüfen Sie Ihre Angaben und bestätigen Sie den gebuchten
        Termin
      </p>
    </div>
    <div class="appointment-confirmation">
      <div class="titles-container">
        <slot name="clock-icon"></slot>
        <div>
          <h3>{{ formattedDate }}</h3>
          <p class="p-large">{{ formattedHour }}</p>
        </div>
      </div>
      <div class="titles-container">
        <!-- <slot name="tooth-icon"></slot> -->
         <IconsTooth width="24px"  />

        <div>
          <h3>Behandler</h3>
          <p class="p-large">{{ formattedDentist }}</p>
        </div>
      </div>

      <div class="flex gap-2">
        <slot name="person-icon"></slot>

        <div class="mb-2">
          <h3>Patient</h3>
          <p class="p-large">{{ formattedPatient }}</p>
          <div v-if="!checkIfPatient()" class="mt-2">
            <GenericInput placeholder="Email" v-model="patient.email" />
            <GenericInput placeholder="Telefon" v-model="patient.telephone" />
          </div>
        </div>
      </div>
      <div class="titles-container">
        <slot name="schedule-icon"></slot>
        <div>
          <h3>Terminart</h3>
          <p class="p-large">{{ appointment.treatment.name }}</p>
        </div>
      </div>

      <div class="action-buttons flex" style="gap: 32px">
        
        <GenericButton :outlined="false" :default="true" :disabled="buttonDisabled" @click="confirmAppointment"
          class="select-button py-2 flex-1">
          <template #label>
            <p class="p-large text-white">Bestätigen</p>
          </template>
        </GenericButton>

        <GenericButton :outlined="true" :plain="true" :disabled="false" @click="cancelAppointment"
          class="select-button py-2 flex-1">
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
import GenericInput from "./GenericInput.vue";

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
  dentist: {
    type: Object as PropType<any>,
    required: true,
  },
});
// console.log("appointment dentist: ", );
const buttonDisabled = ref(false);

const emit = defineEmits(["confirm", "cancel"]);

const formattedDentist = computed(() => {
  const dentist = props.dentist;
  return `${dentist.first_name} ${props.dentist.last_name}`;
});

const formattedPatient = computed(() => {
  return `${props.patient.first_name} ${props.patient.last_name}`;
});

const formattedDate = computed(() => {
  const date = new Date(props.appointment.date);
  return `${date.toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
});

const formattedHour = computed(() => {
  const slot=props.appointment;
  // console.log('==props.appointment.date',props.appointment.date);

  const time = slot.slotIndex.slot;
  return `um ${time} Uhr`;
});

const formatDateToTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const confirmAppointment = () => {
  buttonDisabled.value = true;
  emit("confirm");
};
const cancelAppointment = () => {
  emit("cancel");
};
</script>

<style scoped>
.appointment-confirmation {
  min-width: 300px;
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