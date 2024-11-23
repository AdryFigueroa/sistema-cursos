<template>
  <b-form @submit.prevent="submitOpinion">
    <b-form-group label="Tu nombre" label-for="author-input">
      <b-form-input id="author-input" v-model="author" required></b-form-input>
    </b-form-group>
    <b-form-group label="Tu opinión" label-for="content-input">
      <b-form-textarea id="content-input" v-model="content" required></b-form-textarea>
    </b-form-group>
    <b-button type="submit" variant="primary">{{ isEditing ? 'Actualizar' : 'Agregar' }}</b-button>
    <b-alert v-if="showAlert" variant="success" dismissible @dismissed="showAlert = false">
      Opinión actualizada
    </b-alert>
  </b-form>
</template>

<script>
export default {
  props: ['opinionToEdit'],
  data() {
    return {
      author: '',
      content: '',
      isEditing: false,
      showAlert: false,
    };
  },
  watch: {
    opinionToEdit: {
      immediate: true,
      handler(newOpinion) {
        if (newOpinion) {
          this.author = newOpinion.author;
          this.content = newOpinion.content;
          this.isEditing = true;
        } else {
          this.isEditing = false;
        }
      },
    },
  },
  methods: {
    submitOpinion() {
      const opinion = {
        id: this.isEditing ? this.opinionToEdit.id : Date.now(),
        author: this.author,
        content: this.content,
      };
      this.$emit('submitOpinion', opinion);
      this.author = '';
      this.content = '';
      this.isEditing = false;
      this.showAlert = true;
    },
  },
};
</script>

<style scoped>
.b-form-group {
  margin-bottom: 1rem;
}

.b-button {
  margin-top: 1rem;
}

.b-alert {
  margin-top: 1rem;
}
</style>