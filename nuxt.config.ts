// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/robots", "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    {
      src: "~/plugins/vue3-particles.ts",
      mode: "client",
    },
  ],
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://simeon.lol",
      siteName: "Simeon L. | Apprentice",
      siteDescription: "Wanna know who I am? Well take a look.",
      language: "en",
      titleSeparator: "|",
    },
  },
});
