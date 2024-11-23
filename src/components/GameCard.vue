<template>
  <b-card :title="game.name" :img-src="imageSrc" img-alt="Game Image" img-top>
    <b-card-text>
      Released: {{ game.released }}
    </b-card-text>
    <div class="d-flex justify-content-between align-items-center">
      <b-button variant="primary" @click="goToOpinions">Opinar</b-button>
      <div class="d-flex align-items-center">
        <b-button :variant="likes > 0 ? 'danger' : 'outline-danger'" @click="toggleLike">
          <b-icon icon="heart-fill"></b-icon>
        </b-button>
        <span class="ml-2">{{ likes }}</span>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ['game'],
  data() {
    return {
      imageSrc: this.game.background_image || 'path/to/placeholder-image.jpg',
      likes: 0,
    };
  },
  methods: {
    goToOpinions() {
      this.$router.push(`/opinions/${this.game.name}`);
    },
    toggleLike() {
      this.likes = this.likes > 0 ? 0 : 1;
      this.$emit('likeGame', this.game, this.likes);
    },
  },
  watch: {
    game: {
      immediate: true,
      handler(newGame) {
        this.imageSrc = newGame.background_image || 'path/to/placeholder-image.jpg';
      },
    },
  },
};
</script>

<style scoped>
b-card {
  max-width: 300px;
  margin: auto;
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.ml-2 {
  margin-left: 0.5rem;
}
</style>