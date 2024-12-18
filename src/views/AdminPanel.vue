<template>
  <div>
    <!-- Título -->
    <h2 class="text-center my-4">Administración</h2>

    <!-- Botón para agregar curso -->
    <div class="text-center mb-4">
      <b-button variant="primary" @click="mostrarModalAgregar">
        AGREGAR CURSO
      </b-button>
    </div>

    <!-- Tabla de cursos -->
    <b-table :items="cursos" :fields="fields" striped hover class="mb-4">
      <template #cell(costo)="data">
        <span class="text-success font-weight-bold">${{ data.item.costo }}</span>
      </template>
      <template #cell(terminado)="data">
        <span
          :class="['badge', data.item.completado ? 'badge-success' : 'badge-secondary']"
        >
          {{ data.item.completado ? "Sí" : "No" }}
        </span>
      </template>
      <template #cell(acciones)="data">
        <b-button
          variant="warning"
          @click="editarCurso(data.item)"
          size="sm"
          class="mr-2"
        >
          ✏️
        </b-button>
        <b-button
          variant="danger"
          @click="confirmarEliminarCurso(data.item.id)"
          size="sm"
        >
          🗑️
        </b-button>
      </template>
    </b-table>

    <!-- Nueva Sección de Estadísticas -->
    <div class="mt-4">
      <h4 class="text-center mb-3">Estadísticas Generales</h4>
      <b-alert
        v-for="(stat, index) in estadisticas"
        :key="index"
        :variant="stat.variant"
        show
        class="d-flex align-items-center mb-2"
      >
        <font-awesome-icon :icon="stat.icon" class="mr-2" />
        {{ stat.text }}
      </b-alert>
    </div>

    <!-- Modal Agregar Curso -->
    <b-modal v-model="modalAgregar" title="Agregar Curso" hide-footer>
      <b-form @submit.prevent="validarYAgregarCurso">
        <!-- Nombre -->
        <b-form-group label="Nombre">
          <b-form-input v-model="nuevoCurso.nombre" maxlength="10" required></b-form-input>
        </b-form-group>

        <!-- URL de la imagen -->
        <b-form-group label="URL de la imagen">
          <b-form-input v-model="nuevoCurso.urlImagen" maxlength="10"></b-form-input>
        </b-form-group>

        <!-- Cupos -->
        <b-form-group label="Cupos del curso">
          <b-form-input type="number" v-model="nuevoCurso.cupos" min="1"></b-form-input>
        </b-form-group>

        <!-- Inscritos -->
        <b-form-group label="Inscritos en el curso">
          <b-form-input type="number" v-model="nuevoCurso.inscritos" min="0"></b-form-input>
        </b-form-group>

        <!-- Duración del curso -->
        <b-form-group label="Duración del curso">
          <b-form-input v-model="nuevoCurso.duracion" maxlength="10"></b-form-input>
        </b-form-group>

        <!-- Fecha de registro -->
        <b-form-group label="Fecha de registro">
          <b-form-input type="date" v-model="nuevoCurso.fechaRegistro"></b-form-input>
        </b-form-group>

        <!-- Costo del curso -->
        <b-form-group label="Costo del curso">
          <b-form-input type="number" v-model="nuevoCurso.costo" min="0"></b-form-input>
        </b-form-group>

        <!-- Descripción -->
        <b-form-group label="Descripción del curso">
          <b-form-textarea
            v-model="nuevoCurso.descripcion"
            rows="3"
            maxlength="200"
          ></b-form-textarea>
        </b-form-group>

        <!-- Botones -->
        <div class="d-flex justify-content-between">
          <b-button variant="success" type="submit">AGREGAR</b-button>
          <b-button variant="warning" @click="limpiarFormulario">LIMPIAR FORMULARIO</b-button>
          <b-button variant="danger" @click="cerrarModal">CANCELAR</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      modalAgregar: false,
      nuevoCurso: {
        nombre: "",
        urlImagen: "",
        cupos: 0,
        inscritos: 0,
        duracion: "",
        fechaRegistro: new Date().toISOString().substr(0, 10), // Fecha actual
        costo: 0,
        descripcion: "",
        completado: false,
      },
      fields: [
        { key: "nombre", label: "Curso" },
        { key: "cupos", label: "Cupos" },
        { key: "inscritos", label: "Inscritos" },
        { key: "costo", label: "Costo" },
        { key: "terminado", label: "Terminado" },
        { key: "acciones", label: "Acciones" },
      ],
    };
  },
  computed: {
    ...mapState(["cursos"]),
    estadisticas() {
      const totalCupos = this.cursos.reduce((sum, curso) => sum + curso.cupos, 0);
      const totalInscritos = this.cursos.reduce(
        (sum, curso) => sum + curso.inscritos,
        0
      );
      const cuposRestantes = totalCupos - totalInscritos;
      const cursosTerminados = this.cursos.filter((c) => c.completado).length;
      const cursosActivos = this.cursos.length - cursosTerminados;

      return [
        {
          text: `Cantidad total de alumnos permitidos: ${totalCupos} alumnos.`,
          variant: "info",
          icon: "users",
        },
        {
          text: `Cantidad total de alumnos inscritos: ${totalInscritos} alumnos.`,
          variant: "primary",
          icon: "user-check",
        },
        {
          text: `Cantidad total de cupos restantes: ${cuposRestantes} alumnos.`,
          variant: "danger",
          icon: "user-minus",
        },
        {
          text: `Cantidad total de cursos terminados: ${cursosTerminados} cursos.`,
          variant: "success",
          icon: "check-circle",
        },
        {
          text: `Cantidad total de cursos activos: ${cursosActivos} cursos.`,
          variant: "warning",
          icon: "users", // Ícono reemplazado
        },
        {
          text: `Cantidad total de cursos: ${this.cursos.length} cursos.`,
          variant: "secondary",
          icon: "book",
        },
      ];
    },
  },
  methods: {
    ...mapActions(["agregarCurso", "eliminarCurso"]),

    mostrarModalAgregar() {
      this.modalAgregar = true;
    },
    cerrarModal() {
      this.modalAgregar = false;
      this.limpiarFormulario();
    },
    validarYAgregarCurso() {
      if (this.nuevoCurso.inscritos > this.nuevoCurso.cupos) {
        alert("Error: Los inscritos no pueden superar los cupos.");
        return;
      }
      this.agregarCurso({ ...this.nuevoCurso });
      this.cerrarModal();
    },
    limpiarFormulario() {
      this.nuevoCurso = {
        nombre: "",
        urlImagen: "",
        cupos: 0,
        inscritos: 0,
        duracion: "",
        fechaRegistro: new Date().toISOString().substr(0, 10), costo: 0, descripcion: "",
      };
    },
    editarCurso(curso) {
      // Navega a la vista EditarCurso.vue y pasa los datos del curso seleccionado
      this.$router.push({
        name: "editar",
        params: { id: curso.id, curso: JSON.stringify(curso) },
      });
    },
    confirmarEliminarCurso(id) {
      const confirmacion = confirm("¿Estás seguro/a de eliminar el curso?");
      if (confirmacion) {
        this.eliminarCurso(id);
      }
    },
  },
};
</script>
