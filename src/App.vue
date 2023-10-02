<template>
	<div>
	  <header class="page-header">
		GATO (TIC TAC TOE)
	  </header>
  
	  <div>
		<div class="button-container">
		  <router-link to="/" class="">Home</router-link>
		  <router-link to="/tic-tac-toe" class="custom-button">Jugador vs. Jugador</router-link>
		  
		</div>
  
		
		
  
		<router-view />
	  </div>
	</div>
  </template>
 