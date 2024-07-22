import { defineNuxtModule, createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  hooks: {
    "components:dirs": (dirs) => {
      const { resolve } = createResolver(import.meta.url);
      // Add ./components dir to the list
      dirs.push({
        path: resolve("./components"),
        prefix: "Wunschlachen",
      });
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Add CSS file
    nuxt.options.css.push(resolve("./styles/index.css"));

    // Add Tailwind CSS configuration
    nuxt.options.tailwindcss = nuxt.options.tailwindcss || {};
    nuxt.options.tailwindcss.configPath = resolve("./tailwind.config.js");

    // Add composables directory to auto import
    nuxt.hook("imports:dirs", (dirs) => {
      dirs.push(resolve("./composables"));
    });
  },
});
