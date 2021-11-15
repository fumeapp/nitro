<template>
  <div class="w-screen h-screen flex flex-col space-y-4 items-center justify-center">
    <push-button>
      hello there
    </push-button>
    <push-button theme="white-left">
      theme="whiteLeft"
    </push-button>
  </div>
</template>

<script lang="ts" setup>
import { PushButton } from 'tailvue'
</script>
