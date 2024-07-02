<template>
  <div
    :class="[
      'button relative flex items-center justify-center font-normal text-center text-base border-0 w-full h-10 leading-5 px-4 rounded-lg outline-none cursor-pointer',
      baseClass,
      { 'cursor-not-allowed': disabled },
      { 'opacity-0': sending },
      {
        'border-2 border-dental-blue-0 text-dental-blue-0 active:text-white active:bg-dental-blue--3 active:border-dental-blue-0 hover:text-dental-blue-0 hover:bg-dental-blue--4 hover:border-dental-blue-0':
          outlined && !disabled,
        'border-2 bg-white border-soft-concrete-2 text-soft-concrete-2':
          outlined && disabled,
      },
      { 'bg-transparent': plain && !disabled },
      { 'bg-transparent text-soft-concrete-2 ': plain && disabled },
    ]"
  >
    <div
      v-if="sending"
      class="absolute top-1/2 left-1/2 -mt-1 -ml-1 w-3 h-3 border-2 border-solid rounded-full border-current border-t-transparent animate-spin"
    ></div>
    <div
      class="button-content flex items-center justify-center"
      v-if="!sending"
    >
      <div class="flex flex-col">
        <slot name="prependIcon" />
        <slot name="label" />
        <slot name="appendIcon" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  sending: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: "",
  },
});

const baseClass = computed(() => {
  if (props.plain) {
    if (props.disabled) {
      return "bg-transparent text-soft-concrete-2";
    }
    return "bg-transparent text-dental-blue-0 hover:text-dental-blue--3 active:text-dental-blue-1";
  }

  if (props.outlined) {
    if (props.disabled) {
      return "border-2 border-soft-concrete-2 text-soft-concrete-2";
    }
    return "border-2 border-dental-blue-0 text-dental-blue-0 active:text-white active:bg-dental-blue--3 active:border-dental-blue-0 hover:text-dental-blue-0 hover:bg-dental-blue--4 hover:border-dental-blue-0";
  }

  if (props.disabled) {
    return "bg-soft-concrete-2 text-white";
  }

  return "bg-dental-blue-0 text-white hover:bg-dental-blue--3 active:bg-dental-blue-1";
});
</script>

<style scoped>
.icon {
  cursor: pointer;
}
.icon:hover {
  color: #5c8df6; /* example color, replace with actual */
}
.icon:active {
  color: #2b6cc4; /* example color, replace with actual */
}
</style>
