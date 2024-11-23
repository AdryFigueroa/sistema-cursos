<template>
    <div>
      <h1>Administración</h1>
      <input v-model="name" placeholder="Nombre" />
      <input v-model="surname" placeholder="Apellido" />
      <button @click="addCoins">Agregar Coins</button>
      <div :style="{ backgroundColor: barColor, width: barWidth + '%' }">{{ barWidth }}%</div>
      <div v-if="barWidth >= 100">Llegaste al máximo de tu crédito</div>
      <div v-if="likedGames.length">
        <h2>Juegos que te gustan</h2>
        <ul>
          <li v-for="game in likedGames" :key="game.id">{{ game.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminView',
    data() {
      return {
        name: '',
        surname: '',
        coins: 0,
        likedGames: [], // Aquí deberías cargar los juegos "me gusta" desde una fuente de datos
      };
    },
    computed: {
      barWidth() {
        return Math.min((this.coins / 50) * 100, 100);
      },
      barColor() {
        if (this.coins <= 20) return 'green';
        if (this.coins <= 30) return 'yellow';
        return 'red';
      },
    },
    methods: {
      addCoins() {
        if (this.coins < 50) {
          this.coins += 10;
        }
      },
    },
  };
  </script>