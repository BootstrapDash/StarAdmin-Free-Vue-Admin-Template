<script lang="js">
import {
  Line
} from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    labels: {
      type: Array,
      default: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
  },
  data () {
    return {
      gradient: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 100, 200, 0)
    this.gradient.addColorStop(0, '#fa5539')
    this.gradient.addColorStop(1, '#fa3252')
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'Sessions',
        data: [320, 280, 300, 280, 300, 270, 350],
        backgroundColor: this.gradient,
        borderColor: '#fa394e',
        borderWidth: 0,
        pointBackgroundColor: this.gradient,
        pointRadius: 7,
        pointBorderWidth: 3,
        pointBorderColor: '#fff',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#fa394e',
        pointHoverBorderColor: '#fa394e',
        pointHoverBorderWidth: 2,
        pointHitRadius: 7
      }]
    }, {
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true
      },
      elements: {
        point: {
          radius: 0
        }
      },
      layout: {
        padding: {
          left: -10,
          right: 0,
          top: 0,
          bottom: -10
        }
      },
      legend: false,
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }]
      }
    })
  }
}
</script>

<style scoped lang='scss'>
  .total-transaction {

  }
</style>
