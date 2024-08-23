<template>
  <div class="w-full flex justify-center items-center">
    <GenericDropDown
      class="mx-auto"
      :items="dropdownItems"
      :defaultSelected="defaultSelected"
      :multiple="true"
      :buttons="true"
      :buttonOptions="dropdownItems"
      @update:selected="handleSelection"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Dropdown items
const dropdownItems = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
];

// Default selected item(s)
const defaultSelected = ref([{ label: "Option 2", value: 2 }]);

// Selected items
const selectedItems = ref([]);

// Handle selection update
const handleSelection = (items: any) => {
  selectedItems.value = items;
};
</script>
