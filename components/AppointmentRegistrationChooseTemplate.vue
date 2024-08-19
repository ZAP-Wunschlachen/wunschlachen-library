<template>
  <div class="appointment-selector">
    <div class="content">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="header" style="color: var(--dental-blue-0)">
        <h2 style="font-weight: bold; font-size: 25px">
          Wählen Sie die Terminart
        </h2>
        <span
          >Bestimmte Termine sind nur für bestehende Patienten verfügbar</span
        >
      </div>

      <div class="button-container">
        <div class="button-wrapper">
          <GenericButton
            v-for="(item, index) in treatmentTemplates"
            :key="index"
            :outlined="true"
            :disabled="buttonsDisabled"
            :plain="true"
            class="generic-button"
            @click="handleSelect(item)"
          >
            <template #label>{{ item.name }}</template>
          </GenericButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { TreatmentTemplate } from "../types/types";

const emit = defineEmits(["select"]);
const buttonsDisabled = ref(false);
defineProps({
  treatmentTemplates: {
    type: Array as PropType<TreatmentTemplate[]>,
    required: true,
  },
});

const handleSelect = (item: TreatmentTemplate) => {
  buttonsDisabled.value = true;
  emit("select", item);
};
</script>

<style scoped>
.appointment-selector {
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
  background-color: var(--dental-light-blue-3);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}

.header h2 {
  text-align: center;
}

.header span {
  text-align: center;
  max-width: 400px;
}

.button-container {
  display: flex;
  border: 1px solid;
  margin: 0 auto;
  border-radius: 8px;
  max-height: 400px;
  overflow-y: scroll;
  min-width: 350px;
  padding: 24px 20px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  scroll-behavior: smooth;
  background: white;
  border: 1px solid var(--soft-concrete-1);
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
}

.generic-button {
  width: 100%;
}

/* Hide scrollbar */
.button-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.button-container::-webkit-scrollbar {
  display: none;
}
</style>
