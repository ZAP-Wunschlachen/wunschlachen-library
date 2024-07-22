<template>
  <div
    class="flex border-2 w-full h-full pt-[144px] pb-[280px] px-0 items-center justify-center g-[8px]"
  >
    <div class="flex flex-col items-center gap-[48px]">
      <div>
        <template v-if="item && item.Logo">
          <DirectusImg :image="item.Logo" width="170px" height="170px" />
        </template>
        <template v-else>
          <p>Loading logo...</p>
        </template>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-[61px] self-stretch"
      >
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-row pt-0 pl-[7px] pr-[32px] gap-[32px]">
            <div>
              <DirectusImg :image="item.favicon" width="52px" height="52px" />
            </div>
            <div class="flex flex-col self-stretch gap-[8px]">
              <h3>Termin vereinbaren</h3>
              <h4
                style="font-weight: 300"
                class="text-light pl-6 flex flex-col"
              >
                Frau Steltenkamp | Zahnärztin
              </h4>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-[38px]">
          <div
            class="flex min-w-[350px] flex-col p-[24px] border-2 gap-[24px] rounded-lg"
          >
            <div class="flex flex-row gap-[25px] items-center">
              <div>
                <div v-if="arrowLeft">
                  <span v-html="arrowLeft"></span>
                </div>
              </div>
              <h4>Zurück</h4>
            </div>

            <div class="w-full h-[2px] flex-shrink-0 bg-gray-800"></div>

            <h4>Wählen Sie das für Sie passende Datum für den Termin</h4>

            <div class="flex gap-[0] flex-col">
              <GenericAccordion
                v-for="(item, index) in accordionArray"
                :is-first="index === 0"
                :is-last="index === accordionArray.length - 1"
              >
                <template #title>
                  <div class="font-bold">{{ item.title }}</div>
                </template>
                <template
                  v-if="item.content && item.content.length > 0"
                  #content
                >
                  <div class="grid grid-cols-3 gap-4">
                    <GenericButton
                      v-for="button in item.content"
                      :plain="false"
                      :disabled="false"
                      class="max-w-[60px] rounded-xl bg-dental-light-blue-0"
                    >
                      <template #label>
                        <h3 class="text-dental-blue-0">{{ button }}</h3>
                      </template>
                    </GenericButton>
                  </div>
                </template>
              </GenericAccordion>
            </div>

            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
            >
              <template #label>
                <h4 class="text-white" style="font-weight: 300">
                  Weitere Termine anzeigen
                </h4>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { getSingletonItem } = useDirectusItems();
const item = ref(null);

import { useIcons } from "@/composables/useIcons";
const { getDirectusIcon } = useIcons();

const emit = defineEmits(["update:modelValue", "input-error"]);

const { data: arrowLeft } = await useAsyncData("arrowLeft", async () => {
  return await getDirectusIcon("arrow_left");
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

const accordionArray = [
  {
    title: "Montag, 11. Juli",
    content: ["9:30", "11:45", "16:15"],
  },
  {
    title: "Dienstag, 12. Juli",
    content: ["9:30", "11:45", "16:15"],
  },
  {
    title: "Dienstag, 13. Juli",
    content: [
      "9:30",
      "11:45",
      "16:15",
      "9:30",
      "11:45",
      "16:15",
      "9:30",
      "11:45",
      "16:15",
      "9:30",
      "11:45",
    ],
  },
];

if (error.value) {
  console.error("Error fetching item:", error.value);
} else {
  item.value = data.value;
  console.log("item", item.value);
}
</script>

<style>
.h4-with-space::before {
  content: "";
  display: inline-block;
  width: 5px; /* Adjust the width to the desired spacing */
}
</style>
