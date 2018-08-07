<template lang="html">
  <div class="top-nav-wrapper">
    <v-toolbar app light>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" v-if="sidenav === 'true'"></v-toolbar-side-icon>
      <v-toolbar-title @click="clickTopMenu('welcome')">{{getTopNavTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="menu in visibleMenuItem">
          <v-menu bottom right offset-y origin="bottom right" transition="v-slide-y-transition" :key="menu.title" v-if="menu.items && menu.items.length > 0">
            <v-btn flat slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in menu.items" :key="item.title" @click="clickTopMenu(item.name)">
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-btn @click="clickTopMenu(menu.name)" :key="menu.title" flat v-else>{{menu.title}}</v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: [
    'isLogin',
    'sidenav'
  ],
  data: () => ({
    topMenus: [
      {
        title: 'Homepage',
        name: 'home',
        visibleLogin: true,
        visibleLogout: false
      }, {
        icon: 'more_vert',
        title: 'userMenus',
        name: 'user',
        visibleLogin: true,
        visibleLogout: false,
        items: [
          {
            title: 'Change Password',
            name: 'change-password'
          }, {
            title: 'Logout',
            name: 'logout'
          }
        ]
      }
    ]
  }),
  computed: {
    ...mapGetters ({
      userRealName: 'getRealName',
      storeName: 'getStoreName',
      appName: 'getAppName'
    }),

    drawer: {
      get () {
        return this.$store.state.menu.drawer;
      },
      set () {
        this.$store.commit('toggleDrawer');
      }
    },

    visibleMenuItem () {
      return (this.isLogin === 'true')
        ? this.topMenus.filter(item => {
          return item.visibleLogin;
        })
        : this.topMenus.filter(item => {
          return item.visibleLogout;
        });
    },

    getTopNavTitle () {
      return (this.isLogin === 'true') ? this.storeName : this.appName;
    }
  },
  methods: {
    clickTopMenu (menu) {
      if (menu === 'logout') {
        this.$router.push({
          name: 'welcome'
        });
      } else {
        this.$store.commit('setActiveMenuItem', menu);
        this.$router.push({
          name: menu
        });
      }
    }
  }
}
</script>

<style lang="css">

</style>
