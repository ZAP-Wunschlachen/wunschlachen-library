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
          <h2 class="text-center">Wählen Sie einen Standort</h2>
        </div>

        <div class="flex flex-col gap-[38px]">
          <div class="flex flex-col p-[24px] border-2 gap-[24px] rounded-lg">
            <div class="flex flex-row pt-0 pl-[7px] pr-[32px] gap-[32px]">
              <div>
                <DirectusImg :image="item.favicon" width="68px" height="68px" />
              </div>
              <div class="flex flex-col self-stretch gap-[8px]">
                <h4>Berlin - Reinickendorf</h4>
                <h4 style="font-weight: 300" class="text-light flex flex-col">
                  <span>Gotthardstr. 27</span>
                  <span>13407 Berlin</span>
                </h4>
              </div>
            </div>
            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
            >
              <template #label>
                <h4 class="text-white" style="font-weight: 300">Auswählen</h4>
              </template>
            </GenericButton>
          </div>

          <div class="flex flex-col p-[24px] border-2 gap-[24px]">
            <div class="flex flex-row pt-0 pl-[7px] pr-[32px] gap-[32px]">
              <div>
                <DirectusImg :image="item.favicon" width="68px" height="68px" />
              </div>
              <div class="flex flex-col self-stretch gap-[8px]">
                <h4>Berlin - Schöneberg</h4>
                <h4 style="font-weight: 300" class="text-light flex flex-col">
                  <span>Bayerischer Platz 7</span>
                  <span>10779 Berlin</span>
                </h4>
              </div>
            </div>
            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
            >
              <template #label>
                <h4 class="text-white" style="font-weight: 300">Auswählen</h4>
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
