import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      activeMenu: 'home',
    },
  },
  {
    path: '/tech',
    name: 'Tech',
    component: () => import('../views/Tech.vue'),
    meta: {
      activeMenu: 'tech',
    },
  }, {
    path: '/tech/:id',
    name: 'techDetail',
    component: () => import('../components/TechDetail'),
    meta: {
      activeMenu: 'tech',
    },
  },
  {
    path: '/serve',
    name: 'Serve',
    component: () => import('../views/Serve.vue'),
    meta: {
      activeMenu: 'serve',
    },
  }, {
    path: '/serve/:id',
    name: 'ServeDetail',
    component: () => import('../components/ServeDetail'),
    meta: {
      activeMenu: 'serve',
    },
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import('../views/Case.vue'),
    meta: {
      activeMenu: 'case',
    },
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue'),
    meta: {
      activeMenu: 'support',
    },
  }, {
    path: '/support/:id',
    name: 'SupportDetail',
    // component: () => import('../views/Detail.vue'),
    component: () => import('../components/SupportDetail'),
    meta: {
      activeMenu: 'support',
    },
  }, 
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      activeMenu: 'about',
    },
  },
];
const router = new VueRouter({
  routes,
});
export default router;