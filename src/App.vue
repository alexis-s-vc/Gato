<template>
	<div>
	  <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold mb-4">
		TIC TAC TOE (GATO)
	  </h1>
  
	  <router-view />
	</div>
  </template>
  
  <style>
  body {
	background-image: url(./assets/wbgbc00430830_1.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100vh; 
  }
  
  h1 {
	text-shadow: 2px 2px 4px rgba(60, 175, 237, 0.9); 
  }
  
  @media (max-width: 768px) {
	h1 {	
	  font-size: 3rem;
	}
  }
  </style>
  