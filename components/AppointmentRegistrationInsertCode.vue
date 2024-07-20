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
      <div
        class="flex flex-col justify-center items-center gap-[40px] self-stretch"
      >
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-center">
            Bitte den per E-Mail gesendeten Code eingeben
          </h2>
        </div>

        <GenericOtpInput />
      </div>
      <GenericButton
        :outlined="false"
        :plain="false"
        class="max-w-[290px]"
        :disabled="false"
        label="dsads"
      >
        <template #label> Eingloggen </template>
      </GenericButton>
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
