<template>
  <div>
    <h1>TIC TAC TOE (GATO)</h1>
    <H2>Bienvenido al juego de gato, elige tus opciones</H2>
    <router-link to="">
      <button>VS Maquina</button>
    </router-link>
    <router-link to="/app2zz">
      <button>VS JUGADOR</button>
    </router-link>
  </div>
</template>

<style>
body{
  background-image: url(./assets/wbgbc00430830_1.jpg);
}
button{
  padding: 2rem;
  border-radius: 5rem;
}
h1{
  color: black;
  padding: 2rem;
  background-color: gold;
  font-family: 'Courier New', Courier, monospace;
  font: bold;
}
h2{
  padding: 3rem;
  color: goldenrod;
}
</style>