<template lang="html">
  <v-app>

    <topnav is-login="false" sidenav="false"></topnav>

    <v-content class="grey lighten-2" light>

      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
            <v-card>
              <v-card-text>
                <h1 class="headline">Form Login</h1>
                <p>Masukkan email dan password untuk login.</p>
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  autofocus
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" @click="handleSubmitLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

      </v-container>

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
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Topnav
  },
  methods: {
    handleSubmitLogin () {
      // console.log(this.email, this.password);
      this.$router.push({
        name: 'home'
      });
    }
  }
}
</script>
