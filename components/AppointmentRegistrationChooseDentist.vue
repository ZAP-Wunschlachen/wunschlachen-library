<template>
  <div class="container">
    <div class="content-wrapper">
      <div>
        <slot name="logo"></slot>
      </div>
      <div class="location-selection">
        <div class="header">
          <h2 class="text-center">Wählen Sie einen Zahnarzt</h2>
        </div>

        <div class="locations">
          <div
            v-for="(dentist, index) in dentistArray"
            :key="index"
            class="location-card"
          >
            <div class="location-header">
              <div>
                <slot name="favicon" :image="dentist.favicon"></slot>
              </div>
              <div class="location-details">
                <h4>{{ dentist.name }}</h4>
                <h4 class="text-light">{{ dentist.type }}</h4>
              </div>
            </div>

            <div class="appointment-info">
              <h4>Nächst mögliche Termine:</h4>
              <div class="appointment-dates">
                <GenericButton
                  v-for="(date, dateIndex) in dentist.appointmentDates"
                  :key="dateIndex"
                  :plain="false"
                  :disabled="false"
                  class="appointment-button"
                >
                  <template #label>
                    <h4>{{ date }}</h4>
                  </template>
                </GenericButton>
              </div>
            </div>

            <GenericButton :outlined="false" :plain="false" :disabled="false">
              <template #label>
                <h4 class="button-text">Auswählen</h4>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dentistArray: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  border: 2px solid;
  width: 100%;
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

.button-text {
  color: white;
  font-weight: 300;
}
</style>
