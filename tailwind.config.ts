import type { Config } from 'tailwindcss';

import generated from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [generated]
} as Config;
