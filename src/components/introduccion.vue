<template>
  <div class="text-center py-16">
    <h1 class="text-4xl font-bold text-white animate__animated animate__fadeIn animate__delay-1s">
      ¡Bienvenido al juego de Gato!
    </h1>
    <p class="text-lg text-white animate__animated animate__fadeIn animate__delay-2s">
      Un emocionante juego de Tic Tac Toe donde puedes desafiar a tus amigos o jugar contra la máquina.
    </p>
    <p class="text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-3s">
      Elige tu modo de juego y comienza a disfrutar de la diversión.
    </p>
  </div>
  <div class="flex justify-center mt-8">
    <router-link to="/vpc" class="bg-blue-500 hover:bg-blue-600 text-white hover:text-white px-6 py-3 rounded-full mx-4 transition duration-300 transform hover:scale-105">
      Jugador vs. PC
    </router-link>
    <router-link to="/pvp" class="bg-green-500 hover:bg-green-600 text-white hover:text-white px-6 py-3 rounded-full mx-4 transition duration-300 transform hover:scale-105">
      Jugador vs. Jugador
    </router-link>
  </div>
  <router-view />
</template>

  
  
  <script setup>
    import { ref } from 'vue'
  </script>
  
  