<template lang="html">
  <v-app>

    <sidenav></sidenav>
    <topnav is-login="true" sidenav="true"></topnav>

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
/*
 * Landing page dengan sidenav, komponennya:
 * - Topnav dengan nama aplikasi di kiri, menu di kanan + logout
 * - Konten statistik, grafik dan tabel
 * - Sidenav
 */
import Topnav from '@/components/layout/Topnav';
import Sidenav from '@/components/layout/Sidenav';

export default {
  name: 'home',
  components: {
    Topnav,
    Sidenav
  }
}
</script>
