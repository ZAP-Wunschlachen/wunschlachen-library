<template>
  <Icon
    :name="`material-symbols-light:` + name"
    :size="size + `rem`"
    :color="color"
  />
  <!-- <span class="material-symbols-rounded" :style="`font-size:${size}rem`">{{name}}</span> -->
</template>

<script>
export default {
  name: "MaterialIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
    },
    color: {
      type: String,
    },
  },
};
</script>
