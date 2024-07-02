<template>
  <div class="flex flex-col gap-[56px]">
    <div v-html="title" class="mx-auto"></div>
    <carousel
      class="mx-auto w-full max-w-[1000px]"
      :items-to-show="itemsToShow"
      :items-to-scroll="1"
      :transition="500"
      :wrap-around="true"
      @slide-end="handleSlideEnd"
    >
      <slide v-for="(image, index) in items" :key="index">
        <div class="flex flex-col gap-[32px]">
          <div
            class="flex flex-col w-[317px] h-72 items-start gap-[29px] px-2 py-4 relative bg-[#ffffff] rounded-[15px] overflow-hidden"
          >
            <svg
              class="absolute w-[317px] h-[225px] top-[63px] left-0"
              xmlns="http://www.w3.org/2000/svg"
              width="317"
              height="225"
              viewBox="0 0 317 225"
              fill="none"
            >
              <path
                d="M1125 966.5C1125 1500.28 692.283 1933 158.5 1933C-375.283 1933 -808 1500.28 -808 966.5C-808 432.717 -375.283 0 158.5 0C692.283 0 1125 432.717 1125 966.5Z"
                fill="#E4F2FB"
              />
            </svg>

            <div
              class="flex flex-col h-[242px] items-center gap-4 relative self-stretch w-full"
            >
              <div
                class="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div
                  class="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <div v-html="image.title"></div>
                  <img
                    v-if="image"
                    :style="
                      !testimonial
                        ? { width: '195px', height: '153px' }
                        : { width: '80px', height: '80px' }
                    "
                    class="relative w-20 h-20 object-cover"
                    :src="generateSimpleImageUrl(image.src)"
                  />
                  <!--  <p
                    v-if="testimonial"
                    class="text-[var(--Dental-Blue-0,#172774)] text-center font-outfit text-base font-bold leading-[120%]"
                  >
                    {{ image.title }}
                  </p> -->
                </div>
                <div
                  v-if="testimonial"
                  class="h-[19px] whitespace-nowrap relative w-[265px] font-mobile-p-large font-[number:var(--mobile-p-large-font-weight)] text-dental-blue0 text-[length:var(--mobile-p-large-font-size)] text-center tracking-[var(--mobile-p-large-letter-spacing)] leading-[var(--mobile-p-large-line-height)] [font-style:var(--mobile-p-large-font-style)]"
                >
                  {{ image.nursingHome }}
                </div>
              </div>
              <div v-html="image.comment"></div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>

    <div class="flex justify-center items-start gap-1 self-stretch">
      <div
        v-for="index in props.items.length"
        :key="index"
        :class="[
          'h-[8px] rounded-[53px]',
          isActive(index - 1)
            ? 'w-[28px] bg-soft-concrete-3'
            : 'w-[8px] bg-soft-concrete-1',
        ]"
      ></div>
    </div>

    <div v-html="paragraph" class="mx-auto"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGenerateImageUrl } from "@/composables/useGenerateImageUrl";
const { generateSimpleImageUrl } = useGenerateImageUrl();

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "title",
  },
  paragraph: {
    type: String,
    required: false,
    default: "paragraph",
  },
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  testimonial: {
    type: Boolean,
    default: false,
  },
});

const itemsToShow = ref(3);
const currentSlide = ref(0);

const updateItemsToShow = () => {
  if (window.innerWidth < 744) {
    itemsToShow.value = 1;
  } else if (window.innerWidth < 1000) {
    itemsToShow.value = 2;
  } else {
    itemsToShow.value = 3;
  }
};

onMounted(() => {
  console.log("items", props.items);
  window.addEventListener("resize", updateItemsToShow);
  updateItemsToShow();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsToShow);
});

const handleSlideEnd = (newSlide) => {
  currentSlide.value = newSlide.currentSlideIndex;
};

const isActive = (index) => {
  return index === currentSlide.value;
};
</script>

<style scoped>
.carousel-image {
}
</style>
