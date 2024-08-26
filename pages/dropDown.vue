<template>
  <div class="w-full flex flex-col justify-center items-center space-y-4">
    <!-- Multiple Selection Dropdown -->
    <GenericDropDown
      class="mx-auto min-w-[300px]"
      :items="dropdownItems"
      v-model="selectedItemsMultiple"
      :multiple="true"
      :buttons="true"
      :buttonOptions="dropdownItems"
      @update:modelValue="handleMultipleSelectionUpdate"
    />

    <!-- Single Selection Dropdown -->
    <GenericDropDown
      class="mx-auto min-w-[300px]"
      :items="dropdownItems"
      v-model="selectedItemSingle"
      :multiple="false"
      :buttons="true"
      :buttonOptions="dropdownItems"
      @update:modelValue="handleSingleSelectionUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

// Dropdown items
const dropdownItems = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
  { label: "Option 6", value: 6 },
  { label: "Option 7", value: 7 },
];

// Selected items for the multiple selection dropdown
const selectedItemsMultiple = ref([{ label: "Option 2", value: 2 }]);

// Selected item for the single selection dropdown
const selectedItemSingle = ref({ label: "Option 1", value: 1 });

// Handling the update for multiple selection
const handleMultipleSelectionUpdate = (newValue) => {
  console.log("Multiple selection updated:", newValue);
  selectedItemsMultiple.value = newValue;
};

// Handling the update for single selection
const handleSingleSelectionUpdate = (newValue) => {
  console.log("Single selection updated:", newValue);
  selectedItemSingle.value = newValue;
};
</script>
