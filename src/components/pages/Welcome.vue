<template lang="html">
  <v-app>

    <topnav is-login="false" sidenav="false"></topnav>

    <v-content class="grey lighten-2" light>

      <div class="">
        Login form
      </div>

    </v-content>

  </v-app>
</template>

<script>
/*
 * Topnav dengan nama aplikasi di kiri
 * Konten form login
 */
import Topnav from '@/components/layout/Topnav';

export default {
  name: 'welcome',
  components: {
    Topnav
  }
}
</script>
