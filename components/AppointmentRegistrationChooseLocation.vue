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

        <div v-for="location in locations" class="location-item">
          <div class="location-card">
            <div class="location-header">
              <div class="favicon-slot">
                <slot name="favicon"></slot>
              </div>
              <div class="location-details">
                <h4 class="location-name">{{ location.name }}</h4>
                <h4 class="location-address">
                  <span>{{ location.address }}</span>
                  <span>{{ location.postalCode }} {{ location.city }}</span>
                </h4>
              </div>
            </div>
            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
              @click="handleSelectLocation(location.id)"
            >
              <template #label>
                <h4 class="button-label">Auswählen</h4>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const handleSelectLocation = (location: number) => {
  alert(`Selected location is ${location}`);
};

const locations = ref([
  {
    id: 0,
    name: "Berlin - Reinickendorf",
    address: "Gotthardstr. 27",
    postalCode: "13407",
    city: "Berlin",
  },
  {
    id: 1,
    name: "Berlin - Schöneberg",
    address: "Bayerischer Platz 7",
    postalCode: "10779",
    city: "Berlin",
  },
]);
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
  text-align: center;
  color: var(--dental-blue-0);
  font-size: 24px;
  margin-bottom: 20px;
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
  border: 2px solid rgb(233, 233, 233);
  gap: 24px;
  width: 100%;
  min-height: 200px;
  flex-grow: 1;
  box-sizing: border-box;
  background-color: white;
}

.location-header {
  display: flex;
  flex-direction: row;
  padding: 0 32px 0 7px;
  gap: 32px;
  align-items: center;
}

.location-details {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
}

.location-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--dental-blue-0);
}

.location-address {
  font-weight: 300;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--dental-gray-0);
}

.button-label {
  font-weight: 300;
  color: white;
  font-size: 16px;
}

/* You might need to style the GenericButton component if it's not already styled */
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
