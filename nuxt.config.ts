import { defineNuxtConfig } from 'nuxt3'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        '@vueuse/core/nuxt',
        '@unocss/nuxt',
    ],
    css: [
        '~/styles/main.css',
    ],
    unocss: {
        shortcuts: [
            ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ],
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
