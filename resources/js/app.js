require('./bootstrap');


window.Vue = require('vue');

//import auth from './auth';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//import Vue from 'vue';
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

import routes from './routes';


/*let routes = [
    { path: '/', component:  require('./pages/Home.vue').default }
  ]*/
const router = new VueRouter({
    //mode: 'history',
    routes // short for `routes: routes`
})
/* router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!auth.loggedIn()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  }); */
  /* router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.isLoggedIn) {
        next({ name: 'Login' })
      } else {
        next() // go to wherever I'm going
      }
    } else {
      next() // does not require auth, make sure to always call next()!
    }
  }) */
Vue.prototype.$eventHub = new Vue();
//var eventHub = new Vue();
export const bus = new Vue();
import App from './App.vue';
Vue.component('spinner', require('vue-simple-spinner'));
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
