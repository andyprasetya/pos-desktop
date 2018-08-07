import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/pages/Welcome';
import Home from '@/components/pages/Home';
import Penjualan from '@/components/pages/Penjualan';
import Pembelian from '@/components/pages/Pembelian';
import Pemindahan from '@/components/pages/Pemindahan';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/penjualan',
      name: 'penjualan',
      components: { content: Penjualan }
    }, {
      path: '/pembelian',
      name: 'pembelian',
      component: Pembelian
    }, {
      path: '/pemindahan',
      name: 'pemindahan',
      component: Pemindahan
    }
  ]
});
