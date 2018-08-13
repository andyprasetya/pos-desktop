<template lang="html">
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="stat in stats" :key="stat.title">
        <v-card>
          <v-card-text class="stats">
            <strong class="card-title">{{stat.title}}</strong>
            <div class="number">
              {{stat.sum}}
            </div>
            <span>{{stat.count}} Transaksi</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <strong class="card-title">Grafik Transaksi Bulan {{monthName}} {{year}}</strong>
            <div id="grafik-transaksi" class="chart"></div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';

export default {
  data () {
    return {
      monthName: '',
      year: 2018,
      stats: [],
      chartData: []
    };
  },
  methods: {
    handleGetData () {
      // Dummy data
      this.monthName = 'Agustus';
      this.year = 2018;
      this.stats = [
        {
          title: "Penjualan",
          sum: 12345678,
          count: 123
        },
        {
          title: "Pembelian",
          sum: 11223344,
          count: 22
        },
        {
          title: "Biaya",
          sum: 736384,
          count: 73
        },
        {
          title: "Kas",
          sum: 98393829,
          count: 39
        }
      ];

      this.chartData = [{
        "date": "2013-01-01",
        "biaya": 71,
        "kas": 75,
        "penjualan": 50,
        "pembelian": 80
      }, {
        "date": "2013-01-02",
        "biaya": 74,
        "kas": 78,
        "penjualan": 40,
        "pembelian": 60
      }, {
        "date": "2013-01-03",
        "biaya": 78,
        "kas": 88,
        "penjualan": 50,
        "pembelian": 20
      }, {
        "date": "2013-01-04",
        "biaya": 85,
        "kas": 89,
        "penjualan": 80,
        "pembelian": 90
      }, {
        "date": "2013-01-05",
        "biaya": 82,
        "kas": 89,
        "penjualan": 90,
        "pembelian": 60
      }, {
        "date": "2013-01-06",
        "biaya": 83,
        "kas": 85,
        "penjualan": 30,
        "pembelian": 50
      }, {
        "date": "2013-01-07",
        "biaya": 88,
        "kas": 92,
        "penjualan": 50,
        "pembelian": 70
      }, {
        "date": "2013-01-08",
        "biaya": 85,
        "kas": 90,
        "penjualan": 70,
        "pembelian": 60
      }, {
        "date": "2013-01-09",
        "biaya": 85,
        "kas": 91,
        "penjualan": 90,
        "pembelian": 50
      }, {
        "date": "2013-01-10",
        "biaya": 80,
        "kas": 84,
        "penjualan": 50,
        "pembelian": 80
      }, {
        "date": "2013-01-11",
        "biaya": 87,
        "kas": 92,
        "penjualan": 40,
        "pembelian": 80
      }, {
        "date": "2013-01-12",
        "biaya": 84,
        "kas": 87,
        "penjualan": 30,
        "pembelian": 40
      }, {
        "date": "2013-01-13",
        "biaya": 83,
        "kas": 88,
        "penjualan": 50,
        "pembelian": 70
      }, {
        "date": "2013-01-14",
        "biaya": 84,
        "kas": 87,
        "penjualan": 50,
        "pembelian": 80
      }, {
        "date": "2013-01-15",
        "biaya": 81,
        "kas": 85,
        "penjualan": 40,
        "pembelian": 70
      }, {
        "date": "2013-01-16",
        "biaya": 71,
        "kas": 75,
        "penjualan": 50,
        "pembelian": 80
      }, {
        "date": "2013-01-17",
        "biaya": 74,
        "kas": 78,
        "penjualan": 40,
        "pembelian": 60
      }, {
        "date": "2013-01-18",
        "biaya": 78,
        "kas": 88,
        "penjualan": 50,
        "pembelian": 20
      }, {
        "date": "2013-01-19",
        "biaya": 85,
        "kas": 89,
        "penjualan": 80,
        "pembelian": 90
      }, {
        "date": "2013-01-20",
        "biaya": 82,
        "kas": 89,
        "penjualan": 90,
        "pembelian": 60
      }, {
        "date": "2013-01-21",
        "biaya": 83,
        "kas": 85,
        "penjualan": 30,
        "pembelian": 50
      }, {
        "date": "2013-01-22",
        "biaya": 88,
        "kas": 92,
        "penjualan": 50,
        "pembelian": 70
      }, {
        "date": "2013-01-23",
        "biaya": 85,
        "kas": 90,
        "penjualan": 70,
        "pembelian": 60
      }, {
        "date": "2013-01-24",
        "biaya": 85,
        "kas": 91,
        "penjualan": 90,
        "pembelian": 50
      }, {
        "date": "2013-01-25",
        "biaya": 80,
        "kas": 84,
        "penjualan": 50,
        "pembelian": 80
      }, {
        "date": "2013-01-26",
        "biaya": 87,
        "kas": 92,
        "penjualan": 40,
        "pembelian": 80
      }, {
        "date": "2013-01-27",
        "biaya": 84,
        "kas": 87,
        "penjualan": 30,
        "pembelian": 40
      }, {
        "date": "2013-01-28",
        "biaya": 83,
        "kas": 88,
        "penjualan": 50,
        "pembelian": 70
      }, {
        "date": "2013-01-29",
        "biaya": 84,
        "kas": 87,
        "penjualan": 50,
        "pembelian": 80
      }, {
        "date": "2013-01-30",
        "biaya": 81,
        "kas": 85,
        "penjualan": 40,
        "pembelian": 70
      }];
      this.handleCreateChart();
    },

    handleCreateChart () {
      window.AmCharts.makeChart("grafik-transaksi", {
        "pathToImages": "https://www.amcharts.com/lib/3/images/",
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
          "id": "v1",
          "title": "Nilai",
          "position": "left",
          "autoGridCount": false,
          "labelFunction": function(value) {
            return "Rp." + Math.round(value);
          }
        }, {
          "id": "v2",
          "title": "Nilai",
          "gridAlpha": 0,
          "position": "right",
          "autoGridCount": false,
          "labelFunction": function(value) {
            return "Rp." + Math.round(value);
          }
        }],
        "graphs": [{
          "id": "g3",
          "valueAxis": "v1",
          "lineColor": "#DCE775",
          "fillColors": "#DCE775",
          "fillAlphas": 1,
          "type": "column",
          "title": "Pembelian",
          "valueField": "pembelian",
          "clustered": false,
          "columnWidth": 0.5,
          "legendValueText": "Rp.[[value]]",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>Rp.[[value]]</b>"
        }, {
          "id": "g4",
          "valueAxis": "v1",
          "lineColor": "#4CAF50",
          "fillColors": "#4CAF50",
          "fillAlphas": 1,
          "type": "column",
          "title": "Penjualan",
          "valueField": "penjualan",
          "clustered": false,
          "columnWidth": 0.3,
          "legendValueText": "Rp.[[value]]",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>Rp.[[value]]</b>"
        }, {
          "id": "g1",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "lineColor": "#20acd4",
          "type": "smoothedLine",
          "title": "Biaya",
          "useLineColorForBulletBorder": true,
          "valueField": "biaya",
          "legendValueText": "Rp.[[value]]",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>Rp.[[value]]</b>"
        }, {
          "id": "g2",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "lineColor": "#FF6F00",
          "type": "smoothedLine",
          "dashLength": 5,
          "title": "Kas",
          "useLineColorForBulletBorder": true,
          "valueField": "kas",
          "legendValueText": "Rp.[[value]]",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>Rp.[[value]]</b>"
        }],
        "chartScrollbar": {
          "graph": "g1",
          "oppositeAxis": false,
          "offset": 30,
          "scrollbarHeight": 50,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0,
          "graphLineAlpha": 0.5,
          "selectedGraphFillAlpha": 0,
          "selectedGraphLineAlpha": 1,
          "autoGridCount": true,
          "color": "#AAAAAA"
        },
        "chartCursor": {
          "pan": true,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "cursorAlpha": 0,
          "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true
        },
        "legend": {
          "useGraphSettings": true,
          "position": "top"
        },
        "balloon": {
          "borderThickness": 1,
          "shadowAlpha": 0
        },
        "export": {
         "enabled": true
        },
        "dataProvider": this.chartData
      });
    }
  },
  mounted () {
    this.handleGetData();
  }
}
</script>

<style lang="css">
.v-card .card-title {
  display: block;
  font-size: 16px;
  margin: 0 0 4px;
}
.stats > .number {
  font-size: 28px;
  margin: 0 0 4px;
  text-align: right;
}
.stats > span {
  display: block;
  text-align: right;
  font-style: italic;
}
.chart {
  height: 500px;
}
</style>
