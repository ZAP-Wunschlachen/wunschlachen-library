<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
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
                <img
                  :src="dentistImageUrl(dentist.profile_image)"
                  class="dentist-image"
                />
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
                  v-for="(date, dateIndex) in dentist.available_times.slice(
                    0,
                    shownAppointments[dentistIndex]
                  )"
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
              @click="toggleAppointments(dentistIndex)"
            >
              <template #label>
                <p class="p-large">
                  {{
                    shownAppointments[dentistIndex] >=
                    dentist.available_times.length
                      ? "Wenigere Termine"
                      : "Weitere Termine"
                  }}
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
import { computed, PropType, ref } from "vue";
import { Dentist } from "../types/types";

const props = defineProps({
  dentistArray: {
    type: Array as PropType<Dentist[]>,
    required: true,
  },
});

const emit = defineEmits(["select-appointment"]);

const dentistImageUrl = computed(() => (image: any) => {
  return `https://starfish-app-ypxxf.ondigitalocean.app/assets/${image.id}`;
});

enum Gender {
  Male = "M",
  Female = "F",
}

const genderedTitle = computed(() => (gender: Gender) => {
  return gender === Gender.Male ? "Zahnarzt" : "Zahnärztin";
});

const selectedButtons = ref<{ [key: number]: number }>({});
const shownAppointments = ref<{ [key: number]: number }>({}); // Track how many appointments are shown

// Initialize shown appointments to 3 for each dentist
props.dentistArray.forEach((_, index) => {
  shownAppointments.value[index] = 3;
});

const selectButton = (dentistIndex: number, dateIndex: number) => {
  selectedButtons.value[dentistIndex] = dateIndex;
  const selectedDate =
    props.dentistArray[dentistIndex].available_times[dateIndex];
  const dentist = props.dentistArray[dentistIndex];
  console.log("dentist", { dentist, selectedDate });
  emit("select-appointment", { dentist, selectedDate });
};

const toggleAppointments = (dentistIndex: number) => {
  if (
    shownAppointments.value[dentistIndex] >=
    props.dentistArray[dentistIndex].available_times.length
  ) {
    // If all appointments are shown, reset to 3
    shownAppointments.value[dentistIndex] = 3;
  } else {
    // Otherwise, show more appointments
    shownAppointments.value[dentistIndex] += 3;
  }
};

const formatFullName = (dentist: Dentist) => {
  return `${dentist.first_name} ${dentist.last_name}`;
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
  color: var(--dental-blue-0);
}

.name-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dentist-name {
  color: var(--Dental-Blue-0, #172774);
  /* Mobile/H3 */
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
}

.dentist-title {
  color: var(--Dental-Blue-0, #172774);

  font-size: 16px;
  font-weight: 300;
  line-height: 120%; /* 19.2px */
}

.confirm-text {
  color: #fff;

  text-align: center;
  /* Mobile/p/Large */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
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
  padding: px !important;
  background-color: var(--dental-light-blue-0);
  color: var(--dental-blue-0);
  display: flex;
  width: 75px;
  height: 2r5px;
  max-width: 290px;
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

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1200px) and (max-width: 2650px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
}

.button-text {
  color: white;
}
</style>
