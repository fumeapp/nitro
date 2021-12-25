import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        '@tailvue/nuxt',
    ],
    publicRuntimeConfig: {
        apiURL: process.env.API_URL || 'http://localhost:8000',
    },
    css: [
        '@/styles/main.css',
    ],
    build: {
        publicPath: '/',
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
