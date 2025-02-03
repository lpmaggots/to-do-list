<template>
  <v-dialog
    v-model="taskStore.showDialogDelete"
    max-width="600"
    min-width="400"
    persistent
  >
    <v-card title="Delete task">
      <v-card-text>
        <p>Are you sure you want to delete "<b>{{ props.task && props.task.title }}</b>"?</p>
      </v-card-text>
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="taskStore.toggleDelete()">
          close
        </v-btn>
        <v-btn @click="taskStore.deleteTask()">
          Delete
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { defineProps } from 'vue'
  // stores
  import { useTaskStore } from '@/stores/task'
  
  const taskStore = useTaskStore()

  const props = defineProps({
    task: Object
  })
</script>