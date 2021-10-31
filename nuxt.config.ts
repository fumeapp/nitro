import 'unocss'
import { defineNuxtConfig } from 'nuxt3'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        'nuxt-windicss',
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
})
