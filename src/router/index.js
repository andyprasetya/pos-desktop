import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/layout/Layout';
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
      path: '/pos',
      component: Layout,
      children: [
        {
          path: 'penjualan',
          name: 'penjualan',
          component: Penjualan,
          alias: '/penjualan'
        }, {
          path: 'pembelian',
          name: 'pembelian',
          component: Pembelian,
          alias: '/pembelian'
        }, {
          path: 'pemindahan',
          name: 'pemindahan',
          component: Pemindahan,
          alias: '/pemindahan'
        }, {
          // Default children
          path: '',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
});
