<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen">
    <icon-fume class="w-36 h-36" />
    <div class="bg-white rounded-lg shadow flex flex-col divide-y">

      <div class="flex items-center py-2 px-4 space-x-4">
        <icon-client icon="emojione-monotone:alembic" class="w-6 h-6 text-blue-500" />
        <div>/pages/test.vue </div>
      </div>

      <div class="flex items-center py-2 px-4 space-x-4">
        <icon-client icon="bi-server" class="w-6 h-6 text-blue-500" />
        <div>Server-Side Rendering  (node {{ version }}) </div>
      </div>

      <div class="flex items-center py-2 px-4 space-x-4">
        <img src="/nuxt.svg" class="w-6 h-6" alt="Nuxt Image">
        <div>Statically cached image</div>
      </div>

      <div class="flex items-center py-2 px-4 space-x-4">
        <icon-client icon="logos-aws" class="w-6 h-6 text-yellow-700" />
        <div>Build test number ({{ number }}) </div>
      </div>

      <div class="flex items-center py-2 px-4 space-x-4">
        <icon-client icon="mdi-cog" class="w-6 h-6 text-gray-400" />
        <div>config.apiURL: {{ apiURL }} </div>
      </div>

      <nuxt-link to="/playground" class="flex items-center py-2 px-4 space-x-4">
        <div class="flex">
          <icon-client icon="logos-vue" class="w-6 h-6" />
          <icon-client icon="logos-tailwindcss-icon" class="w-6 h-6 -ml-5" />
        </div>
        <div>tailvue playground</div>
      </nuxt-link>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from '#app'
import { ref } from '@vue/reactivity'
import IconClient from '~/components/IconClient.vue'
const version = 'v14'
const number = ref(<number>16)
const config = useRuntimeConfig()
const apiURL = config?.apiURL
definePageMeta({ layout: 'custom' })
</script>
