<template>
    <div>
      <div v-if="opinions.length === 0">No hay opiniones para mostrar</div>
      <div v-else>
        <div v-for="opinion in opinions" :key="opinion.id">
          <h3>{{ opinion.author }}</h3>
          <p>{{ opinion.content }}</p>
          <button @click="$emit('editOpinion', opinion)">Editar</button>
          <button @click="$emit('deleteOpinion', opinion.id)">Eliminar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['opinions'],
  };
  </script>
  views/Admin.vue
  <template>
    <div>
      <h1>Administración</h1>
      <input v-model="name" placeholder="Nombre" />
      <input v-model="surname" placeholder="Apellido" />
      <button @click="addCoins">Agregar Coins</button>
      <div :style="{ backgroundColor: barColor, width: barWidth + '%' }">{{ barWidth }}%</div>
      <div v-if="barWidth >= 100">Llegaste al máximo de tu crédito</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        surname: '',
        coins: 0,
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