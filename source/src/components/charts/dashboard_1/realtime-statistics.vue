
<script lang='js'>
import {
  Bar
} from 'vue-chartjs'
export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Profit',
          data: [330, 380, 230, 400, 309, 530, 340],
          backgroundColor: '#0f5bff',
          borderColor: '#0f5bff',
          borderWidth: 0
        },
        {
          label: 'Target',
          data: [600, 600, 600, 600, 600, 600, 600],
          backgroundColor: '#e5e9f2',
          borderColor: '#e5e9f2',
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            left: 0,
            right: 25,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              display: false,
              beginAtZero: true,
              fontColor: '#354168'
            },
            gridLines: {
              color: 'rgba(0, 0, 0, 0)',
              display: false
            },
            barPercentage: 0.5
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

<style scoped lang='scss'>
  .realtime-statistics {

  }
</style>
