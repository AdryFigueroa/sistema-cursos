import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminPanel from '../views/AdminPanel.vue'
import EditarCurso from '../views/EditarCurso.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPanel
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarCurso
    }
  ]
})