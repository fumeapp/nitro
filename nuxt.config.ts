import { defineNuxtConfig } from 'nuxt3'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        '@vueuse/core/nuxt',
    ],
    css: [
        '~/styles/main.css',
    ],
    vite: {
        build: {},
        plugins: [
            UnoCSS({
                presets: [
                    UnocssIcons(),
                ],
            }),
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
