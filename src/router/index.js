import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import OpinionsView from '../views/OpinionsView.vue';
import AdminView from '../views/AdminView.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/opinions/:game', name: 'Opinions', component: OpinionsView },
  { path: '/admin', name: 'Admin', component: AdminView },
  { path: '*', name: 'NotFound', component: NotFound },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;