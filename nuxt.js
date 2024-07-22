import { defineNuxtModule, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  hooks: {
    "components:dirs": (dirs) => {
      const { resolve } = createResolver(import.meta.url);
      // Add ./components directory to the list
      dirs.push({
        path: resolve("./components"),
        prefix: "awesome",
      });
    },
    "autoImports:dirs": (dirs) => {
      const { resolve } = createResolver(import.meta.url);
      // Add ./composables directory to the list
      dirs.push(resolve("./composables"));
    },
  },
});
