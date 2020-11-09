<script lang="js">
import {
  Doughnut
} from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      datacollection: {
        labels: [
          'Request',
          'Email'
        ],
        datasets: [{
          data: [80, 34, 100],
          backgroundColor: [
            'rgb(0,224,147)',
            'rgb(0,143,251)',
            'rgb(228,238,243)'
          ],
          borderColor: [
            'rgb(0,224,147)',
            'rgb(0,143,251)',
            'rgb(228,238,243)'
          ]
        }]
      },
      options: {
        cutoutPercentage: 70,
        animationEasing: 'easeOutBounce',
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        legend: {
          display: false
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
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

<style scoped lang="scss">
.users-doughnut-chart {
}
</style>
