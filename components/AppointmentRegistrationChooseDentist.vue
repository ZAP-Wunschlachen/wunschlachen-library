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
                <!-- <img :src="dentist.favicon" width="90px" /> -->
                <img
                  :src="dentistImageUrl(dentist.profile_image)"
                  width="90px"
                  class="dentist-image"
                />
                <!-- <img
                  src="https://via.placeholder.com/90"
                  width="90px"
                  class="dentist-image"
                /> -->
              </div>
              <div class="">
                <p class="dentist-name">{{ formatFullName(dentist) }}</p>
                <p class="dentist-name" style="font-weight: 300">
                  {{ genderedTitle(dentist.gender) }}
                </p>
              </div>
            </div>

            <div class="appointment-info">
              <p
                class="p-large"
                style="
                  color: var(--Dental-Blue-0, #172774);
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 120%; /* 19.2px */
                "
              >
                Nächst mögliche Termine:
              </p>
              <div class="appointment-dates">
                <GenericButton
                  v-for="(date, dateIndex) in dentist.available_times"
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
              :disabled="false"
              @click="chooseDentist(dentistIndex)"
            >
              <template #label>
                <p class="p-large confirm-text">Termin vereinbaren</p>
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

const props = defineProps({
  dentistArray: {
    type: Array as PropType<Dentist[]>,
    required: true,
  },
});

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

watch(
  () => props.dentistArray,
  (newData) => {
    console.log(newData, "densitst array");
  }
);

const emit = defineEmits(["choose-dentist"]);

const selectedButtons = ref({});

const selectButton = (dentistIndex: number, dateIndex: number) => {
  emit("choose-dentist", {
    dentist: props.dentistArray[dentistIndex],
    selectedDate: props.dentistArray[dentistIndex].available_times[dateIndex],
  });
};

const formatFullName = (dentist: Dentist) => {
  return `${dentist.first_name} ${dentist.last_name}`;
};

const chooseDentist = (dentistIndex) => {
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
  border-radius: 12px;
  padding: px !important;
  background-color: var(--dental-light-blue-0);
  color: var(--dental-blue-0);

  display: flex;
  width: 75px;
  height: 25px;
  max-width: 290px;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.appointment-button:active {
  max-width: 100px;
  border-radius: 12px;
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
}

.button-text {
  color: white;
}
</style>
