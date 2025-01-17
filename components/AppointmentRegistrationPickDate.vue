<template>
  <div class="">
    <div class="">
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
                {{ dentist.gender === "M" ? "Zahnarzt" : "Zahnärztin" }}
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-section">
          <div class="border p-6 rounded-lg">
            <p class="p-large  w-[350px] pb-8 border-b-2" :class="siteColors['border-color']">
              Wählen Sie das für Sie passende Datum für den Termin
            </p>

            <div class="accordion-content">

              <div v-if="errorInBegining(availableAppointments)" class="">

                <CalendarWarningLatestInMessage
                  message="Bitte wählen Sie den nächstmöglichen verfügbaren Termin. Ihre Behandlung ist wichtig und sollte zeitnah stattfinden, um optimale Ergebnisse zu gewährleisten." />
              </div>
              <div v-for="(items, key) in availableAppointments" :key="key">
                <!-- in the begining -->

                <GenericAccordion v-for="(item, index) in items" :key="index" :is-first="index"
                  @toggle="handleToggle(index)" :is-open="index === activeAccordionIndex">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path d="M19.5 8.75977L12 16.2598L4.5 8.75977" :stroke="siteColors['font_color_code']"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </template>
                  <template #title>
                    <h3>{{ stringToDate(index).format_date }}</h3>
                  </template>
                  <template v-if="item.length" #content>
                    <div class="content-container">
                      <div class="grid-container pr-2">
                        <button v-for="(button, btnIndex) in item" :key="btnIndex" @click="
                          handleSelectTime({
                            date: stringToDate(index).date,
                            slotIndex: button,
                          })
                          " :class="[
                              'py-1 text-lg w-full mb-1 rounded-md hover:opacity-80  text-[var(--ental-Blue-0)]',
                              siteColors['slot-bg'],
                            ]">
                          {{ button.slot }}
                        </button>
                      </div>

                      <GenericButton v-if="item.length > visibleSlots[item.day]" :plain="true"
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

                <!-- displayin the end -->
                <div v-if="getDateIndex(items)" class="">
                  <CalendarWarningLatestInMessage
                    message="Die bis hier angezeigten Termine liegen im empfohlenen Zeitraum Ihres Zahnarztes für die beste Behandlung. Bitte beachten Sie, dass spätere Termine außerhalb dieser Empfehlung liegen können." />
                </div>
              </div>
            </div>

            <div class="pt-6">
              <GenericButton :default="true" :disabled="buttonDisabled" @click="loadMoreDates"
                class="py-2 select-button">
                <template #label>
                  <p class="text-white text-[16px]">Weitere Termine anzeigen</p>
                </template>
              </GenericButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, type PropType, onMounted, onUnmounted } from "vue";
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
  latestIn: {
    type: Object as PropType<AvailableTime>,
    required: false,
  },
  availableAppointments: Array as PropType<Appointment[]>,
});
// console.log('===props', props);

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
  // appointmentsDisabled.value = true;
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
let warningCheck: any = null;
let checkedInBegining = false;

const getDateIndex = (items: Object) => {
  if (!props.latestIn || checkedInBegining) return;

  const dynamicDate = stringToDate(Object.keys(items)[0]).date;
  const res = (dynamicDate >= props.latestIn && !warningCheck);

  if (res) {
    warningCheck = dynamicDate;
  }

  if (warningCheck === dynamicDate) {
    return true;
  }
  return res;
}

const errorInBegining = (items: Object) => {
  if (!props.latestIn) return;

  const dynamicDate = stringToDate(Object.keys(items[0])[0]).date;
  const res = (dynamicDate > props.latestIn && !warningCheck);
  if (res) {
    checkedInBegining = true;
  }
  return res;
}


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
  /* display: flex; */
  /* flex-direction: column; */
  padding: 24px;
  /* border-radius: 8px; */
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
  max-height: 195px;
}

.appointment-button {
  max-width: 80px;
  border-radius: 8px;
  background: var(--dental-light-blue-0);
  color: var(--ental-Blue-0);
  margin: 5px 0px;
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