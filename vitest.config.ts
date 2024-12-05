import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    include: [
      "tests/unit/components/**/*.nuxt.spec.ts",
      "tests/unit/utils/**/*.nuxt.spec.ts",
    ],

    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },
  },
});
