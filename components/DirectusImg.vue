<template>
  <NuxtImg
    v-if="image"
    :src="`img/${image.id}/${sanitizeUrlString(image.filename_download)}`"
    :alt="image.title"
    :width="image.width"
    :height="image.height"
    :loading="lazy ? 'lazy' : 'eager'"
    :format="image.type !== 'image/svg+xml' ? 'webp' : ''"
    sizes="xs:90vw sm:90vw md:90vw lg:90vw xl:90vw xxl:90vw 2xxl:90vw"
  >
    <slot></slot>
  </NuxtImg>
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  lazy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

function sanitizeUrlString(str) {
  str = str
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/Ä/g, "Ae")
    .replace(/Ö/g, "Oe")
    .replace(/Ü/g, "Ue")
    .replace(/ß/g, "ss");
  str = str.replace(/\s+/g, "_");
  str = encodeURIComponent(str);
  return str.replace(/%[0-9A-Fa-f]{2}/g, "");
}
</script>

<style scoped></style>
