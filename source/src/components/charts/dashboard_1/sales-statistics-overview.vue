<script lang='js'>
import {
  Line
} from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    labels: {
      type: Array,
      default: () => ['Jan 1', 'Jan 7', 'Jan 14', 'Jan 21', 'Jan 28', 'Feb 4', 'Feb 11', 'Feb 18']
    }
  },
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(102,78,235, 0.2)')
    this.gradient.addColorStop(1, 'rgba(255,255,255, 0.0)')
    this.gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.01)')
    this.gradient2.addColorStop(1, '#14c671')
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'Revenue',
        data: [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170],
        borderColor: '#8762e0',
        backgroundColor: this.gradient,
        borderWidth: 2
      }, {
        label: 'Sales',
        data: [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135],
        borderColor: '#5ed2a1',
        backgroundColor: this.gradient2,
        borderWidth: 2
      }]
    }, {
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true
      },
      elements: {
        point: {
          radius: 3,
          backgroundColor: '#fff'
        },
        line: {
          tension: 0
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      legend: false,
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            display: false,
            beginAtZero: false
          },
          gridLines: {
            drawBorder: false
          }
        }],
        yAxes: [{
          ticks: {
            max: 200,
            min: 0,
            stepSize: 50,
            fontColor: '#858585',
            beginAtZero: false
          },
          gridLines: {
            color: '#e2e6ec',
            display: true,
            drawBorder: false
          }
        }]
      }
    })
  }
}
</script>

<style scoped lang='scss'>
  .sales-statistics-overview {

  }
</style>
