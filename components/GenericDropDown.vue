<template>
  <div
    class="relative inline-block"
    :style="{ width: dropdownWidth }"
    ref="dropdown"
  >
    <button
      @click="toggleDropdown"
      id="dropdownDefaultButton"
      :class="buttonClasses"
      type="button"
    >
      <span class="mr-auto">{{ selectedLabel }}</span>
      <svg
        class="w-2.5 h-2.5 ml-3 transition-transform duration-300"
        :class="{ 'rotate-180': isDropdownOpen }"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="var(--dental-blue-1)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li v-for="item in items" :key="item.value">
          <a
            href="#"
            @click.prevent="selectItem(item)"
            :class="{
              'border-l-4 border-[var(--dental-blue-0)]': isSelected(item),
              'block px-4 py-2 hover:bg-[var(--soft-concrete-1)] dark:hover:bg-gray-600 dark:hover:text-white': true,
            }"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  defaultSelected: {
    type: [Object, Array],
    default: () => ({ label: "Select an option", value: null }),
  },
  width: {
    type: String,
    default: "auto",
  },
  multiple: {
    type: Boolean,
    default: true,
  },
});

// Define emits
const emit = defineEmits(["update:selected"]);

// State management
const isDropdownOpen = ref(false);
const selectedItem = ref(props.defaultSelected);
const dropdown = ref(null);

// Computed property for selected label
const selectedLabel = computed(() => {
  if (props.multiple && Array.isArray(selectedItem.value)) {
    return selectedItem.value.length > 0
      ? selectedItem.value.map((item) => item.label).join(", ")
      : "Select options";
  }
  return selectedItem.value.label;
});

// Methods
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectItem(item) {
  if (props.multiple) {
    if (Array.isArray(selectedItem.value)) {
      const index = selectedItem.value.findIndex((i) => i.value === item.value);
      if (index === -1) {
        selectedItem.value.push(item);
      } else {
        selectedItem.value.splice(index, 1);
      }
    } else {
      selectedItem.value = [item];
    }
  } else {
    selectedItem.value = item;
    isDropdownOpen.value = false;
  }
  emit("update:selected", selectedItem.value);
}

function isSelected(item) {
  if (props.multiple && Array.isArray(selectedItem.value)) {
    return selectedItem.value.some((i) => i.value === item.value);
  }
  return selectedItem.value.value === item.value;
}

// Computed property for dropdown width
const dropdownWidth = computed(() => props.width);

// Computed property for button classes
const buttonClasses = computed(() => {
  return {
    "bg-white text-[var(--dental-blue--3)] border-2 ring-blue-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full":
      !selectedItem.value.value &&
      (!Array.isArray(selectedItem.value) || selectedItem.value.length === 0),
    "bg-white text-[var(--dental-blue-1)] border-2 ring-blue-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full":
      selectedItem.value.value ||
      (Array.isArray(selectedItem.value) && selectedItem.value.length > 0),
  };
});

// Close dropdown on outside click
function handleClickOutside(event) {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Add any custom styles here if necessary */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
