<template>
  <div class="appointment-selector">
    <div class="content">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="header" style="color: var(--dental-blue-0)">
        <h2 style="font-weight: bold; font-size: 25px">
          Wählen Sie die Terminart
        </h2>
        <span
          >Bestimmte Termine sind nur für bestehende Patienten verfügbar</span
        >
      </div>

      <div
        class="button-container"
        @scroll="handleScroll"
        ref="scrollContainer"
      >
        <div class="button-wrapper">
          <GenericButton
            v-for="(item, index) in treatmentTemplates"
            :key="index"
            :outlined="true"
            :plain="true"
            :disabled="!isItemVisible(index)"
            class="generic-button"
          >
            <template #label>{{ item }}</template>
          </GenericButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

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

const visibleIndices = ref([0, 1, 2, 3]);
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

  visibleIndices.value = newVisibleIndices.slice(0, 4);
};

const isItemVisible = (index) => {
  return visibleIndices.value.includes(index);
};

onMounted(() => {
  setTimeout(handleScroll, 0);
  scrollContainer.value.addEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.appointment-selector {
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
  background-color: var(--dental-light-blue-3);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}

.header h2 {
  text-align: center;
}

.header span {
  text-align: center;
  max-width: 400px;
}

.button-container {
  display: flex;
  border: 1px solid;
  margin: 0 auto;
  border-radius: 4px;
  max-height: 400px;
  overflow-y: scroll;
  min-width: 350px;
  padding: 24px 20px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  scroll-behavior: smooth;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
}

.generic-button {
  width: 100%;
}

/* Hide scrollbar */
.button-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.button-container::-webkit-scrollbar {
  display: none;
}
</style>
