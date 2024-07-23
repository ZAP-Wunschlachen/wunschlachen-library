<template>
  <div
    :class="[
      'button',
      baseClass,
      { 'button-disabled': disabled },
      { 'button-sending': sending },
      { 'button-outlined-enabled': outlined && !disabled },
      { 'button-outlined-disabled': outlined && disabled },
      { 'button-plain-enabled': plain && !disabled },
      { 'button-plain-disabled': plain && disabled },
    ]"
  >
    <div v-if="sending" class="spinner"></div>
    <div class="button-content" v-if="!sending">
      <div class="flex flex-col">
        <slot name="prependIcon" />
        <slot name="label" />
        <slot name="appendIcon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

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
  default: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: "",
  },
});

const baseClass = computed(() => {
  if (props.default) {
    if (props.disabled) {
      return "button-default-disabled";
    }
    return "button-default-enabled";
  }

  if (props.plain) {
    if (props.disabled) {
      return "button-plain-disabled";
    }
    return "button-plain-enabled";
  }

  if (props.outlined) {
    if (props.disabled) {
      return "button-outlined-disabled";
    }
    return "button-outlined-enabled";
  }

  if (props.disabled) {
    return "button-disabled";
  }

  return "button-enabled";
});
</script>

<style scoped>
.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  text-align: center;
  font-size: 1rem;
  border: 0;
  width: 100%;
  height: 2.5rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  background: var(--dental-blue-0);
}

.button-disabled {
  cursor: not-allowed;
  background-color: var(--soft-concrete-2);
  color: var(--soft-concrete-2);
}

.button-sending {
  opacity: 0;
}

.button-default-enabled {
  background-color: var(--dental-blue-0);
  color: white;
  border: 2px solid var(--dental-blue-0);
}
.button-default-enabled:hover {
  background-color: var(--dental-blue--3);
}
.button-default-enabled:active {
  background-color: var(--dental-blue-1);
}

.button-default-disabled {
  background-color: var(--soft-concrete-2);
  color: white;
  border: 2px solid var(--soft-concrete-2);
}

.button-plain-enabled {
  background-color: transparent;
  color: var(--dental-blue-0);
}
.button-plain-enabled:hover {
  color: var(--dental-blue--3);
}
.button-plain-enabled:active {
  color: var(--dental-blue-1);
}

.button-plain-disabled {
  background-color: transparent;
  color: var(--soft-concrete-2);
}

.button-outlined-enabled {
  border: 2px solid var(--dental-blue-0);
  color: var(--dental-blue-0);
}
.button-outlined-enabled:hover {
  background-color: var(--dental-blue--4);
  color: var(--dental-blue-0);
}
.button-outlined-enabled:active {
  background-color: var(--dental-blue--3);
  color: white;
  border-color: var(--dental-blue-0);
}

.button-outlined-disabled {
  border: 2px solid var(--soft-concrete-2);
  color: var(--soft-concrete-2);
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -0.125rem;
  margin-left: -0.125rem;
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; /* Default size */
}

@media (min-width: 640px) {
  .button-content {
    font-size: 1rem; /* sm:text-[16px] */
  }
}

@media (min-width: 768px) {
  .button-content {
    font-size: 1.125rem; /* md:text-[18px] */
  }
}

@media (min-width: 1024px) {
  .button-content {
    font-size: 1.25rem; /* lg:text-[20px] */
  }
}
</style>
