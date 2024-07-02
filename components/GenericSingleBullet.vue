<template>
  <div
    class="flex w-[369px] min-w-[300px] max-w-[400px] gap-[24px] pl-[50px] pr-[40px] items-center"
  >
    <div>
      <slot></slot>
    </div>

    <div
      v-if="header"
      class="flex flex-col justify-center items-start gap-[11px] flex-[1_0_0]"
    >
      <!-- <div
        class="text-[#172774] font-outfit text-[16px] not-italic font-bold leading-[19.2px]"
      >
        {{ header }}
      </div> -->

      <p>{{ header }}</p>

      <div
        class="text-[#172774] font-outfit text-[16px] not-italic font-normal leading-[19.2px]"
      >
        {{ text }}
      </div>
    </div>

    <div
      v-else
      class="text-[#172774] font-outfit text-[16px] font-normal leading-[120%]"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: false,
  },
});
</script>
