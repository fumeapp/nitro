<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <icon-fume class="w-36 h-36" />
    <div class="bg-white rounded-lg shadow flex flex-col divide-y">
      <div class="flex items-center p-2 space-x-2">
        <div class="w-6 h-6 text-xl">✅</div>
        <div>Server-Side Rendering ({{ version }}) </div>
      </div>
      <div class="flex items-center p-2 space-x-2">
        <img src="/nuxt.svg" class="w-6 h-6" alt="Nuxt Image">
        <div>Statically cached image</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAsyncData } from '#app'

let version = (await useAsyncData('version', () => process.version)).data

</script>
