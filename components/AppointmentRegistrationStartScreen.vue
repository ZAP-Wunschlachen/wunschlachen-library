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
      <div class="flex flex-col items-center gap-[32px] self-stretch">
        <h2>Registrieren Sie sich oder loggen Sie sich ein</h2>
      </div>
      <div class="flex flex-col items-center gap-[32px] self-stretch">
        <div class="flex flex-col items-center gap-[16px] self-stretch">
          <h5>Neu bei Wunschlachen?</h5>
          <div>
            <GenericButton
              :outlined="false"
              :plain="false"
              class="min-w-[290px]"
              :disabled="false"
              style="margin: 10px"
              label="dsads"
            >
              <template #label> Registrieren </template>
            </GenericButton>
          </div>
        </div>
        <div class="flex flex-col items-center gap-[16px] self-stretch">
          <h5>Ich habe bereits ein Wunschlachen-Konto</h5>
          <div>
            <GenericButton
              :outlined="true"
              :plain="false"
              class="min-w-[290px]"
              :disabled="false"
              style="margin: 10px"
              label="dsads"
            >
              <template #label> Eingloggen </template>
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
