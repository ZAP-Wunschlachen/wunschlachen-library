<template>
  <div
    class="flex mx-auto px-[16px] flex-col items-center max-w-[850px] gap-[47px]"
  >
    <div class="flex flex-col gap-[15px]">
      <slot name="content"></slot>
    </div>

    <div
      class="flex justify-center items-center content-center gap-[47px] self-stretch flex-wrap"
    >
      <slot></slot>
    </div>
  </div>
</template>
