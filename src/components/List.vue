<template>
  <v-list
    lines="three"
    select-strategy="leaf"
  >
    <v-list-subheader>
      {{ taskStore.tasks.length > 0 ? 'List' : 'No results' }}
    </v-list-subheader>
    <v-list-item
      v-for="(item, index) in taskStore.tasks"
      :key="index"
      :value="index"
      density="dense"
      @click="taskStore.toggleDoneTask(index)"
    >
      <template v-slot:prepend>
        <v-list-item-action start>
          <v-checkbox-btn :model-value="item.done"></v-checkbox-btn>
        </v-list-item-action>
      </template>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="text" size="small" icon="mdi-dots-vertical" />
          </template>
          <v-list>
            <v-list-item :value="0">
              <v-list-item-title @click="taskStore.toggleEdit(index)">Edit</v-list-item-title>
            </v-list-item>
            <v-list-item :value="1">
              <v-list-item-title @click="taskStore.toggleDelete(index)">Deletar</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-list-item>
  </v-list>
  <DialogTask :task="taskStore.tasks[taskStore.indexSelectedTask]" />
  <DialogDelete :task="taskStore.tasks[taskStore.indexSelectedTask]" />
</template>

<script setup>
  // components
  import DialogTask from './dialogs/DialogTask.vue'
  import DialogDelete from './dialogs/DialogDelete.vue'
  // stores
  import { useTaskStore } from '@/stores/task'
  
  const taskStore = useTaskStore()
</script>