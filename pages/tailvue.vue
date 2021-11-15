<template>
  <div class="w-screen h-screen flex flex-col space-y-4 items-center justify-center">
    <push-button>
      hello there
    </push-button>
    <push-button theme="white-left">
      theme="whiteLeft"
    </push-button>
    <push-button @click="test">$toast.success('this is a test')</push-button>
  </div>
</template>

<script lang="ts" setup>
import { PushButton } from 'tailvue'
import { useNuxtApp } from '#app'
const { $toast } = useNuxtApp()
function test () {
  $toast.success('this is a test')
}
</script>
