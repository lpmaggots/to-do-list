<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
          title="Felipe Falcone"
          subtitle="To do list"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      
      <v-list
        :lines="false"
        density="compact"
        nav
      >
        <router-link
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
        >
          <v-list-item :value="item" class="mb-1">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>To do list</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
  const items = [
    { text: 'Home', icon: 'mdi-home', path: '/home' },
    { text: 'About', icon: 'mdi-information-outline', path: '/about' }
  ]
</script>

<style scoped>
a {
  text-decoration: none;
  color: #505050;
}
.v-navigation-drawer {
  border-right: 1px solid #CCC;
}
</style>