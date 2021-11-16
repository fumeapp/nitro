<template>
  <div class="w-screen h-screen flex flex-col space-y-4 items-center justify-center">
    <push-button @click="toastSuccess">$toast.success('this is a test')</push-button>
    <push-button @click="modal">$modal.show('this is a modal')</push-button>
    <push-button @click="danger">$modal danger</push-button>
  </div>
</template>

<script lang="ts" setup>
import { PushButton } from 'tailvue'
import { useNuxtApp } from '#app'
const { $toast, $modal } = useNuxtApp()

function toastSuccess () {
  $toast.success('this is a test')
}

function modal () {
  $modal.show('this is a modal')
}

function danger () {
  $modal.show({
    type: 'danger',
    title: 'modal title',
    body: 'this is the body of the modal',
    primary: {
      label: 'Primary Action',
      theme: 'red',
      action: () => $toast.danger('clicked primary action'),
    },
    secondary: {
      label: 'Secondary Action',
      theme: 'indigo-light',
      action: () => $toast.info('secondary action pressed')
    }
  })
}
</script>
