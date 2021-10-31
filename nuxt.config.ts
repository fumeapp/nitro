import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        '@vueuse/core/nuxt',
    ],
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
