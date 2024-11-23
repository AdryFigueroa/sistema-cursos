<template>
  <b-container class="opinions">
    <b-row>
      <b-col cols="12" class="text-center my-4">
        <h1>Opiniones sobre {{ gameName }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="mb-4">
        <OpinionForm :opinionToEdit="opinionToEdit" @submitOpinion="handleSubmitOpinion" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div v-if="opinions.length === 0" class="text-center text-muted">
          <p>No existen opiniones para mostrar.</p>
        </div>
        <b-accordion v-else>
          <b-card v-for="opinion in opinions" :key="opinion.id" class="mb-2">
            <b-card-header class="d-flex justify-content-between align-items-center">
              <b-button v-b-toggle="'accordion-' + opinion.id" variant="link">
                {{ opinion.author }}
              </b-button>
              <div>
                <b-button variant="outline-primary" class="mr-2" @click="editOpinion(opinion)">Editar</b-button>
                <b-button variant="outline-danger" @click="deleteOpinion(opinion.id)">Eliminar</b-button>
              </div>
            </b-card-header>
            <b-collapse :id="'accordion-' + opinion.id">
              <b-card-body>
                {{ opinion.content }}
              </b-card-body>
            </b-collapse>
          </b-card>
        </b-accordion>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import OpinionForm from '@/components/OpinionForm.vue';

export default {
  name: 'OpinionsView',
  components: { OpinionForm },
  data() {
    return {
      gameName: this.$route.params.game,
      opinions: [], // Aquí deberías cargar las opiniones desde una fuente de datos
      opinionToEdit: null,
    };
  },
  methods: {
    handleSubmitOpinion(opinion) {
      const index = this.opinions.findIndex(op => op.id === opinion.id);
      if (index !== -1) {
        this.opinions.splice(index, 1, opinion);
      } else {
        this.opinions.push(opinion);
      }
      this.opinionToEdit = null;
    },
    editOpinion(opinion) {
      this.opinionToEdit = opinion;
    },
    deleteOpinion(opinionId) {
      this.opinions = this.opinions.filter(op => op.id !== opinionId);
    },
  },
};
</script>

<style scoped>
.opinions {
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 1rem;
  color: #007bff;
}

.b-card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.b-card-body {
  background-color: #ffffff;
}

.b-button {
  margin-right: 0.5rem;
}

.text-muted {
  color: #6c757d !important;
}
</style>