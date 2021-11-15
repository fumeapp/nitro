import { defineNuxtConfig } from 'nuxt3'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        '@vueuse/core/nuxt',
        '@unocss/nuxt',
    ],
    plugins: [
        '@/plugins/tailvue.client',
    ],
    publicRuntimeConfig: {
        apiURL: process.env.API_URL || 'http://localhost:8000',
    },
    css: [
        '~/styles/main.css',
    ],
    unocss: {
        presets: [
            presetUno(),
            presetAttributify(),
            presetIcons(),
        ],
    },
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
