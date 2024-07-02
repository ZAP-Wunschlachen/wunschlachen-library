<template>
  <div
    :class="[
      'accordion',
      { 'border-t-none': isLast },
      { 'border-b-none': isFirst },
    ]"
  >
    <div
      class="rounded-sm border-t-dental-blue-0 border-b-dental-blue-0 border-l-0 border-r-0"
    >
      <div>
        <button
          type="button"
          class="flex items-center justify-between w-full py-[24px] font-medium text-dental-blue-0 focus:outline-none hover:dental-blue--4 gap-[24px]"
          @click="toggleAccordion"
          :aria-expanded="isOpen"
          aria-controls="accordion-body"
        >
          <span> <slot name="title"></slot></span>
          <svg
            :class="isOpen ? 'rotate-180' : ''"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="25"
            viewBox="0 0 24 25"
          >
            <path
              d="M4.5 16.25L12 8.75L19.5 16.25"
              stroke="#172774"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        id="accordion-body"
        :class="isOpen ? '' : 'hidden'"
        aria-labelledby="accordion-heading"
      >
        <div class="pb-[24px] pt-[0px]">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

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
button:focus {
  outline: none;
}
</style>
