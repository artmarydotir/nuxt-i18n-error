import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import {
  MAIN_THEME,
  mainTheme,
  MAIN_DARK_THEME,
  mainDarkTheme,
} from '@/helpers/themes';
import { defaults } from '~~/helpers/defaults';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: false,

    components,
    directives,
    defaults,
    // add theme
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme,
      },
      // add color variations
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 3,
        darken: 3,
      },
    },
  });

  app.vueApp.use(vuetify);
});
