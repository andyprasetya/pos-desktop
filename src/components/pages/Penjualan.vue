<template lang="html">
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex sm8>
        <v-card>
          <v-card-title primary-title>
            <h2 class="card-title">Form Penjualan</h2>
          </v-card-title>

          <v-card-text>
            <v-data-table
              :headers="kolom"
              :items="barang"
              hide-actions>
              <template slot="items" slot-scope="props">
                <td class="text-xs-right">{{ props.item.nomor }}</td>
                <td>{{ props.item.nama }}</td>
                <td class="text-xs-right">{{ props.item.jml }}</td>
                <td class="text-xs-right">{{ props.item.satuan }}</td>
                <td class="text-xs-right">{{ props.item.harga }}</td>
                <td class="text-xs-right">{{ props.item.total }}</td>
              </template>
            </v-data-table>

            <v-btn color="success">
              Tambah Barang Dijual
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm4>
        <v-card>
          <v-card-title primary-title>
            <h2 class="card-title">Rincian Penjualan</h2>
          </v-card-title>
          <v-card-text>
            <v-menu
              :close-on-content-click="false"
              v-model="showPicker"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px">
              <v-text-field
                slot="activator"
                v-model="computedDateFormatted"
                label="Tanggal Penjualan"
                append-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date" locale="id" @input="showPicker = false"></v-date-picker>
            </v-menu>

            <v-text-field
              box
              readonly
              suffix="Rp"
              v-model="totalHarga"
              label="Harga Total"
            ></v-text-field>

            <v-text-field
              outline
              suffix="Rp"
              v-model="totalDibayar"
              label="Total Dibayar"
            ></v-text-field>

            <v-text-field
              v-model="pembeli"
              label="Nama Pembeli"
            ></v-text-field>

            <v-btn block large color="error">
              <v-icon style="margin-right: 8px;">add_shopping_cart</v-icon>Simpan Data Penjualan
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {
  data () {
    return {
      showPicker: false,
      date: null,
      totalHarga: 0,
      totalDibayar: null,
      pembeli: '',
      kolom: [
        { text: 'No.', sortable: false, align: 'left', value: 'nomor' },
        { text: 'Nama Barang', sortable: false, align: 'left', value: 'nama' },
        { text: 'Jumlah', sortable: false, align: 'right', value: 'jml' },
        { text: 'Satuan', sortable: false, align: 'left', value: 'satuan' },
        { text: 'Harga', sortable: false, align: 'right', value: 'harga' },
        { text: 'Total', sortable: false, align: 'right', value: 'total' }
      ],
      barang: []
    };
  },

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date);
    }
  },

  methods: {
    formatDate (date) {
      if (!date) return null;

      return moment(this.date).format('DD/MM/YYYY');
    }
  },

  mounted () {
    this.date = moment().format('YYYY-MM-DD');
  }
}
</script>

<style lang="css">
</style>
