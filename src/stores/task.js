// Utilities
import { defineStore } from 'pinia'
// store
import { useAlertStore } from './alert'

const alertStore = useAlertStore()

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    titleTask: null,
    indexSelectedTask: 0,
    showDialogTask: false,
    showDialogDelete: false,
    localDataKey: 'tasks'
  }),
  actions: {
    createTask() {
      if(this.titleTask.length < 5) return
      this.tasks.push({
        title: this.titleTask,
        done: false
      })
      this.titleTask = null
      this.saveLocalData()
      alertStore.notifyCreated()
    },
    toggleEdit(index) {
      this.showDialogTask = !this.showDialogTask
      if(index != null) this.indexSelectedTask = index
    },
    updatedTask() {
      this.saveLocalData()
      this.toggleEdit()
      alertStore.notifyUpdated()
    },
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete
      if(index != null) this.indexSelectedTask = index
    },
    deleteTask() {
      this.tasks.splice(this.indexSelectedTask, 1)
      this.saveLocalData()
      this.showDialogDelete = !this.showDialogDelete
      alertStore.notifyDeleted()
    },
    saveLocalData() {
      localStorage.setItem(this.localDataKey, JSON.stringify(this.tasks))
    },
    getLocalData() {
      let items = localStorage.getItem(this.localDataKey)
      if(items) this.tasks = JSON.parse(items)
    },
    toggleDoneTask(index) {
      console.log(index)
      this.tasks[index].done = !this.tasks[index].done
    }
  }
})
