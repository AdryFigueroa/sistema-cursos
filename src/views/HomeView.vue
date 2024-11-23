<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#">
        <img src="../assets/iconogamer.jpeg" alt="" class="navbar-icon">
        Games Opinion
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">
            <b-icon icon="house-fill"></b-icon> Home
          </b-nav-item>
          <b-nav-item @click="toggleAdminSection">
            <b-icon icon="gear-fill"></b-icon> Administración
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container class="home">
      <b-row>
        
      </b-row>
      <b-row>
        <b-col v-for="game in games" :key="game.id" cols="12" md="6" lg="4" class="mb-4">
          <GameCard :game="game" @likeGame="handleLikeGame" />
        </b-col>
      </b-row>
      <div v-if="loading" class="text-center">
        <b-spinner label="Cargando..."></b-spinner>
      </div>
      <div v-if="error" class="text-center text-danger">
        <p>Error loading games: {{ error }}</p>
      </div>
      <b-row v-if="showAdminSection">
        <b-col cols="12">
          <AdminView />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
import AdminView from '@/views/AdminView.vue';
import { fetchGames } from '@/api';

export default {
  name: 'HomeView',
  components: { GameCard, AdminView },
  data() {
    return {
      games: [],
      loading: true,
      error: null,
      likedGames: [],
      showAdminSection: false,
    };
  },
  async created() {
    try {
      this.games = await fetchGames();
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    handleLikeGame(game, likes) {
      const likedGame = this.likedGames.find(g => g.id === game.id);
      if (likedGame) {
        likedGame.likes = likes;
      } else {
        this.likedGames.push({ ...game, likes });
      }
      console.log('Liked games:', this.likedGames);
    },
    toggleAdminSection() {
      this.showAdminSection = !this.showAdminSection;
    },
  },
};
</script>

<style scoped>
.navbar-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.home {
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 1rem;
}
</style>