<template>
  <div class="home-view">
    <h1 class="text-center mb-4">Cursos Disponibles</h1>
    <b-container fluid>
      <b-row>
        <!-- Tarjetas de Cursos -->
        <b-col v-for="curso in cursos" :key="curso.id" lg="4" md="6" class="mb-4">
          <b-card
            :title="curso.nombre"
            :img-src="curso.img"
            :img-alt="curso.nombre"
            img-top
            class="h-100 shadow-sm"
          >
            <b-card-text>
              <div class="curso-info">
                <p>{{ curso.descripcion }}</p>
                <p class="mb-2"><strong>Duración:</strong> {{ curso.duracion }}</p>
                <p class="mb-2"><strong>Costo:</strong> ${{ curso.costo.toLocaleString() }}</p>
                <p class="mb-0">
                  <strong>Cupos disponibles:</strong>
                  {{ curso.cupos - curso.inscritos }}
                </p>
              </div>
            </b-card-text>
            <template #footer>
              <!-- Botón que abre el modal -->
              <b-button variant="primary" block @click="mostrarDetalles(curso)">
                Ver Detalles
              </b-button>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- Modal para mostrar detalles del curso -->
    <b-modal
      id="modal-detalles"
      hide-footer
      centered
      @hidden="cursoSeleccionado = {}"
    >
      <!-- Cabecera personalizada -->
      <template #modal-header>
        <div class="w-100 d-flex justify-content-between align-items-center">
          <h5 class="mb-0 mx-auto">{{ cursoSeleccionado.nombre }}</h5>
          <!-- Botón X de cerrar -->
          <b-button variant="close" aria-label="Cerrar" @click="$bvModal.hide('modal-detalles')">
            &times;
          </b-button>
        </div>
      </template>

      <!-- Contenido centrado del modal -->
      <div v-if="cursoSeleccionado.id" class="text-center">
        <b-img
          :src="cursoSeleccionado.img"
          :alt="cursoSeleccionado.nombre"
          fluid
          class="mb-3 mx-auto"
          style="max-width: 300px;"
        ></b-img>
        <p><strong>Descripción:</strong> {{ cursoSeleccionado.descripcion }}</p>
        <p><strong>Duración:</strong> {{ cursoSeleccionado.duracion }}</p>
        <p><strong>Costo:</strong> ${{ cursoSeleccionado.costo.toLocaleString() }}</p>
        <p>
          <strong>Cupos disponibles:</strong>
          {{ cursoSeleccionado.cupos - cursoSeleccionado.inscritos }}
        </p>
        <!-- Botón Volver -->
        <b-button variant="secondary" block @click="$bvModal.hide('modal-detalles')">
          Volver
        </b-button>
      </div>
      <div v-else>
        <p class="text-center">Cargando detalles...</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      cursoSeleccionado: {} // Almacena el curso seleccionado
    }
  },
  computed: {
    ...mapState(['cursos'])
  },
  methods: {
    // Muestra el modal con los detalles del curso seleccionado
    mostrarDetalles(curso) {
      this.cursoSeleccionado = curso
      this.$bvModal.show('modal-detalles')
    }
  }
}
</script>

<style scoped>
/* Ajusta el botón de cerrar para posicionarlo en la esquina derecha */
.b-button.close {
  font-size: 1.5rem;
  line-height: 1;
  color: #000;
  opacity: 0.5;
}
.b-button.close:hover {
  opacity: 1;
}
</style>
