import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/pages/Welcome';
import Home from '@/components/pages/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
});
