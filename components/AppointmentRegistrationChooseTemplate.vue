<template>
  <div
    class="flex border-2 w-full h-full pt-[144px] px-0 items-center justify-center g-[8px] overflow-hidden"
  >
    <div class="flex flex-col items-center gap-[62px]">
      <div>
        <template v-if="item && item.Logo">
          <DirectusImg :image="item.Logo" width="170px" height="170px" />
        </template>
        <template v-else>
          <p>Loading logo...</p>
        </template>
      </div>
      <div class="flex flex-col justify-center items-center self-stretch">
        <div
          class="flex flex-col text-center justify-center max-w-[400px] items-center gap-[10px]"
        >
          <h2>Wählen Sie die Terminart</h2>
          <span
            >Bestimmte Termine sind nur für bestehende Patienten verfügbar</span
          >
        </div>
      </div>

      <div
        class="flex border mx-auto rounded-[4px] max-h-[400px] scroll-auto overflow-y-scroll no-scrollbar scroll-smooth min-w-[350px] p-[24px_20px] flex-col items-center gap-[24px] self-stretch"
        @scroll="handleScroll"
        ref="scrollContainer"
      >
        <div class="flex flex-col w-full gap-[16px]">
          <GenericButton
            v-for="(item, index) in treatmentTemplates"
            :key="index"
            :outlined="true"
            :plain="false"
            :disabled="!isItemVisible(index)"
            class="generic-button"
          >
            <template #label> {{ item }} </template>
          </GenericButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { getSingletonItem } = useDirectusItems();
const item = ref(null);

const treatmentTemplates = ref([
  "Template 1",
  "Template 2",
  "Template 3",
  "Template 4",
  "Template 5",
  "Template 6",
  "Template 7",
  "Template 8",
  "Template 9",
  "Template 10",
  "Template 11",
  "Template 12",
]);

const visibleIndices = ref([0, 1, 2, 3]); // Initialize with the first 4 items
const scrollContainer = ref(null);

const handleScroll = () => {
  const container = scrollContainer.value;
  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  const items = container.querySelectorAll(".generic-button");
  const newVisibleIndices = [];

  items.forEach((item, index) => {
    const itemTop = item.offsetTop - container.offsetTop;
    const itemBottom = itemTop + item.clientHeight;

    if (itemTop < containerBottom && itemBottom > containerTop) {
      newVisibleIndices.push(index);
    }
  });

  // Keep only the first 4 visible indices
  visibleIndices.value = newVisibleIndices.slice(0, 4);
};

const isItemVisible = (index) => {
  return visibleIndices.value.includes(index);
};

onMounted(() => {
  // Ensure handleScroll runs after the component is mounted and layout is calculated
  setTimeout(handleScroll, 0);
  scrollContainer.value.addEventListener("scroll", handleScroll);
});

import { useIcons } from "@/composables/useIcons";
const { getDirectusIcon } = useIcons();

const emit = defineEmits(["update:modelValue", "input-error"]);

const { data: mailIcon } = await useAsyncData("mailIcon", async () => {
  return await getDirectusIcon("mail_icon");
});

const { data, error } = await useAsyncData("item", async () => {
  return await getSingletonItem({
    collection: "CMS",
    params: {
      fields: [
        "*,Logo.*,Logo.title,Logo.filename_download, favicon.id, favicon.filename_download,favicon.type",
      ],
    },
  });
});

if (error.value) {
  console.error("Error fetching item:", error.value);
} else {
  item.value = data.value;
}
</script>
