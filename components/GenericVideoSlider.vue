<template>
  <div class="flex flex-col max-w-[1120px] gap-[24px]">
    <div
      class="mx-auto flex flex-col gap-[56px] max-w-[750px] items-center"
      v-html="text"
    ></div>

    <carousel
      class="mx-auto max-w-[1120px]"
      :items-to-show="itemsToShow"
      :items-to-scroll="1"
      :wrap-around="true"
      :transition="500"
      @slide-end="handleSlideEnd"
    >
      <slide v-for="(video, index) in videos" :key="index">
        <video
          :style="{
            borderRadius: '8px',
            objectFit: 'cover', // or 'contain', 'fill', 'none', 'scale-down'
          }"
          :class="{
            'opacity-100 h-[635px] w-[406px] sm:h-[357px] sm:w-[200px] ':
              isActive(index),
            'opacity-60 h-[533px] w-[359px] sm:h-[299px] sm:w-[168px]':
              !isActive(index),
            'rounded-lg object-cover': true,
          }"
          controls
          preload="none"
          :poster="video.poster"
        >
          <source :src="video.src" :type="video.type" />
        </video>
      </slide>
    </carousel>
    <div class="flex justify-center items-start gap-1 self-stretch">
      <div
        v-for="index in videos.length"
        :key="index"
        :class="[
          'h-[8px] rounded-[53px]',
          isActive(index - 1)
            ? 'w-[28px] bg-soft-concrete-3'
            : 'w-[8px] bg-soft-concrete-1',
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentSlide = ref(0);
const itemsToShow = ref(3);

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  videos: {
    type: Array,
    requied: true,
  },
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsToShow);
});

onMounted(() => {
  // Generate random video URLs for demonstration
  window.addEventListener("resize", updateItemsToShow);
  updateItemsToShow();
});

const updateItemsToShow = () => {
  if (window.innerWidth < 744) {
    itemsToShow.value = 2;
  } else if (window.innerWidth < 1000) {
    itemsToShow.value = 2;
  } else {
    itemsToShow.value = 3;
  }
};

const handleSlideEnd = (newSlide) => {
  currentSlide.value = newSlide.currentSlideIndex;
};

const isActive = (index) => {
  return index === currentSlide.value;
};
</script>

<style scoped>
video {
  transition: all 0.3s ease-in-out;
}
</style>
