<template>
  <b-form @submit.prevent="onSubmit" class="bg-white p-4 rounded shadow-sm">
    <!-- Primera fila de campos -->
    <b-row>
      <b-col md="6">
        <b-form-group label="Nombre del Curso">
          <b-form-input
            v-model="cursoForm.nombre"
            required
            maxlength="10"
            placeholder="Ingrese el nombre del curso"
          ></b-form-input>
          <small>{{ cursoForm.nombre.length }} / 10</small>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="URL de la imagen">
          <b-form-input
            v-model="cursoForm.img"
            required
            maxlength="10"
            placeholder="Ingrese la URL de la imagen"
          ></b-form-input>
          <small>{{ cursoForm.img.length }} / 10</small>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Segunda fila de campos -->
    <b-row>
      <b-col md="6">
        <b-form-group label="Cupos del curso">
          <b-form-input
            v-model.number="cursoForm.cupos"
            type="number"
            required
            placeholder="Ingrese los cupos del curso"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Inscritos en el curso">
          <b-form-input
            v-model.number="cursoForm.inscritos"
            type="number"
            placeholder="Ingrese la cantidad de inscritos"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Tercera fila de campos -->
    <b-row>
      <b-col md="6">
        <b-form-group label="Duración del curso">
          <b-form-input
            v-model="cursoForm.duracion"
            placeholder="Ingrese la duración del curso"
          ></b-form-input>
          <small>{{ cursoForm.duracion.length }} / 10</small>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Fecha de registro">
          <b-form-input
            v-model="cursoForm.fecha_registro"
            type="date"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Cuarta fila de campos -->
    <b-row>
      <b-col md="6">
        <b-form-group label="Costo del curso">
          <b-form-input
            v-model.number="cursoForm.costo"
            type="number"
            required
            placeholder="Ingrese el costo del curso"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group label="Descripción del curso">
          <b-form-textarea
            v-model="cursoForm.descripcion"
            rows="3"
            placeholder="Ingrese una descripción del curso"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Botones -->
    <div class="d-flex justify-content-between mt-4">
      <b-button type="submit" variant="success">
        Agregar
      </b-button>
      <b-button type="reset" variant="warning" @click="onReset">
        Limpiar Formulario
      </b-button>
      <b-button type="button" variant="danger" @click="$emit('cancel')">
        Cancelar
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  name: 'CursoForm',
  props: {
    curso: {
      type: Object,
      default: () => ({
        nombre: '',
        img: '',
        costo: 0,
        duracion: '',
        cupos: 1,
        inscritos: 0,
        fecha_registro: '',
        descripcion: ''
      })
    }
  },
  data() {
    return {
      cursoForm: { ...this.curso }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', { ...this.cursoForm })
    },
    onReset() {
      this.cursoForm = {
        nombre: '',
        img: '',
        costo: 0,
        duracion: '',
        cupos: 1,
        inscritos: 0,
        fecha_registro: '',
        descripcion: ''
      }
    }
  }
}
</script>

<style scoped>
small {
  display: block;
  color: #6c757d;
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>