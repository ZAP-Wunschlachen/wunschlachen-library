<template>
  <div>
    <div class="logo-container">
      <slot name="logo"></slot>
    </div>
    <p class="title">Patientenauswahl</p>
    <div class="flex items-center rounded-lg shadow-xl">
      <input
        v-model="inputRef"
        type="text"
        class="flex-grow px-4 py-2 bg-transparent outline-none"
        placeholder="Patientenname..."
      />
      <button class="p-2" disabled>
        <Icon name="material-symbols:search" size="24" />
      </button>
    </div>

    <div
      v-if="patients.length > 0"
      class="bg-white shadow-lg rounded-lg mt-2 w-full max-h-60 overflow-auto z-10"
    >
      <ul>
        <li
          v-for="patient in patients"
          :key="patient.id"
          @click="selectPatient(patient)"
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer"
        >
          {{ getFullName(patient) }}
        </li>
      </ul>
    </div>
    <div style="margin-top: 48px">
      <p style="text-align: center; margin-bottom: 8px">Neuer Patient?</p>
      <GenericButton
        :outlined="false"
        :plain="false"
        :disabled="false"
        label="Neuer Patient"
        @click="handleCreateNewPatient"
      >
        <template #label>
          <p class="choose-text">Patient Erstellen</p>
        </template>
      </GenericButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from "vue";

defineProps<{
  patients: any[];
}>();

const emit = defineEmits(["update-input", "select-patient", "create-patient"]);

const inputRef = ref<string>();

watch(inputRef, (newValue) => {
  emit("update-input", newValue);
});

const selectPatient = (patient: any) => {
  emit("select-patient", patient);
};

const handleCreateNewPatient = () => {
  emit("create-patient");
};

const getFullName = computed(() => (person: any) => {
  return `${person.first_name} ${person.last_name}`;
});

onUnmounted(() => {
  inputRef.value = "";
  emit("update-input", "");
});
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.title {
  text-align: center;
  color: var(--dental-blue-0);
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 25px;
}
</style>
