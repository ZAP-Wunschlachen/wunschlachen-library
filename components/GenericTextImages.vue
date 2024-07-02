<template>
  <div class="flex w-full flex-col items-start gap-[24px]">
    <div v-html="title"></div>
    <div
      class="flex sm:hidden items-start content-start gap-[48px] self-stretch"
    >
      <div class="flex flex-col gap-[24px]" :key="index">
        <div v-html="paragraphs"></div>

        <div v-if="images" class="flex gap-[10px]">
          <div
            v-for="(image, index) in images"
            :style="{
              borderRadius: '20px',
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 71.7%, rgba(0, 0, 0, 0.44) 100%), url(${generateImageUrl(
                image
              )}) lightgray 50% / cover no-repeat`,
              mixBlendMode: 'multiply',
            }"
            class="max-h-[296px] min-w-[120px] flex-1 min-h-[350px] p-4"
            alt="description"
          />
        </div>
      </div>
    </div>

    <div
      class="flex sm:flex-col items-start content-start gap-[24px] self-stretch md:hidden lg:hidden"
    >
      <div v-html="paragraphs"></div>

      <div
        v-if="images"
        v-for="(image, index) in images"
        :key="index"
        :style="{
          borderRadius: '20px',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 71.7%, rgba(0, 0, 0, 0.44) 100%), url(${generateImageUrl(
            image
          )}) lightgray 50% / cover no-repeat`,
          mixBlendMode: 'multiply',
        }"
        class="w-full min-w-[320px] flex-1 min-h-[350px] p-4"
        alt="description"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useGenerateImageUrl } from "@/composables/useGenerateImageUrl";

const props = defineProps({
  paragraphs: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const { generateImageUrl } = useGenerateImageUrl();
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
