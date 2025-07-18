<template>
  <div
    class="dropdown"
    :class="{ 'dropdown-error': error, 'dropdown-disabled': disabled }"
    style="width: 100%"
    ref="dropdown"
  >
    <slot name="label"></slot>
    <button
      @click="toggleDropdown"
      id="dropdownDefaultButton"
      :class="[buttonClasses, { 'dropdown-button-error': error, 'dropdown-button-disabled': disabled }]"
      type="button"
      :disabled="disabled"
    >
      <div class="mr-auto">
        <template v-if="props.multiple && selectedLabel.length > 0">
          <div class="grid grid-cols-3 gap-2">
            <GenericButton
              v-for="(item, index) in selectedLabel"
              :key="index"
              class="px-2 no-wrap mx-1 appointment-button"
            >
              <template #label>
                <div class="text-container">
                  <p class="large">{{ item }}</p>
                </div>
              </template>
            </GenericButton>
          </div>
        </template>
        <span
          class="default-label"
          v-else-if="!props.multiple && selectedLabel.length > 0"
        >
          {{ selectedLabel[0] }}
        </span>
        <span class="default-label" v-else>{{ defaultLabel }}</span>
      </div>

      <svg
        class="dropdown-icon"
        :class="{ 'rotate-180': isDropdownOpen }"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 6L8 11L3 6"
          stroke="#172774"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div v-if="isDropdownOpen && !disabled" class="dropdown-menu">
      <ul class="dropdown-list" aria-labelledby="dropdownDefaultButton">
        <li v-for="item in items" :key="item.value">
          <a
            href="#"
            @click.prevent="selectItem(item)"
            :class="{ 'dropdown-item-selected': isSelected(item) }"
            class="dropdown-item"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { defineProps, defineEmits } from "vue";

// Define props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [Object, Array],
    default: () => [],
  },
  width: {
    type: String,
    default: "auto",
  },
  label: {
    type: String,
    default: "",
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  defaultLabel: {
    type: String,
    default: "Choose options",
  },
  error: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false, // Existing prop for disabled state
  },
});

// Define emits
const emit = defineEmits(["update:modelValue"]);

// State management
const isDropdownOpen = ref(false);
const selectedItem = ref(
  Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
);
const dropdown = ref<HTMLElement | null>(null);

// Watch modelValue for external changes
watch(
  () => props.modelValue,
  (newValue) => {
    selectedItem.value = Array.isArray(newValue) ? newValue : [newValue];
  }
);

// Computed property for selected label
const selectedLabel = computed(() => {
  if (props.multiple && Array.isArray(selectedItem.value)) {
    return selectedItem.value.length > 0
      ? selectedItem.value.map((item) => item.label)
      : [];
  }
  return selectedItem.value.length > 0 ? [selectedItem.value[0].label] : [];
});

// Methods
function toggleDropdown() {
  if (!props.disabled) {
    isDropdownOpen.value = !isDropdownOpen.value;
  }
}

function selectItem(item: { label: string; value: any }) {
  if (props.multiple) {
    const index = selectedItem.value.findIndex((i) => i.value === item.value);
    if (index === -1) {
      selectedItem.value.push(item);
    } else {
      selectedItem.value.splice(index, 1);
    }
  } else {
    selectedItem.value = [item];
    isDropdownOpen.value = false;
  }
  emit(
    "update:modelValue",
    props.multiple ? selectedItem.value : selectedItem.value[0]
  );
}

function isSelected(item: { value: any }) {
  if (props.multiple && Array.isArray(selectedItem.value)) {
    return selectedItem.value.some((i) => i.value === item.value);
  }
  return selectedItem.value[0]?.value === item.value;
}

// Computed property for dropdown width
const dropdownWidth = computed(() => props.width);

// Computed property for button classes
const buttonClasses = computed(() => {
  return selectedItem.value.length > 0
    ? "dropdown-button-active"
    : "dropdown-button";
});

// Close dropdown on outside click
function handleClickOutside(event: MouseEvent) {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
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
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-error {
  background-color: #ffe5e5; /* Light red background */
}

.dropdown-disabled {
  opacity: 0.5; /* Greyed-out appearance */
  pointer-events: none; /* Disable interactions */
}

.dropdown-button,
.dropdown-button-active {
  background-color: white;
  color: var(--dental-blue--3);
  border: 2px solid;
  border-radius: 0.375rem;
  padding: 0.625rem 1.25rem;
  text-align: center;
  display: inline-flex;
  align-items: center;
  width: 100%;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-button-error {
  background-color: #ffe5e5; /* Light red background */
  color: #d32f2f; /* Dark red text color */
  border-color: #d32f2f; /* Dark red border */
}

.dropdown-button-disabled {
  background-color: #f5f5f5; /* Light grey background */
  color: #a0a0a0; /* Grey text color */
  border-color: #dcdcdc; /* Grey border */
  cursor: not-allowed; /* Disabled cursor */
}

.dropdown-button:hover,
.dropdown-button-active:hover {
  background-color: var(--dental-blue-minus-6);
}

.dropdown-button-error:hover {
  background-color: #ffcccc; /* Slightly darker red on hover */
}

.dropdown-button:focus,
.dropdown-button-active:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(66, 153, 225, 0.5);
}

.dropdown-button-active {
  color: var(--dental-blue-1);
}

.dropdown-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.75rem;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.rotate-180 {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  right: 0;
  z-index: 10;
  margin-top: 0.5rem;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.dropdown-list {
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: var(--dental-blue--3);
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: var(--soft-concrete-1);
}

.dropdown-item-selected {
  border-left: 4px solid var(--dental-blue-0);
  background-color: var(--soft-concrete-1);
}

.appointment-button {
  border-radius: 4px;
  max-height: 25px;
  background-color: var(--dental-light-blue-0);
  color: var(--dental-blue-0);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 4px 8px;
  /* Provide adequate padding */
}

.default-label {
  padding: 3px;
}

.text-container {
  width: 100%;
  /* Ensure it takes the full width of the container */
  overflow: hidden;
  /* Hide any overflowing content */
}

.no-wrap {
  white-space: nowrap;
  /* Prevent text from wrapping */
  overflow: hidden;
  /* Hide the overflow text */
  text-overflow: ellipsis;
  /* Add ellipsis (...) to the end of the text */
  display: inline-block;
  /* Ensure it acts as an inline block to respect container width */
  max-width: 100%;
  /* Constrain the text to the container width */
}
p.large{
  font-size: 14px;
}
</style>
