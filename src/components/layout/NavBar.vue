<template>
  <b-navbar type="dark" class="custom-navbar" fixed="top">
    <b-container fluid>
      <!-- Sección Izquierda: Botón "Sandwich" y Título -->
      <div class="d-flex align-items-center">
        <!-- Botón "Sandwich" siempre visible -->
        <b-button
          v-b-toggle.sandwich-menu
          variant="link"
          class="p-0"
          aria-label="Toggle Menu"
        >
          <b-icon-list scale="1.5" class="text-white"></b-icon-list>
        </b-button>
        <!-- Espacio entre botón y nombre -->
        <span class="mx-2"></span>
        <!-- Título -->
        <b-navbar-brand class="text-white mb-0">Cursos AlfaWeb</b-navbar-brand>
      </div>

      <!-- Menú "Sandwich" Desplegable Vertical -->
      <b-collapse id="sandwich-menu" class="menu-collapse">
        <b-navbar-nav class="mt-2">
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/admin">Administración</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <!-- Sección Derecha: Íconos -->
      <b-navbar-nav class="ml-auto align-items-center">
        <!-- Icono Casa -->
        <b-nav-item to="/" class="text-white">
          <b-icon-house-fill scale="1.5"></b-icon-house-fill>
        </b-nav-item>
        <!-- Icono Llave (Administración) -->
        <b-nav-item to="/admin" class="text-white">
          <b-icon-wrench scale="1.5"></b-icon-wrench>
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import { BIconList, BIconHouseFill, BIconWrench } from "bootstrap-vue";

export default {
  name: "NavBar",
  components: {
    BIconList,
    BIconHouseFill,
    BIconWrench,
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: #6a1b9a; /* Color morado sólido */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

.text-white {
  color: #ffffff !important;
}

.b-navbar-toggle {
  border: none;
}

.menu-collapse {
  background-color: #6a1b9a; /* Fondo del menú desplegable */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.b-navbar-nav .b-nav-item {
  color: #ffffff;
}

.b-navbar-nav .b-nav-item:hover {
  color: #d1c4e9; /* Color más claro al pasar el cursor */
}
</style>
