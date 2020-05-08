import Vue from 'vue';
import Router from 'vue-router';
import Heroes from './views/heroes.vue';
// import HeroDetail from './views/hero-detail.vue';
import About from './views/about.vue';
import Villains from './views/villains.vue';
import NotFound from './views/page-not-found.vue';

Vue.use(Router);
const parseProps = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/heroes' },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "bundle-about" */ './views/about.vue'),
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: () =>
        import(/* webpackChunkName: "bundle-heroes" */ './views/heroes.vue'),
    },
    {
      path: '/heroes/:id',
      name: 'hero-detail',
      component: () =>
        import(/* webpackChunkName: "bundle-heroes" */ './views/hero-detail.vue'),
      props: parseProps,
    },
    { path: '/villains', name: 'villains', component: Villains },
    { path: '*', component: NotFound },
  ],
});
