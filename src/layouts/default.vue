<template>
  <v-app>
    <Alert v-if="alertStore.showAlert" />
    <View />
  </v-app>
</template>

<script setup>
  import View from './view.vue'
  import Alert from '@/components/shared/Alert.vue'
  // stores
  import { useAlertStore } from '@/stores/alert'

  const alertStore = useAlertStore()
</script>