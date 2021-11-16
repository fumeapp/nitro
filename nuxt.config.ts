import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        // '@vueuse/core/nuxt',
    ],
    plugins: [
        // '@/plugins/tailvue.client',
    ],
    publicRuntimeConfig: {
        apiURL: process.env.API_URL || 'http://localhost:8000',
    },
    css: [
        '~/styles/main.css',
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },
})
