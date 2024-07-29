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
              <h3>Termin vereinbaren</h3>
              <h4 class="subtitle">Frau Steltenkamp | Zahnärztin</h4>
            </div>
          </div>
        </div>

        <div class="accordion-section">
          <div class="accordion-container">
            <div class="back-button">
              <div>
                <slot name="arrow-left"></slot>
              </div>
              <h3>Zurück</h3>
            </div>

            <div class="divider"></div>

            <p class="p-large accordion-paragraph">
              Wählen Sie das für Sie passende Datum für den Termin
            </p>

            <div class="accordion-content">
              <GenericAccordion
                v-for="(item, index) in availableTimes"
                :key="index"
                :is-first="index === 0"
                :is-last="index === availableTimes.length - 1"
                :is-open="index === activeAccordionIndex"
                @toggle="handleToggle(index)"
              >
                <template #title>
                  <h3>{{ item.day }}</h3>
                </template>
                <template v-if="item.day" #content>
                  <div class="grid-container">
                    <GenericButton
                      v-for="(button, btnIndex) in item.slots"
                      :key="btnIndex"
                      :outliend="false"
                      :disabled="false"
                      class="appointment-button"
                    >
                      <template #label>
                        <p class="">
                          {{ button }}
                        </p>
                      </template>
                    </GenericButton>
                  </div>
                </template>
              </GenericAccordion>
            </div>

            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
              class="select-button"
            >
              <template #label>
                <h4 class="select-button-text">Weitere Termine anzeigen</h4>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";
import type { AvailableTime, Appointment } from "../types/types";

const props = defineProps({
  availableAppointments: Array as PropType<Appointment[]>,
  availableTimes: {
    type: Array as PropType<AvailableTime[]>,
    required: true,
  },
});

const activeAccordionIndex = ref<number | null>(null);

const handleToggle = (index: number) => {
  activeAccordionIndex.value =
    activeAccordionIndex.value === index ? null : index;
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding-top: 144px;
  padding-bottom: 280px;
  padding-left: 0;
  padding-right: 0;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--dental-light-blue-3);
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
  gap: 25px;
  align-items: center;
}

.divider {
  width: 100%;
  height: 2px;
  background-color: #333;
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
  gap: 4px;
  overflow-y: auto;
  max-height: 250px;
}

.appointment-button {
  max-width: 80px;
  border-radius: 8px;
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
  width: 5px; /* Adjust the width to the desired spacing */
}
</style>
