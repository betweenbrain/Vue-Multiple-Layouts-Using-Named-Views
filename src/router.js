import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Home from './views/Home.vue';
import Sidebar from './components/Sidebar.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: About,
        layout: Sidebar,
      },
    },
  ],
});
