<template>
  <div class="location-container">
    <div class="location-content">
      <div class="logo-slot">
        <slot name="logo"></slot>
      </div>
      <div class="location-selection">
        <div class="title-container">
          <h2 class="title">Wählen Sie einen Standort</h2>
        </div>

        <div
          v-for="(dataObject, index) in data"
          :key="dataObject.id"
          class="location-item"
        >
          <div class="location-card">
            <div class="location-header">
              <div class="location-logo">
                <slot name="location-logo"></slot>
              </div>
              <div class="location-details">
                <h3 class="location-title">
                  {{ dataObject.location.city }} -
                  {{ dataObject.location.district }}
                </h3>

                <div class="paragraph-container">
                  <p class="p-large">
                    {{ dataObject.location.street }}
                    {{ dataObject.location.street_number }},
                  </p>
                  <p class="p-large">
                    {{ dataObject.location.zip_code }}
                    {{ dataObject.location.city }}
                  </p>
                </div>
              </div>
            </div>
            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="dataObject.disabled"
              :sending="dataObject.sending"
              label="Auswählen"
              @click="handleSelectLocation(index)"
            >
              <template #label>
                <p class="p-large">Auswählen</p>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";

const emit = defineEmits(["select"]);

const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
});

// Track state of each location item
const data = ref(
  props.data.map((item) => ({
    ...item,
    sending: false,
    disabled: false,
  }))
);

const handleSelectLocation = (index: number) => {
  const selectedLocation = data.value[index];

  // Set the button to sending and disable it
  selectedLocation.sending = true;
  selectedLocation.disabled = true;

  // Emit the event with the selected data
  emit("select", selectedLocation);

  // Simulate an async operation (e.g., an API call)
  setTimeout(() => {
    // After the operation completes, stop the sending state
    selectedLocation.sending = false;
  }, 2000);
};
</script>

<style scoped>
.location-container {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 144px 0 280px;
  align-items: center;
  justify-content: center;
  background-color: var(--dental-light-blue-3);
}

.location-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  max-width: 600px; /* Limit the maximum width if desired */
}

.logo-slot {
  /* Add any specific styles for the logo slot if needed */
}

.location-title {
  color: var(--Dental-Blue-0, #172774);
  font-size: 18px;
  font-weight: 700;
}

.location-selection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 61px;
  width: 100%;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title {
  color: var(--Dental-Blue-0, #172774);
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.5px;
}

.choose-text {
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
}

.location-item {
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
}

.location-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--soft-concrete-1, #dddddf);
  background: #fff;
}

.location-header {
  display: flex;
  align-items: center;
  gap: 16px; /* Adjust the gap as needed */
}

.location-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-details {
  display: flex;
  flex-direction: column;
}

.paragraph-container {
  color: var(--Dental-Blue-0, #172774);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
}

:deep(.generic-button) {
  width: 100%;
  padding: 12px;
  background-color: var(--dental-blue-0);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

:deep(.generic-button:hover) {
  background-color: var(--dental-blue-1);
}
</style>
