# 📜 Sistema Administrador de Cursos con Vue.js

## 🚀 Descripción del Proyecto

Bienvenido al **Sistema Administrador de Cursos**, un proyecto desarrollado con **Vue.js** enfocado en ofrecer una plataforma intuitiva y eficiente para la gestión de cursos. Este sistema permite realizar tareas clave como visualizar, agregar, editar y eliminar cursos de manera ágil.

El desarrollo ha sido realizado con un enfoque práctico, priorizando la **experiencia del usuario**, la claridad en la gestión de información y un diseño responsivo moderno.

---

## 🛠️ Tecnologías Utilizadas

- **Vue.js**: Framework principal para la construcción de la interfaz. Vue2.
- **Vuex**: Gestión centralizada del estado de la aplicación.
- **Vue Router**: Navegación eficiente entre vistas.
- **BoostrapVue**: Librería de componentes UI para una interfaz moderna y adaptable.
- **JavaScript (ES6)**: Lógica principal de la aplicación.

---

## 🌟 Funcionalidades Principales

### 📊 **Vista Home**
- Presentación de todos los cursos en **tarjetas interactivas**.
- Información clave como nombre, imagen, cupos y estado del curso.
- Acceso rápido a la sección de administración.

### 🤝🏼 **Interfaz de Administración**
- Visualización de cursos en una tabla organizada con botones de **Agregar**, **Editar** y **Eliminar**.
- Resumen estadístico general:
  - Total de alumnos permitidos.
  - Total de alumnos inscritos.
  - Cupos restantes.
  - Cursos activos y terminados.

### ➕ **Agregar Curso**
- Modal con un formulario validado que solicita:
  - Nombre, URL de imagen, cupos, inscritos, duración, costo y descripción.
- **Validación inteligente**:
  - Los inscritos no pueden superar los cupos disponibles.

### ✏️ **Editar Curso**
- Formulario prellenado con los datos actuales del curso.
- **Reglas de edición**:
  - Los inscritos no pueden superar los cupos.
  - Marcar un curso como "Terminado" ajusta automáticamente los inscritos a cero.

### 🗑️ **Eliminar Curso**
- Confirmación mediante un **modal interactivo** para evitar eliminaciones accidentales.
- Actualización en tiempo real de la lista de cursos.

---

## 🌈 Diseño y Capturas de Pantalla

- **Home**: Tarjetas con información visual de los cursos.
- **Administración**: Tabla de cursos con opciones de gestión.
- **Agregar Curso**: Formulario validado en un modal.
- **Editar Curso**: Edición dinámica con validación.

---

## 📚 Instalación y Ejecución

### 1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/AdryFigueroa/sistema-cursos.git
   ```

### 2. **Instalar las dependencias**:
   ```bash
   npm install
   ```

### 3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run serve
   ```

### 4. **Abrir en el navegador**:
   ```bash
   http://localhost:8080
   ```

---

## 📂 Estructura del Proyecto

```bash
src/
│── assets/          # Recursos estáticos (CSS, imágenes).
│── components/      # Componentes reutilizables (NavBar, ConfirmDialog).
│── views/           # Vistas principales (Home, AdminPanel, EditarCurso).
│── store/           # Configuración de Vuex para el estado global.
│── router/          # Definición de rutas con Vue Router.
│── utils/           # Funciones y utilidades (formatters.js).
│── App.vue          # Componente principal.
└── main.js          # Punto de entrada del proyecto.
```

---

## 🔮 Mejoras a Futuro

- Implementación de una **base de datos** para persistencia de información.
- Sistema de **autenticación** y gestión de roles administrativos.
- Filtros avanzados y sistema de **búsqueda de cursos**.
- Generación de **reportes exportables** en formatos PDF o Excel.

---

## 🤝 Autor

Este proyecto fue creado con dedicación, pasión y un enfoque práctico para el desarrollo web moderno por **Adriana Figueroa**.

Siéntete libre de colaborar, sugerir mejoras o contactarme para nuevas ideas. ¡Gracias por visitar el repositorio! 🚀

---

