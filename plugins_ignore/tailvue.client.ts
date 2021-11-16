import { defineNuxtPlugin } from 'nuxt3'
import { useToast, useModal, PushButton, ModalBase, TailvueToast, TailvueModal } from 'tailvue'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('we are in defineNuxtPlugin')
  if (!nuxtApp.$toast) {
    nuxtApp.provide('toast', useToast())
    nuxtApp.provide('modal', useModal())
  }
  nuxtApp.vueApp.component('PushButton', PushButton)
  nuxtApp.vueApp.component('ModalBase', ModalBase)

})
declare module '#app' {
  interface NuxtApp {
    $toast: TailvueToast
    $modal: TailvueModal
  }
}
