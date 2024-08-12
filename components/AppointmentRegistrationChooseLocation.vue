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

        <div v-for="dataObject in data" class="location-item">
          <div class="location-card">
            <div class="location-header">
              <div class="favicon-slot">
                <slot name="favicon"></slot>
              </div>
              <div class="location-details">
                <h3 class="location-title">
                  {{ dataObject.location.city }} -
                  {{ dataObject.location.district }}
                </h3>

                <div class="paragraph-container">
                  <p class="p-large">
                    <!-- <span>{{ location.postalCode }} {{ location.city }}</span> -->

                    {{ dataObject.location.street }}
                    {{ dataObject.location.street_number }}, {{}}
                  </p>
                  <p class="p-large">
                    <!-- <span>{{ location.postalCode }} {{ location.city }}</span> -->

                    {{ dataObject.location.zip_code }}
                    {{ dataObject.location.city }}
                  </p>
                </div>
              </div>
            </div>
            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
              @click="handleSelectLocation(dataObject)"
            >
              <template #label>
                <p class="choose-text">Auswählen</p>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from "vue";
import { Location } from "../types/types";

const emit = defineEmits(["select"]);

const props = defineProps({
  // locations: {
  //   type: Array as PropType<Location[]>,
  //   required: false,
  // },
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
});

const data = ref(props.data);

const handleSelectLocation = (data: any) => {
  emit("select", data);
};

// watch(
//   () => props.data,
//   (newData) => {
//     console.log(data.value, "data.value");
//     data.value = newData;
//   }
// );

// const locations = ref([
//   {
//     id: 0,
//     name: "Berlin - Reinickendorf",
//     address: "Gotthardstr. 27",
//     postalCode: "13407",
//     city: "Berlin",
//   },
//   {
//     id: 1,
//     name: "Berlin - Schöneberg",
//     address: "Bayerischer Platz 7",
//     postalCode: "10779",
//     city: "Berlin",
//   },
// ]);
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

  flex-grow: 1;
  box-sizing: border-box;
  background-color: white;

  border-radius: 8px;
  border: 1px solid var(--soft-concrete-1, #dddddf);
  background: #fff;
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

.button-label {
  font-weight: 300;
  color: white;
  font-size: 16px;
}

.paragraph-container {
  color: var(--Dental-Blue-0, #172774);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
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
