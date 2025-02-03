// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: null,
    description: null
  }),
  actions: {
    notify() {
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000);
    },
    notifyCreated() {
      this.type = 'success'
      this.description = 'Task created with success!'
      this.notify()
    },
    notifyUpdated() {
      this.type = 'info'
      this.description = 'Task updated!'
      this.notify()
    },
    notifyDeleted() {
      this.type = 'warning'
      this.description = 'Task deleted!'
      this.notify()
    }
  }
})
