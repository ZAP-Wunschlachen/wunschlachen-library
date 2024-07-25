<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
      <div class="location-selection">
        <div class="header">
          <h2 style="">Wählen Sie einen Zahnarzt</h2>
        </div>

        <div class="locations">
          <div
            v-for="(dentist, dentistIndex) in dentistArray"
            :key="dentistIndex"
            class="location-card"
          >
            <div class="location-header">
              <div>
                <!-- <img :src="dentist.favicon" width="90px" /> -->
              </div>
              <div class="location-details">
                <h3>Dr. {{ formatFullName(dentist) }}</h3>
                <p class="p-large">{{ dentist.name }}</p>
              </div>
            </div>

            <div class="appointment-info">
              <p class="p-large">Nächst mögliche Termine:</p>
              <div class="appointment-dates">
                <GenericButton
                  v-for="(date, dateIndex) in dentist.calendars"
                  :key="dateIndex"
                  :plain="false"
                  :disabled="false"
                  :class="[
                    'appointment-button',
                    selectedButtons[dentistIndex] === dateIndex
                      ? 'selected'
                      : '',
                  ]"
                  @click="selectButton(dentistIndex, dateIndex)"
                >
                  <template #label>
                    <h4>{{ date }}</h4>
                  </template>
                </GenericButton>
              </div>
            </div>

            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              @click="chooseDentist(dentistIndex)"
            >
              <template #label>
                <p class="button-text p-large">Termin vereinbaren</p>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ref, defineEmits } from "vue";
import { Dentist } from "../types/types";

const props = defineProps({
  dentistArray: {
    type: Array as PropType<Dentist[]>,
    required: true,
  },
});

console.log(props.dentistArray, "dentistArray");

const emit = defineEmits(["choose-dentist"]);

const selectedButtons = ref({});

const selectButton = (dentistIndex, dateIndex) => {
  selectedButtons.value[dentistIndex] = dateIndex;
};

const formatFullName = (dentist: Dentist) => {
  return `${dentist.first_name} ${dentist.last_name}`;
};

const chooseDentist = (dentistIndex) => {
  const selectedDateIndex = selectedButtons.value[dentistIndex];
  if (selectedDateIndex !== undefined) {
    const selectedDate =
      props.dentistArray[dentistIndex].appointmentDates[selectedDateIndex];
    const dentist = props.dentistArray[dentistIndex];
    emit("choose-dentist", { dentist, selectedDate });
  } else {
    alert("Bitte wählen Sie einen Termin aus.");
  }
};
</script>

<style scoped>
.container {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 144px;
  padding-bottom: 280px;
  min-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--dental-light-blue-3);
  overflow-y: auto;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.location-selection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 61px;
  align-self: stretch;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.locations {
  display: flex;
  flex-direction: column;
  gap: 38px;
}

.location-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 2px solid var(--soft-concrete-1);
  gap: 24px;
  border-radius: 8px;
  background: white;
}

.location-header {
  display: flex;
  flex-direction: row;
  padding-top: 0;
  padding-left: 7px;
  padding-right: 32px;
  gap: 32px;
}

.location-details {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
}

.appointment-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.appointment-dates {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.appointment-button {
  max-width: 62px;
  border-radius: 12px;
  background-color: var(--dental-light-blue-0);
  color: var(--dental-blue-0);
}

.appointment-button.selected {
  background-color: var(--dental-blue-0);
  color: white;
}

.button-text {
  color: white;
}
</style>
