import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  components: true,
  buildModules: [
    'nuxt-windicss',
    '@tailvue/nuxt',
  ],
  publicRuntimeConfig: {
    apiURL: process.env.API_URL || 'http://localhost:8000',
  },
  css: [
    '@/styles/main.css',
  ],
})
