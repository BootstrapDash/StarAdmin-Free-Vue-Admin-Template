<script lang="js">
import {
  Line
} from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    labels: {
      type: Array,
      default: () => ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13']
    }
  },
  data () {
    return {
      gradient: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient.addColorStop(0, 'rgba(131, 144, 255, 0.5)')
    this.gradient.addColorStop(1, '#fff')
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'Profit',
        data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
        borderColor: '#6d7cfc',
        backgroundColor: this.gradient,
        borderWidth: 3,
        fill: true
      }]
    }, {
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0
        }
      },
      stepsize: 100
    })
  }
}
</script>

<style scoped lang="scss">
  .stats-line-graph-4 {

  }
</style>
