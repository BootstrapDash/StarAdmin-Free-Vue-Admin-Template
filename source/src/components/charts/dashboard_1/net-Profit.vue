<script lang='js'>
import {
  Radar
} from 'vue-chartjs'
export default {
  extends: Radar,
  data () {
    return {
      gradient: null,
      gradient2: null,
      datacollection: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Sales',
          backgroundColor: 'rgba(88, 208, 222,0.8)',
          borderColor: 'rgba(88, 208, 222,0.8)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(88, 208, 222,0.8)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [54, 45, 60, 70, 54, 75, 60, 54]
        }, {
          label: 'Orders',
          backgroundColor: 'rgba(150, 77, 247,1)',
          borderColor: 'rgba(150, 77, 247,1)',
          borderWidth: 0,
          fill: true,
          radius: 0,
          pointRadius: 0,
          pointBorderWidth: 0,
          pointBackgroundColor: 'rgba(150, 77, 247,1)',
          pointHoverRadius: 10,
          pointHitRadius: 5,
          data: [65, 75, 70, 80, 60, 80, 36, 60]
        }]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
            display: false
          },
          pointLabels: {
            fontSize: 14
          },
          angleLines: {
            color: '#e9ebf1'
          },
          gridLines: {
            color: '#e9ebf1'
          }
        },
        legend: false
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
  .net-Profit {

  }
</style>
