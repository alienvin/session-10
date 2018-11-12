Vue.component('multibar-chart', {
  extends: VueChartJs.HorizontalBar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels:["Mediterranean Migrant Crisis","Protests of Islam critical PEGIDA movement in Dresden","Financial Crisis in Greece","Ukraine conflict between Russia and Western Countries"],
      datasets: [
        {
          label: 'Very high trust',
          backgroundColor: '#FF0080',
          data: [0.03,0.03,0.04,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
        {
          label: 'High trust',
          backgroundColor: '#642EFE',
          data: [0.45,0.37,0.31,0.3],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
        {
          label: 'No answer',
          backgroundColor: '#01DF3A',
          data: [0.02,0.04,0.02,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
        {
          label: 'Low trust',
          backgroundColor: '#FF8000',
          data: [0.41,0.41,0.46,0.52],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
        {
          label: 'Very low trust',
          backgroundColor: '#81DAF5',
          data: [0.09,0.15,0.17,0.14],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }      
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#c46060',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            stacked: true,
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            stacked: true,
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
