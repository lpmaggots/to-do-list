<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>🇧🇷 Sobre o Projeto</h2>
        <p>Este é um aplicativo de To-Do List desenvolvido com Vue 3 e Vite, utilizando Vuetify para a interface de usuário. O projeto foi criado para ser leve, rápido e responsivo, permitindo a organização de tarefas de forma simples e eficiente. Além disso, ele é uma Progressive Web App (PWA), o que significa que pode ser instalado no seu dispositivo e usado offline. O deploy foi realizado na Netlify, garantindo uma experiência fluida e confiável. Este projeto demonstra minhas habilidades com Vue.js, componentização, PWA e deploy em produção.</p>
        <hr class="mt-6 mb-5" />
        <h2>🇺🇸 About the Project</h2>
        <p>This is a To-Do List app built with Vue 3 and Vite, using Vuetify for the user interface. The project was designed to be lightweight, fast, and responsive, allowing users to manage tasks in a simple and efficient way. Additionally, it is a Progressive Web App (PWA), meaning it can be installed on your device and used offline. The deployment was done on Netlify, ensuring a smooth and reliable experience. This project show my skills in Vue.js, componentization, PWA, and production deployment.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center mt-10">
        <h2 class="mb-5">Tecnologias utilizadas | Used technologies</h2>
        <div class="d-flex justify-center align-center">
          <v-img v-for="(logo, index) in logos" :key="index" :src="logo.path" width="150" height="150"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const logos = [
    { name: 'Vue', path: '/vue-logo.png' },
    { name: 'Vuetify', path: '/vuetify-logo.png' },
    { name: 'Netlify', path: '/netlify-logo.png' },
    { name: 'PWA', path: '/pwa-logo.png' }
  ]
</script>