<script setup>
import { ref, computed } from 'vue'

const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

let winningCells = [] 

const CalculateWinner = (board) => {
  const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
  winningCells = [] 

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winningCells = [a, b, c]
      return board[a]
    }
  }

  return null
}

const winner = computed(() => CalculateWinner(board.value.flat()))

const MakeMove = (x, y) => {
  if (winner.value) return

  if (board.value[x][y]) return

  board.value[x][y] = player.value

  player.value = player.value === 'X' ? 'O' : 'X'

  if (player.value === 'O' && !winner.value) {
    MakeRandomMove()
  }
}

const ResetGame = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  player.value = 'X'
}

const MakeRandomMove = () => {
  if (winner.value) return

  const emptyCells = []
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (!board.value[x][y]) {
        emptyCells.push({ x, y })
      }
    }
  }

  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length)
    const { x, y } = emptyCells[randomIndex]
    MakeMove(x, y)
  }
}
</script>

<template>
  <main class="pt-8 text-center">
    <h1 class="mb-8 text-3xl font-bold uppercase">GATO (TIC TAC TOE)</h1>

    <h3 class="text-xl mb-4">TURNO JUGADOR {{ player }}</h3>

    <div class="flex flex-col items-center mb-8">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <div
          v-for="(cell, y) in row"
          :key="y"
          @click="MakeMove(x, y)"
          :class="[
            'border border-white w-24 h-24 flex items-center justify-center material-icons-outlined text-4xl cursor-pointer',
            cell === 'X' ? 'text-pink-500' : 'text-blue-400',
            winningCells.includes(x * 3 + y) && winner ? 'bg-green-500' : '', // Cambia el color de las celdas ganadoras
            'hover:bg-gray-700'
          ]"
        >
          {{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2 v-if="winner" class="text-6xl font-bold mb-8">JUGADOR '{{ winner }}' GANA!</h2>
      <button @click="ResetGame" class="p1-4 py-2 bg-pink-500 rounded uppercase font-bold hover:bg-pink-600 duration-300" style="margin:1rem; padding:2rem"> REINICIAR </button>
      <router-link to="/intoduccion" class="p1-4 py-2 bg-pink-500 rounded uppercase font-bold hover:bg-pink-600 duration-300" style="margin:1rem; padding:2rem"> REGRESAR </router-link>
    </div>
  </main>
</template>

<style>
body {
  @apply bg-gray-800 text-white;
}

.bg-green-500 {
  background-color: rgba(0, 255, 255, 0.707);
}
</style>