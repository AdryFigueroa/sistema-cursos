<template>
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
          <p class="mb-2"><strong>Costo:</strong> {{ formatCurrency(curso.costo) }}</p>
          <p class="mb-0">
            <strong>Cupos disponibles:</strong> 
            {{ cuposDisponibles }}
          </p>
        </div>
      </b-card-text>
      <template #footer>
        <b-button variant="primary" block>Ver Detalles</b-button>
      </template>
    </b-card>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import { formatCurrency } from '@/utils/formatters'
  
  export default {
    name: 'CursoCard',
    props: {
      curso: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters('cursos', ['getCuposDisponibles']),
      cuposDisponibles() {
        return this.getCuposDisponibles(this.curso.id)
      }
    },
    methods: {
      formatCurrency
    }
  }
  </script>