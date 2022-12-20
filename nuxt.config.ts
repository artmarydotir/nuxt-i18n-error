// import { I18N } from "./i18n/config";

// export default defineNuxtConfig({
//   ssr: false,

//   app: {
//     head: {
//       title: "Title from config",
//       meta: [
//         { charset: "utf-8" },
//         { name: "viewport", content: "width=device-width, initial-scale=1" },
//         { hid: "description", name: "description", content: "My App" },
//       ],
//       link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
//     },
//   },
//   modules: [["@nuxtjs/i18n", I18N]],
// });

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
  //   typescript: {
  //     strict: true,
  //     typeCheck: true,
  //   },
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
    // this adds the vuetify vite plugin
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
});
