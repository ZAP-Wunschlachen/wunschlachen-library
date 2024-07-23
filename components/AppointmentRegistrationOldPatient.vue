<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <slot name="logo"></slot>
      </div>
      <div class="text-section">
        <div class="text-content">
          <h2>Sind Sie bereits Patient?</h2>
          <span>Gewisse Terminarten sind nicht für Neupatienten verfügbar</span>
        </div>
      </div>
      <div class="choice-box">
        <div class="choice-content">
          <span class="choice-text"
            >Haben Sie einen Arzt oder Ärztin in dieser Einrichtung bereits
            besucht?</span
          >
          <div class="buttons">
            <GenericButton
              :outlined="true"
              :plain="true"
              :disabled="false"
              label="dsads"
              @click="handleChoice(Choice.YES)"
            >
              <template #label> Ja </template>
            </GenericButton>

            <GenericButton
              :outlined="true"
              :plain="true"
              :disabled="false"
              label="dsads"
              @click="handleChoice(Choice.NO)"
            >
              <template #label> Nein </template>
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["pick-choice"]);

enum Choice {
  YES = "yes",
  NO = "no",
}

const handleChoice = (choice: Choice) => {
  emit("pick-choice", choice);
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-width: 100%;
  height: 100%;
  padding-top: 144px;
  padding-bottom: 280px;
  padding-left: 0;
  padding-right: 0;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
}

.text-section,
.choice-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.text-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  max-width: 400px;
  align-items: center;
  gap: 10px;
}

.choice-box {
  border: 1px solid;
  margin: 0 auto;
  border-radius: 4px;
  height: 266px;
  max-width: 350px;
  padding: 24px 20px;
  flex-direction: column;
  gap: 24px;
}

.choice-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.choice-text {
  text-align: left;
  padding-left: 12px;
  padding-right: 12px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
