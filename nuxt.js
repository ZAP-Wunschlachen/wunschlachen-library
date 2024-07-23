import { defineNuxtModule, installModule, createResolver } from "@nuxt/kit";

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
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Add CSS file
    nuxt.options.css.push(resolve("./assets/css/tailwind.css"));

    // Add Tailwind CSS configuration
    nuxt.options.tailwindcss = nuxt.options.tailwindcss || {};
    nuxt.options.tailwindcss.configPath = resolve("./tailwind.config.js");

    await installModule("@nuxtjs/tailwindcss", {
      // module configuration
      exposeConfig: true,
      config: {
        darkMode: "class",
        content: {
          files: [
            resolve("./runtime/components/**/*.{vue,mjs,ts}"),
            resolve("./runtime/*.{mjs,js,ts}"),
          ],
        },
        theme: {
          extend: {
            boxShadow: {
              "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
              "green-border": "0 0 0 1px green",
            },
            textUnderlineOffset: {
              6: "6px",
              8: "8px",
            },
            textDecorationThickness: {
              2: "2px",
              4: "4px",
            },
            colors: {
              "dental-blue-0": "#172774",
              "dental-blue-1": "var(--dental-blue-1)",
              "dental-blue-minus-1": "var(--dental-blue--1)",
              "dental-blue-minus-2": "var(--dental-blue--2)",
              "dental-blue-minus-3": "var(--dental-blue--3)",
              "dental-blue-minus-4": "var(--dental-blue--4)",
              "dental-blue-minus-5": "var(--dental-blue--5)",
              "dental-blue-minus-6": "var(--dental-blue--6)",
              "dental-light-blue-4": "var(--dental-light-blue-4)",
              "dental-light-blue-3": "var(--dental-light-blue-3)",
              "dental-light-blue-2": "var(--dental-light-blue-2)",
              "dental-light-blue-1": "var(--dental-light-blue-1)",
              "dental-light-blue-0": "var(--dental-light-blue-0)",
              "dental-light-blue-minus-1": "var(--dental-light-blue--1)",
              "dental-light-blue-minus-2": "var(--dental-light-blue--2)",
              "dental-light-blue-minus-3": "var(--dental-light-blue--3)",
              "dental-air-5": "var(--dental-air-5)",
              "dental-air-4": "var(--dental-air-4)",
              "dental-air-3": "var(--dental-air-3)",
              "dental-air-2": "var(--dental-air-2)",
              "dental-air-1": "var(--dental-air-1)",
              "dental-air-0": "var(--dental-air-0)",
              "dental-air-minus-1": "var(--dental-air--1)",
              "dental-air-minus-2": "var(--dental-air--2)",
              "power-red-3": "var(--power-red-3)",
              "power-red-2": "var(--power-red-2)",
              "power-red-1": "var(--power-red-1)",
              "power-red-0": "var(--power-red-0)",
              "power-red-minus-1": "var(--power-red--1)",
              "power-red-minus-2": "var(--power-red--2)",
              "power-red-minus-3": "var(--power-red--3)",
              "power-red-minus-4": "var(--power-red--4)",
              "light-gum-4": "var(--light-gum-4)",
              "light-gum-3": "var(--light-gum-3)",
              "light-gum-2": "var(--light-gum-2)",
              "light-gum-1": "var(--light-gum-1)",
              "light-gum-0": "var(--light-gum-0)",
              "light-gum-minus-1": "var(--light-gum--1)",
              "light-gum-minus-2": "var(--light-gum--2)",
              "light-gum-minus-3": "var(--light-gum--3)",
              "warm-light-5": "var(--warm-light-5)",
              "warm-light-4": "var(--warm-light-4)",
              "warm-light-3": "var(--warm-light-3)",
              "warm-light-2": "var(--warm-light-2)",
              "warm-light-1": "var(--warm-light-1)",
              "warm-light-0": "var(--warm-light-0)",
              "warm-light-minus-1": "var(--warm-light--1)",
              "warm-light-minus-2": "var(--warm-light--2)",
              "soft-concrete-5": "var(--soft-concrete-5)",
              "soft-concrete-4": "var(--soft-concrete-4)",
              "soft-concrete-3": "var(--soft-concrete-3)",
              "soft-concrete-2": "var(--soft-concrete-2)",
              "soft-concrete-1": "var(--soft-concrete-1)",
              "soft-concrete-0": "var(--soft-concrete-0)",
              "soft-concrete-minus-1": "var(--soft-concrete--1)",
              "soft-concrete-minus-2": "var(--soft-concrete--2)",
              "error-red-1": "var(--error-red-1)",
              "error-red-0": "var(--error-red-0)",
              "error-red-minus-1": "var(--error-red--1)",
              "success-green-1": "var(--success-green-1)",
              "success-green-0": "var(--success-green-0)",
              "success-green-minus-1": "var(--success-green--1)",
              "warning-1": "var(--warning-1)",
              "warning-0": "var(--warning-0)",
              "warning-minus-1": "var(--warning--1)",
            },
          },
          variants: {
            extend: {
              backgroundImage: ["responsive"],
              backgroundSize: ["responsive"],
              backgroundPosition: ["responsive"],
            },
          },
          screens: {
            sm: { min: "360px", max: "794px" },
            md: { min: "794px", max: "1200px" },
            lg: { min: "1200px", max: "2650px" },
            "aspect-1/1-min": { raw: "(min-aspect-ratio: 1/1)" },
            "aspect-1/1-max": { raw: "(max-aspect-ratio: 1/1)" },
          },
        },
      },
    });

    // Add composables directory to auto import
    nuxt.hook("imports:dirs", (dirs) => {
      dirs.push(resolve("./composables"));
    });

    addImports({
      name: "useGenerateImageUrl", // name of the composable to be used
      as: "useGenerateImageUrl",
      from: resolve("composables/useGenerateImageUrl"), // path of composable
    });

    addImports({
      name: "useIcons", // name of the composable to be used
      as: "useIcons",
      from: resolve("composables/useIcons"), // path of composable
    });
  },
});
