<template>
  <div
    :class="[
      'accordion',
      { 'border-t-none': isLast, 'border-b-none': isFirst },
    ]"
  >
    <div class="accordion-container">
      <div>
        <button
          type="button"
          class="accordion-button"
          @click="toggleAccordion"
          :aria-expanded="isOpen"
          aria-controls="accordion-body"
        >
          <span><slot name="title"></slot></span>
          <span :class="isOpen ? 'icon-rotate' : 'icon'">
            <slot name="icon"></slot>
          </span>
        </button>
      </div>
      <div
        id="accordion-body"
        :class="isOpen ? 'accordion-body-open' : 'accordion-body-closed'"
        aria-labelledby="accordion-heading"
      >
        <div class="accordion-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const slots = useSlots();
const hasContenteSlot = ref(!!slots.title);

const props = defineProps({
  isFirst: {
    type: Boolean,
    default: false,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
});

const isOpen = ref(false);

const toggleAccordion = () => {
  console.log("hasContenteSlot", hasContenteSlot.value);
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.accordion {
  border: 2px solid var(--dental-blue-0);
  border-left: none;
  border-right: none;
}

.border-t-none {
  border-top: none;
}

.border-b-none {
  border-bottom: none;
}

.accordion-container {
  border-top: 2px solid var(--dental-blue-0);
  border-bottom: 2px solid var(--dental-blue-0);
  border-left: 0;
  border-right: 0;
  border-radius: 0.125rem; /* rounded-sm */
}

.accordion-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500; /* medium */
  color: var(--dental-blue-0);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  gap: 24px;
  transition: background-color 0.3s ease;
}

.accordion-button:hover {
  background-color: var(--dental-blue-minus-6);
}

.icon {
  transition: transform 0.5s ease-in-out;
}

.icon-rotate {
  transform: rotate(180deg);
  transition: transform 0.5s ease-in-out;
}

.accordion-body-open {
  max-height: 1000px;
  transition: max-height 0.5s ease-in-out;
}

.accordion-body-closed {
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
  overflow: hidden;
}

.accordion-content {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
