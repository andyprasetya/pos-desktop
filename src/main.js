import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import store from './store';
import router from './router';
import App from './App.vue';

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
