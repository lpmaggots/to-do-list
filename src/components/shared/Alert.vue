<template>
  <div class="container">
    <v-alert
      class="animate__animated animate__fadeIn"
      closable
      :text="alertStore.description"
      :type="alertStore.type"
      variant="outlined"
    ></v-alert>
  </div>
</template>

<script setup>
  // store
  import { useAlertStore } from '@/stores/alert'
  // style
  import 'animate.css'

  const alertStore = useAlertStore()
</script>

<style scoped>
.container {
  width: 100%;
  position: fixed;
  bottom: 50px;
  padding: 0 40% 0 40%;
  z-index: 1;
}
</style>