<template>
  <div class="flex w-full px-4 flex-col items-start gap-[26px]">
    <div
      class="text-[25px] font-bold leading-[30px] tracking-[-0.5px] text-dental-blue"
      v-html="title"
    ></div>

    <div
      class="flex sm:hidden items-start content-start gap-[48px] self-stretch"
    >
      <div class="flex flex-row gap-[24px]">
        <template v-if="isParagraphFirst">
          <div
            class="custom-list max-w-[50%] text-dental-blue min-h-[350px]"
            v-html="paragraph"
          ></div>
          <div
            v-if="image && image.filename_download"
            :style="{
              borderRadius: '20px',
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 71.7%, rgba(0, 0, 0, 0.44) 100%), url(${generateImageUrl(
                image
              )}) lightgray 50% / cover no-repeat`,
              mixBlendMode: 'multiply',
            }"
            class="max-h-[296px] min-w-[320px] flex-1 min-h-[350px] p-4"
            alt="description"
          ></div>
        </template>

        <template v-else>
          <div
            v-if="image && image.filename_download"
            :style="{
              borderRadius: '20px',
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 71.7%, rgba(0, 0, 0, 0.44) 100%), url(${generateImageUrl(
                image
              )}) lightgray 50% / cover no-repeat`,
              mixBlendMode: 'multiply',
            }"
            class="max-h-[296px] min-w-[320px] flex-1 min-h-[350px] p-4"
            alt="description"
          ></div>
          <div
            class="custom-list text-[16px] font-normal leading-[19.2px] max-w-[50%] text-dental-blue min-h-[350px]"
            v-html="paragraph"
          ></div>
        </template>
      </div>
    </div>

    <div
      class="flex sm:flex-col items-start content-start gap-[24px] self-stretch md:hidden lg:hidden"
    >
      <div
        class="custom-list text-[16px] font-normal leading-[19.2px] text-dental-blue"
        v-html="paragraph"
      ></div>
      <div
        v-if="image && image.filename_download"
        :style="{
          borderRadius: '20px',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 71.7%, rgba(0, 0, 0, 0.44) 100%), url(${generateImageUrl(
            image
          )}) lightgray 50% / cover no-repeat`,
          mixBlendMode: 'multiply',
        }"
        class="w-full min-w-[320px] flex-1 min-h-[350px] p-4"
        alt="description"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useGenerateImageUrl } from "@/composables/useGenerateImageUrl";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  isParagraphFirst: {
    type: Boolean,
    default: true,
  },
});

const { generateImageUrl } = useGenerateImageUrl();
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
