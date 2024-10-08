<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="main">
        <div class="header">
          <div class="header-content">
            <div class="favicon">
              <slot name="favicon"></slot>
            </div>
            <div class="title-section">
              <h2>Termin vereinbaren</h2>
              <p class="p-large">
                {{ dentist.gender === "M" ? "Herr" : "Frau" }}
                | {{ dentist.last_name }}
                {{ dentist.gender === "M" ? "Zahnärzt" : "Zahnärztin" }}
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-section">
          <div class="accordion-container">
            <div class="divider"></div>

            <p class="p-large accordion-paragraph">
              Wählen Sie das für Sie passende Datum für den Termin
            </p>

            <div class="accordion-content">
              <!-- :is-last="index === visibleAvailableTimes.length - 1" -->
              <GenericAccordion v-for="(item, index) in availableAppointments" :key="index" :is-first="index === 0"
                :is-last="index === item.slots.length - 1" :is-open="index === activeAccordionIndex"
                @toggle="handleToggle(index)">
                <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M19.5 8.75977L12 16.2598L4.5 8.75977" stroke="#172774" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </template>
                <template #title>
                  <h3>{{ item.monthDay }}</h3>
                </template>
                <template v-if="item.slots.length" #content>
                  <div class="content-container">
                    <div class="grid-container">
                      <GenericButton v-for="(button, btnIndex) in item.slots" :key="btnIndex" :outliend="false"
                        :disabled="appointmentsDisabled" class="appointment-button" @click="
                          handleSelectTime({
                            date: item,
                            slotIndex: btnIndex,
                          })
                          ">
                        <template #label>
                          <h3 class="">
                            {{ button }}
                          </h3>
                        </template>
                      </GenericButton>
                    </div>
                    <GenericButton v-if="item.slots.length > visibleSlots[item.day]" :plain="true"
                      :disabled="appointmentsDisabled" @click="loadMoreSlots(item)">
                      <template #label>
                        <h4 class="select-button-text">Mehr</h4>
                      </template>
                    </GenericButton>
                  </div>
                </template>
                <template v-else #content>
                  <div class="content-container">
                    <p>Keine weiteren Termine an diesem Tag verfügbar.</p>
                  </div>
                </template>
              </GenericAccordion>
            </div>

            <GenericButton style="min-height: 45px" :outlined="false" :plain="false" :disabled="buttonDisabled"
              @click="loadMoreDates" class="select-button">
              <template #label>
                <p class="p-large">Weitere Termine anzeigen</p>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, type PropType, onMounted } from "vue";
import type { AvailableTime, Appointment, Dentist } from "../types/types";

const formatDateToTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const props = defineProps({
  dentist: {
    type: Object as PropType<Dentist>,
    required: true,
  },
  selected_date: {
    type: Object as PropType<AvailableTime>,
    required: false,
  },
  availableAppointments: Array as PropType<Appointment[]>,
});

onMounted(() => {
  if (props.selected_date) {
    const foundIndex = props.dentist.available_times.findIndex(
      (item: AvailableTime) => item.day === props.selected_date.day
    );
    activeAccordionIndex.value = foundIndex;
  }
});

const emit = defineEmits(["go-back", "select-time", "load-more-data"]);

const buttonDisabled = ref(false);
const appointmentsDisabled = ref(false);

const activeAccordionIndex = ref<number | null>(null);
const initialVisibleSlotsCount = 9; // Initial number of visible buttons
const initialVisibleDatesCount = 9; // Initial number of visible dates

const handleToggle = (index: number) => {
  activeAccordionIndex.value =
    activeAccordionIndex.value === index ? null : index;
};

const handleSelectTime = (data: { date: AvailableTime; slotIndex: number }) => {
  appointmentsDisabled.value = true;
  emit("select-time", data);
};

const visibleSlots = reactive<Record<string, number>>({});
const visibleDatesCount = ref(initialVisibleDatesCount);

const getVisibleSlots = (item: AvailableTime) => {
  if (!visibleSlots[item.day]) {
    visibleSlots[item.day] = initialVisibleSlotsCount;
  }
  return item.slots.slice(0, visibleSlots[item.day]);
};

const loadMoreSlots = (item: AvailableTime) => {
  buttonDisabled.value = true;
  if (!visibleSlots[item.day]) {
    visibleSlots[item.day] = initialVisibleSlotsCount;
  }
  visibleSlots[item.day] += initialVisibleSlotsCount;
  buttonDisabled.value = false;
};

const loadMoreDates = () => {
  emit("load-more-data");
  //visibleDatesCount.value += initialVisibleDatesCount;
};

const visibleAvailableTimes = computed(() => {
  return props.dentist.available_times;
});
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--dental-light-blue-3);
  overflow-y: auto;
  padding-bottom: 50px;
}

.title {
  text-align: center;
  color: var(--dental-blue-0);
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 25px;
}

.dentist-title {
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.accordion-paragraph {
  max-width: 350px;
  padding: 8px;
}

.main {
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

.content-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.header-content {
  display: flex;
  flex-direction: row;
  padding-top: 0;
  padding-left: 7px;
  padding-right: 32px;
  gap: 32px;
}

.favicon {
  display: flex;
}

.title-section {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
}

.subtitle {
  font-weight: 300;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
}

.accordion-section {
  display: flex;
  flex-direction: column;
  gap: 38px;
  background: white;
}

.accordion-container {
  max-height: 70vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid var(--soft-concrete-1, #dddddf);
  background: #fff;
}

.back-button {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: #172774;
  cursor: pointer;
}

.back-button p {
  margin: 0;
}

.divider {
  width: 100%;
  height: 1.5px;
  background-color: var(--dental-blue-0);
  flex-shrink: 0;
}

.accordion-content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  overflow-y: auto;
}

.appointment-button {
  max-width: 80px;
  border-radius: 8px;
  background: var(--dental-light-blue-0);
  color: var(--ental-Blue-0);
  margin: 5px 0px;
}

.appointment-button:hover {
  max-width: 80px;
  border-radius: 8px;

  color: white;
}

.button-text {
  color: var(--Dental-Blue-0, #172774);
}

.load-more-button {
  background-color: var(--dental-blue-0);
}

.load-more-text {
  color: white;
  font-weight: 300;
}

.h4-with-space::before {
  content: "";
  display: inline-block;
  width: 5px;
  /* Adjust the width to the desired spacing */
}
</style>
