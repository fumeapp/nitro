<template>
  <div class="w-screen h-screen flex flex-col space-y-4 items-center justify-center">
    <push-button size="xl" theme=red> size="xl" theme="red"</push-button>
    <push-button @click="toastSuccess">$toast.success('success')</push-button>
    <push-button @click="toastDanger">$toast.danger('danger')</push-button>
    <push-button @click="toastPrimary">$toast with button</push-button>
    <push-button @click="toastSecondary">$toast with two buttons</push-button>
    <push-button @click="modal">$modal.show('this is a modal')</push-button>
    <push-button @click="danger">$modal danger</push-button>
  </div>
</template>

<script lang="ts" setup>
import { PushButton } from 'tailvue'
import { useNuxtApp } from '#app'
const { $toast, $modal } = useNuxtApp()

function toastSuccess () {
  $toast.success('success')
}

function toastDanger () {
  $toast.danger('success')
}

const toastPrimary = () => {
  $toast.show({
    title: 'toast title',
    message: 'toast with primary action',
    primary: {
      label: 'UNDO',
      action: () => $toast.info('clicked UNDO')
    },
    timeout: 10,
  })
}


const toastSecondary = () => {
  $toast.show({
    title: 'toast title',
    message: 'toast with primary and secondary action',
    primary: {
      label: 'OK',
      action: () => $toast.info('clicked OK'),
    },
    secondary: {
      label: 'Cancel',
      action: () => $toast.info('clicked cancel'),
    },
    timeout: 10,
  })
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
      theme: 'white',
      action: () => $toast.info('secondary action pressed')
    }
  })
}
</script>
