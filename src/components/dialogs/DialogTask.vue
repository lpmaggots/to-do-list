<template>
  <v-dialog
    v-model="taskStore.showDialogTask"
    max-width="600"
    min-width="400"
    persistent
  >
    <v-card title="Edit task">
      <v-card-text>
        <v-text-field
          variant="outlined"
          placeholder="Title"
          v-model="props.task.title"
        ></v-text-field>
        <v-text-field
          variant="outlined"
          placeholder="Description"
          v-model="props.task.description"
        ></v-text-field>
      </v-card-text>
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="taskStore.updatedTask()">
          Update and close
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
    task: Object,
  })

</script>