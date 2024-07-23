<template>
  <div
    class="flex border-2 w-full h-full pt-[144px] pb-[280px] px-0 items-center justify-center g-[8px]"
  >
    <div class="flex flex-col items-center gap-[48px]">
      <div>
        <slot name="logo"></slot>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-[61px] self-stretch"
      >
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-center">Wählen Sie einen Standort</h2>
        </div>

        <div v-for="location in locations" class="flex flex-col gap-[38px]">
          <div class="flex flex-col p-[24px] border-2 gap-[24px]">
            <div class="flex flex-row pt-0 pl-[7px] pr-[32px] gap-[32px]">
              <div>
                <slot name="favicon"></slot>
              </div>
              <div class="flex flex-col self-stretch gap-[8px]">
                <h4>{{ location.name }}</h4>
                <h4 style="font-weight: 300" class="text-light flex flex-col">
                  <span>{{ location.address }}</span>
                  <span>{{ location.postalCode }} {{ location.city }}</span>
                </h4>
              </div>
            </div>
            <GenericButton
              :outlined="false"
              :plain="false"
              :disabled="false"
              label="Auswählen"
              @click="handleSelectLocation(location.id)"
            >
              <template #label>
                <h4 style="font-weight: 300; color: white">Auswählen</h4>
              </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleSelectLocation = (location: number) => {
  alert(`Selected location is ${location}`);
};

const locations = ref([
  {
    id: 0,
    name: "Berlin - Reinickendorf",
    address: "Gotthardstr. 27",
    postalCode: "13407",
    city: "Berlin",
  },
  {
    id: 1,
    name: "Berlin - Schöneberg",
    address: "Bayerischer Platz 7",
    postalCode: "10779",
    city: "Berlin",
  },
]);
</script>
