<script lang='js'>
import {
  Bar
} from 'vue-chartjs'
export default {
  extends: Bar,
  data () {
    var MarketingData1 = [145, 238, 148, 293, 242, 235, 256, 334]
    var MarketingData2 = [330, 380, 230, 400, 309, 430, 340, 310]
    var MarketingData3 = [375, 440, 284, 450, 386, 480, 400, 365]
    var MarketingData4 = [425, 480, 324, 490, 426, 520, 440, 405]
    return {
      gradient: null,
      gradient2: null,
      datacollection: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'OVERDUE',
          data: MarketingData1,
          backgroundColor: '#826af9',
          borderColor: '#826af9',
          borderWidth: 0
        }, {
          label: 'SNOOZED',
          data: MarketingData2,
          backgroundColor: '#9e86ff',
          borderColor: '#9e86ff',
          borderWidth: 0
        },
        {
          label: 'COMPLETED',
          data: MarketingData3,
          backgroundColor: '#d0aeff',
          borderColor: '#d0aeff',
          borderWidth: 0
        },
        {
          label: 'OVERDUE',
          data: MarketingData4,
          backgroundColor: '#f7d2ff',
          borderColor: '#f7d2ff',
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 400,
              display: true,
              beginAtZero: true,
              fontColor: '#212529',
              stepSize: 100
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
              fontColor: '#212529'
            },
            gridLines: {
              color: '#e9ebf1',
              display: true
            },
            barPercentage: 0.2
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
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient.addColorStop(0, 'rgba(131, 144, 255, 0.5)')
    this.gradient.addColorStop(1, '#fff')
    this.gradient2.addColorStop(0, 'rgba(131, 144, 255, 0.5)')
    this.gradient2.addColorStop(1, '#fff')
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

<style scoped lang='scss'>
  .market-overview-chart {

  }
</style>
