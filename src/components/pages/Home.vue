<template lang="html">
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="stat in stats" :key="stat.title">
        <v-card>
          <v-card-text class="stats">
            <strong>{{stat.title}}</strong>
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
          <v-card-title primary-title>
            <strong>Grafik Transaksi Bulan Agustus 2018</strong>
          </v-card-title>
          <v-card-text>
            <div id="grafik-transaksi" class="chart big"></div>
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
      stats: [
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
      ],
      chartData: [
        {
          date: "2018-08-01",
          jual: ""
        }
      ]
    };
  },
  methods: {
    handleCreateChart () {
      window.AmCharts.makeChart("grafik-transaksi", {
        "pathToImages": "https://www.amcharts.com/lib/3/images/",
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
          "id": "v1",
          "title": "Sales",
          "position": "left",
          "autoGridCount": false,
          "labelFunction": function(value) {
            return "$" + Math.round(value) + "M";
          }
        }, {
          "id": "v2",
          "title": "Market Days",
          "gridAlpha": 0,
          "position": "right",
          "autoGridCount": false
        }],
        "graphs": [{
          "id": "g3",
          "valueAxis": "v1",
          "lineColor": "#e1ede9",
          "fillColors": "#e1ede9",
          "fillAlphas": 1,
          "type": "column",
          "title": "Actual Sales",
          "valueField": "sales2",
          "clustered": false,
          "columnWidth": 0.5,
          "legendValueText": "$[[value]]M",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
          "id": "g4",
          "valueAxis": "v1",
          "lineColor": "#62cf73",
          "fillColors": "#62cf73",
          "fillAlphas": 1,
          "type": "column",
          "title": "Target Sales",
          "valueField": "sales1",
          "clustered": false,
          "columnWidth": 0.3,
          "legendValueText": "$[[value]]M",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
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
          "title": "Market Days",
          "useLineColorForBulletBorder": true,
          "valueField": "market1",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }, {
          "id": "g2",
          "valueAxis": "v2",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "lineColor": "#e1ede9",
          "type": "smoothedLine",
          "dashLength": 5,
          "title": "Market Days ALL",
          "useLineColorForBulletBorder": true,
          "valueField": "market2",
          "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
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
        "dataProvider": [{
          "date": "2013-01-01",
          "market1": 71,
          "market2": 75,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-02",
          "market1": 74,
          "market2": 78,
          "sales1": 4,
          "sales2": 6
        }, {
          "date": "2013-01-03",
          "market1": 78,
          "market2": 88,
          "sales1": 5,
          "sales2": 2
        }, {
          "date": "2013-01-04",
          "market1": 85,
          "market2": 89,
          "sales1": 8,
          "sales2": 9
        }, {
          "date": "2013-01-05",
          "market1": 82,
          "market2": 89,
          "sales1": 9,
          "sales2": 6
        }, {
          "date": "2013-01-06",
          "market1": 83,
          "market2": 85,
          "sales1": 3,
          "sales2": 5
        }, {
          "date": "2013-01-07",
          "market1": 88,
          "market2": 92,
          "sales1": 5,
          "sales2": 7
        }, {
          "date": "2013-01-08",
          "market1": 85,
          "market2": 90,
          "sales1": 7,
          "sales2": 6
        }, {
          "date": "2013-01-09",
          "market1": 85,
          "market2": 91,
          "sales1": 9,
          "sales2": 5
        }, {
          "date": "2013-01-10",
          "market1": 80,
          "market2": 84,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-11",
          "market1": 87,
          "market2": 92,
          "sales1": 4,
          "sales2": 8
        }, {
          "date": "2013-01-12",
          "market1": 84,
          "market2": 87,
          "sales1": 3,
          "sales2": 4
        }, {
          "date": "2013-01-13",
          "market1": 83,
          "market2": 88,
          "sales1": 5,
          "sales2": 7
        }, {
          "date": "2013-01-14",
          "market1": 84,
          "market2": 87,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-15",
          "market1": 81,
          "market2": 85,
          "sales1": 4,
          "sales2": 7
        }, {
          "date": "2013-01-16",
          "market1": 71,
          "market2": 75,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-17",
          "market1": 74,
          "market2": 78,
          "sales1": 4,
          "sales2": 6
        }, {
          "date": "2013-01-18",
          "market1": 78,
          "market2": 88,
          "sales1": 5,
          "sales2": 2
        }, {
          "date": "2013-01-19",
          "market1": 85,
          "market2": 89,
          "sales1": 8,
          "sales2": 9
        }, {
          "date": "2013-01-20",
          "market1": 82,
          "market2": 89,
          "sales1": 9,
          "sales2": 6
        }, {
          "date": "2013-01-21",
          "market1": 83,
          "market2": 85,
          "sales1": 3,
          "sales2": 5
        }, {
          "date": "2013-01-22",
          "market1": 88,
          "market2": 92,
          "sales1": 5,
          "sales2": 7
        }, {
          "date": "2013-01-23",
          "market1": 85,
          "market2": 90,
          "sales1": 7,
          "sales2": 6
        }, {
          "date": "2013-01-24",
          "market1": 85,
          "market2": 91,
          "sales1": 9,
          "sales2": 5
        }, {
          "date": "2013-01-25",
          "market1": 80,
          "market2": 84,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-26",
          "market1": 87,
          "market2": 92,
          "sales1": 4,
          "sales2": 8
        }, {
          "date": "2013-01-27",
          "market1": 84,
          "market2": 87,
          "sales1": 3,
          "sales2": 4
        }, {
          "date": "2013-01-28",
          "market1": 83,
          "market2": 88,
          "sales1": 5,
          "sales2": 7
        }, {
          "date": "2013-01-29",
          "market1": 84,
          "market2": 87,
          "sales1": 5,
          "sales2": 8
        }, {
          "date": "2013-01-30",
          "market1": 81,
          "market2": 85,
          "sales1": 4,
          "sales2": 7
        }]
      });
    }
  },
  mounted () {
    this.handleCreateChart();
  }
}
</script>

<style lang="css">
.stats > strong {
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
