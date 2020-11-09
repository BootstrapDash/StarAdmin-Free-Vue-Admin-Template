<script lang="js">
import {
  Bar
} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
        datasets: [{
          label: 'Amount Due',
          data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
          backgroundColor: 'rgb(0,143,251)'
        }]
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          responsive: true,
          maintainAspectRatio: true,
          yAxes: [{
            display: false,
            gridLines: {
              color: 'rgba(0, 0, 0, 0.03)'
            }
          }],
          xAxes: [{
            display: false,
            barPercentage: 0.4,
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

<style scoped lang="scss">
.conversion-bar-chart {
}
</style>
