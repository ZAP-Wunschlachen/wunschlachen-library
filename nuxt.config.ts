// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-directus", "@nuxt/image", "nuxt-icon"],
  directus: {
    url: "https://app.wunschlachen.de",
  },
  image: {
    domains: ["https://app.wunschlachen.de/"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    format: ["avif", "webp", "png", "jpg"],
    alias: {
      img: "https://app.wunschlachen.de/assets/",
      video: "https://app.wunschlachen.de/assets/",
    },
  },
});
