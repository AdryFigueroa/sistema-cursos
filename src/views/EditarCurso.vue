<template>
  <div class="editar-curso">
    <h1 class="mb-4 text-uppercase text-left font-weight-bold">Editar Curso</h1>

    <!-- Formulario de edición -->
    <b-form @submit.prevent="guardarCurso" class="bg-white p-4 rounded shadow-sm">
      <b-row>
        <!-- Nombre del Curso -->
        <b-col md="12">
          <b-form-group label="Nombre">
            <div class="input-group-custom">
              <b-form-input
                v-model="curso.nombre"
                maxlength="40"
                placeholder="Ingrese el nombre del curso"
                required
              ></b-form-input>
              <small class="counter">{{ curso.nombre.length }} / 40</small>
            </div>
          </b-form-group>
        </b-col>

        <!-- URL de la imagen -->
        <b-col md="12">
          <b-form-group label="URL de la imagen">
            <div class="input-group-custom">
              <b-form-input
                v-model="curso.img"
                placeholder="Ingrese la URL de la imagen"
                required
              ></b-form-input>
            </div>
          </b-form-group>
        </b-col>

        <!-- Cupos del Curso -->
        <b-col md="12">
          <b-form-group label="Cupos del curso">
            <b-form-input
              type="number"
              v-model.number="curso.cupos"
              min="1"
              required
              @change="validarCupos"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <!-- Inscritos -->
        <b-col md="12">
          <b-form-group label="Inscritos en el curso">
            <b-form-input
              type="number"
              v-model.number="curso.inscritos"
              :max="curso.cupos"
              min="0"
              @change="validarCupos"
              required
            ></b-form-input>
            <b-alert v-if="errorCupos" variant="danger" show>
              La cantidad de inscritos no puede superar los cupos disponibles.
            </b-alert>
          </b-form-group>
        </b-col>

        <!-- Duración del Curso -->
        <b-col md="12">
          <b-form-group label="Duración del curso">
            <b-form-input
              v-model="curso.duracion"
              maxlength="20"
              placeholder="Ej: 2 meses"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <!-- Fecha de Registro -->
        <b-col md="12">
          <b-form-group label="Fecha de registro">
            <b-form-input
              v-model="curso.fecha_registro"
              readonly
            ></b-form-input>
          </b-form-group>
        </b-col>

        <!-- Estado del Curso -->
        <b-col md="12">
          <b-form-group label="Estado del curso">
            <b-form-select
              v-model="curso.completado"
              @change="handleEstadoChange"
            >
              <option :value="false">Activo</option>
              <option :value="true">Terminado</option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <!-- Costo del Curso -->
        <b-col md="12">
          <b-form-group label="Costo del curso">
            <b-form-input
              type="number"
              v-model.number="curso.costo"
              min="0"
              placeholder="Ingrese el costo del curso"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <!-- Descripción -->
        <b-col md="12">
          <b-form-group label="Descripción del curso">
            <b-form-textarea
              v-model="curso.descripcion"
              rows="3"
              placeholder="Ingrese una descripción"
              required
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Botones -->
      <div class="d-flex justify-content-center mt-4">
        <b-button variant="success" type="submit" class="mx-2">Guardar</b-button>
        <b-button variant="danger" @click="volver" class="mx-2">Volver</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditarCurso",
  data() {
    return {
      curso: this.initializeCurso(),
      errorCupos: false,
    };
  },
  methods: {
    ...mapActions(["editarCurso"]),

    initializeCurso() {
      return {
        ...this.$store.state.cursos.find(
          (c) => c.id === parseInt(this.$route.params.id)
        ) || {},
      };
    },

    validarCupos() {
      if (this.curso.inscritos > this.curso.cupos) {
        this.errorCupos = true;
        this.curso.inscritos = this.curso.cupos;
      } else {
        this.errorCupos = false;
      }
    },

    handleEstadoChange() {
      if (this.curso.completado) {
        this.curso.inscritos = 0; // Reiniciar inscritos si el curso está terminado
      }
    },

    guardarCurso() {
      if (this.errorCupos) {
        this.$bvToast.toast("Revise los datos ingresados", {
          title: "Error",
          variant: "danger",
          solid: true,
        });
        return;
      }

      this.editarCurso(this.curso);

      this.$bvToast.toast("Curso actualizado exitosamente", {
        title: "Éxito",
        variant: "success",
        solid: true,
      });

      this.volver();
    },

    volver() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style scoped>
.input-group-custom {
  position: relative;
}

.counter {
  position: absolute;
  bottom: -18px;
  right: 0;
  font-size: 0.8rem;
  color: #6c757d;
}

.editar-curso h1 {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
}

.b-button {
  min-width: 120px;
}
</style>
