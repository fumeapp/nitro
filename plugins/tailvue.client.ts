import tailvue, { useToast, useModal, ToastProps, TailvueToast } from 'tailvue'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    if (!nuxtApp.$toast) {
        nuxtApp.provide('toast', useToast())
        nuxtApp.provide('modal', useModal)
    }
    nuxtApp.vueApp.use(tailvue)
})

declare module '#app' {
    interface NuxtApp {
       $toast: TailvueToast
    }
}
