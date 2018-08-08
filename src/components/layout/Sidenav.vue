<template lang="html">
  <v-navigation-drawer class="blue-grey darken-4" width="250" dark fixed :mini-variant.sync="mini" :value="drawer" app>

    <v-list class="pa-0">
      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img src="https://dummyimage.com/60x60/000000/fff.jpg&text=Logo">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{appName}}</v-list-tile-title>
        </v-list-tile-content>

        <v-spacer></v-spacer>

        <v-list-tile-action style="min-width:36px;">
          <v-btn icon @click.native.stop="toggleMiniSidenav">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-list>
      <template v-for="item in items">

        <v-list-group
          v-if="item.items && item.items.length > 0"
          v-model="item.active"
          :key="item.name"
          no-action>
          <v-list-tile slot="activator">
            <v-list-tile-action class="pr-1 pl-2 mr-1">
              <v-icon :class="isActiveParentMenu(item.name) ? 'orange--text' : ''" :title="item.title"  dark v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content :class="isActiveParentMenu(item.name)?'orange--text': ''">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" :key="subItem.name" @click="clickMenu(subItem)">
            <v-list-tile-content :class="isActiveMenuItem(subItem.name)?'orange--text': ''">
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-else
          :key="item.name"
          @click="clickMenu(item)">
          <v-list-tile-action class="pr-1 pl-2 mr-1">
            <v-icon :class="isActiveMenuItem(item.name)?'orange--text': ''" :title="item.title"  dark v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content :class="isActiveMenuItem(item.name)?'orange--text': ''">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </template>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      items: [
        {
          icon: 'local_activity',
          title: 'Penjualan',
          name: 'penjualan'
        },
        {
          icon: 'school',
          title: 'Pembelian',
          name: 'pembelian'
        },
        {
          icon: 'directions_run',
          title: 'Pemindahan',
          name: 'pemindahan'
        },
        {
          icon: 'healing',
          title: 'Transaksi Lainnya',
          name: 'transaksi-lainnya'
        },
        {
          icon: 'content_cut',
          title: 'Laporan',
          name: 'laporan',
          items: [
            { title: 'Penjualan', name: 'laporan-penjualan' },
            { title: 'Pembelian', name: 'laporan-pembelian' },
            { title: 'Pemindahan', name: 'laporan-pemindahan' }
          ]
        },
        {
          icon: 'local_offer',
          title: 'Konfigurasi',
          name: 'konfigurasi'
        }
      ]
    };
  },
  computed: {
    ...mapGetters ({
      activeMenuItem: 'getActiveMenuItem',
      appName: 'getAppName'
    }),

    mini: {
      get () {
        return this.$store.state.menu.mini;
      },
      set () {
        this.$store.commit('toggleMini');
      }
    },

    drawer: {
      get () {
        return this.$store.state.menu.drawer;
      }
    }
  },
  methods: {
    clickMenu (menuItem) {
      this.$store.commit('setActiveMenuItem', menuItem.name);

      for (var i in this.items) {
        if (!this.isActiveParentMenu(this.items[i].name) && this.items[i].active) {
          this.items[i].active = false;
        }
      }

      this.$router.push({
        name: menuItem.name
      });
    },
    toggleMiniSidenav () {
      this.mini = !this.mini;

      for (let i in this.items) {
        if (this.items[i].items) {
          this.items[i].active = false;
        }
      }
    },
    isActiveMenuItem (name) {
      return this.activeMenuItem === name;
    },
    isActiveParentMenu (name) {
      let self = this;
      let matchedChild = [];
      for (let i in this.items) {
        if (this.items[i].name === name && this.items[i].items) {
          matchedChild = this.items[i].items.filter(function (data) {
            return self.isActiveMenuItem(data.name);
          });
        }
      }
      return matchedChild.length > 0;
    }
  }
}
</script>

<style lang="css">
</style>
