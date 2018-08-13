<template lang="html">
  <v-app>

    <sidenav></sidenav>
    <topnav is-login="true" sidenav="true"></topnav>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
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
