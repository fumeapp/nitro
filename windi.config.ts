import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      "./components/**/*.vue",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.ts",
      "./nuxt.config.ts",
      "node_modules/tailvue/dist/tailvue.es.js",
    ],
  },

  darkMode: 'class', // or 'media' or 'class'
})
