import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://reduhq.github.io',
  base: '/portfolio',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), icon({
    svgoOptions: {
      plugins: [
      // {
      //   name: 'removeStyleElement' // Elimina elementos <style> dentro del SVG
      // },
      {
        name: 'removeAttrs',
        // Elimina atributos específicos
        params: {
          attrs: ['color'] // Elimina los atributos color, fill, y stroke
        }
      }]
    }
  }), react()]
});