<template>
  <div
    class="flex border-2 w-full h-full pt-[144px] pb-[280px] px-0 items-center justify-center g-[8px]"
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
          <h2>Sind Sie bereits Patient?</h2>
          <span>Gewisse Terminarten sind nicht für Neupatienten verfügbar</span>
        </div>
      </div>

      <div
        class="flex border mx-auto rounded-[4px] h-[266px] max-w-[350px] p-[24px_20px] flex-col items-center gap-[24px] self-stretch"
      >
        <div class="flex flex-col gap-[32px] self-stretch">
          <span class="text-left px-[12px]"
            >Haben Sie einen Arzt oder Ärztin in dieser Einrichtung bereits
            besucht?</span
          >
          <div class="flex flex-col gap-[16px]">
            <GenericButton
              :outlined="true"
              :plain="false"
              :disabled="false"
              label="dsads"
            >
              <template #label> Ja </template>
            </GenericButton>

            <GenericButton
              :outlined="true"
              :plain="false"
              :disabled="false"
              label="dsads"
            >
              <template #label> Nein </template>
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
  console.log("item", item.value);
}
</script>
