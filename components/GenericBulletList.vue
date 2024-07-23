<template>
  <div class="container">
    <div class="content">
      <slot name="content"></slot>
    </div>

    <div class="slots-container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
  gap: 47px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.slots-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 47px;
  align-self: stretch;
  flex-wrap: wrap;
}
</style>
