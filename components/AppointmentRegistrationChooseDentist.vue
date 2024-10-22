<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="location-selection">
        <div class="header">
          <h2 class="title">Wählen Sie einen Zahnarzt</h2>
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
                <img
                  :src="dentistImageUrl(dentist.profile_image)"
                  class="dentist-image"
                />
                <!-- <img
                  src="https://via.placeholder.com/90"
                  width="90px"
                  class="dentist-image"
                /> -->
              </div>
              <div class="name-container">
                <h3>{{ formatFullName(dentist) }}</h3>
                <p class="p-large" style="font-weight: 300">
                  {{ genderedTitle(dentist.gender) }}
                </p>
              </div>
            </div>

            <div class="appointment-info">
              <p class="p-large">Nächst mögliche Termine:</p>
              <div class="appointment-dates">
                <GenericButton
                  v-for="(date, dateIndex) in cappedArray(
                    dentist.available_times,
                    6
                  )"
                  :key="dateIndex"
                  :plain="false"
                  :disabled="appintmentsDisabled"
                  :class="[
                    'appointment-button',
                    selectedButtons[dentistIndex] === dateIndex
                      ? 'selected'
                      : '',
                  ]"
                  @click="selectButton(dentistIndex, dateIndex)"
                >
                  <template #label>
                    <h3 style="font-weight: 600; font-size: 16px">
                      {{ date.day }}
                    </h3>
                  </template>
                </GenericButton>
              </div>
            </div>

            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="buttonDisabled"
              @click="chooseDentist(dentistIndex)"
            >
              <template #label>
                <p class="p-large">Weitere Termine</p>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed, PropType, watch } from "vue";
import { ref, defineEmits } from "vue";
import { Dentist } from "../types/types";
const directusUrl = useDirectusUrl();


const props = defineProps({
  dentistArray: {
    type: Array as PropType<Dentist[]>,
    required: true,
  },
});

const dentistImageUrl = computed(() => (image: any) => {
  return `${directusUrl}/assets/${image.id}`;
});

const cappedArray = computed(() => (array: any[], maxItems: number = 5) => {
  return array.slice(0, maxItems);
});

enum Gender {
  Male = "M",
  Female = "F",
}

const genderedTitle = computed(() => (gender: Gender) => {
  return gender === Gender.Male ? "Zahnarzt" : "Zahnärztin";
});

watch(
  () => props.dentistArray,
  (newData) => {
    console.log(newData, "densitst array");
  }
);

const emit = defineEmits(["choose-dentist"]);
const buttonDisabled = ref(false);
const appintmentsDisabled = ref(false);
const selectedButtons = ref({});

const selectButton = (dentistIndex: number, dateIndex: number) => {
  appintmentsDisabled.value = true;
  emit("choose-dentist", {
    dentist: props.dentistArray[dentistIndex],
    selectedDate: props.dentistArray[dentistIndex].available_times[dateIndex],
  });
};

const formatFullName = (dentist: Dentist) => {
  return `${dentist.first_name} ${dentist.last_name}`;
};

const chooseDentist = (dentistIndex) => {
  buttonDisabled.value = true;
  const selectedDateIndex = selectedButtons.value[dentistIndex];
  const dentist = props.dentistArray[dentistIndex];
  if (selectedDateIndex !== undefined) {
    const selectedDate =
      props.dentistArray[dentistIndex].available_times[selectedDateIndex];
    emit("choose-dentist", { dentist, selectedDate });
  } else {
    emit("choose-dentist", { dentist, selectedDate: null });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* Ensure the content flows in a column */
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
  align-items: center;
  justify-content: flex-start; /* Align items from the top */
  gap: 8px;
  background-color: var(--dental-light-blue-3);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  flex-grow: 1; /* Ensure the wrapper takes up available space */
  padding-bottom: 50px; /* Add this to create space at the bottom */
}

.title {
  text-align: center;
  color: var(--dental-blue-0);
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 25px;
}

.location-selection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 61px;
  align-self: stretch;
  width: 100%;
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
  width: 100%; /* Ensure it takes the full width */
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
  color: var(--dental-blue-0);
}

.name-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dentist-name {
  color: var(--Dental-Blue-0, #172774);
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
}

.dentist-title {
  color: var(--Dental-Blue-0, #172774);
  font-size: 16px;
  font-weight: 300;
  line-height: 120%;
}

.confirm-text {
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
}

.appointment-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.appointment-dates {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.appointment-button {
  max-width: 100px;
  max-height: 24px;
  border-radius: 8px;
  background-color: var(--dental-light-blue-0);
  color: var(--dental-blue-0);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.appointment-button:active {
  max-width: 100px;
  border-radius: 8px;
  background-color: var(--dental-light-blue-0);
  color: white;
}

.appointment-button.selected {
  background-color: var(--dental-blue-0);
  color: white;
}

.dentist-image {
  border-radius: 9999px;
  border: 3px solid var(--soft-concrete-1);
  width: 70px;
  height: 70px;
}

.button-text {
  color: white;
}
</style>
