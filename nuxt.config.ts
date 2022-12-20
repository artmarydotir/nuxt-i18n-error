import vuetify from "vite-plugin-vuetify";
import { I18N } from "./i18n/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "@/assets/main.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  vite: {
    // ssr: {
    //   noExternal: ["vuetify"],
    // },
    define: {
      "process.env.DEBUG": "false",
    },
  },
  modules: [
    ["@nuxtjs/i18n", I18N],
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
});
