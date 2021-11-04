<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <icon-fume class="w-36 h-36" />
    <div class="bg-white rounded-lg shadow flex flex-col divide-y">

      <div class="flex items-center py-2 px-4 space-x-4">
        <div class="i-bi-server w-6 h-6 text-blue-500" />
        <div>Server-Side Rendering  (node {{ version }}) </div>
      </div>

      <div class="flex items-center py-2 px-4 space-x-4">
        <img src="/nuxt.svg" class="w-6 h-6" alt="Nuxt Image">
        <div>Statically cached image</div>
      </div>

      <div class="flex items-center py-2 px-4 space-x-4">
        <div class="i-logos-aws w-6 h-6 text-yellow-700" />
        <div>Build test number ({{ number }}) </div>
      </div>

      <div class="flex items-center py-2 px-4 space-x-4">
        <div class="i-mdi-cog w-6 h-6 text-gray-400" />
        <div>$config.apiURL: {{ $config.apiURL }} </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAsyncData } from '#app'
let version = (await useAsyncData('version', () => process.version)).data
const number = ref(<number>16)
</script>
