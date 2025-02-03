<template>
  <v-text-field
    variant="outlined"
    placeholder="Digite aqui sua tarefa"
    class="mt-4 mx-3"
    v-model="taskStore.titleTask"
    @keyup.enter="taskStore.createTask"
    :rules="rules"
  ></v-text-field>
  <List />
</template>

<script setup>
  import { onMounted } from 'vue'
  // components
  import List from '@/components/List.vue'
  // stores
  import { useTaskStore } from '@/stores/task'
  
  const taskStore = useTaskStore()

  onMounted(() => {
    taskStore && taskStore.getLocalData()
  })

  const rules = [
    (value) => {
      if (!value || value.length >= 5) return true
      return 'You must enter a task title with more than 5 chars.'
    }
  ]
</script>