<script lang="js">
import {
  Line
} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
          label: 'First Dataset',
          data: [
            {
              x: -10,
              y: 0
            },
            {
              x: 0,
              y: 3
            },
            {
              x: -25,
              y: 5
            },
            {
              x: 40,
              y: 5
            }
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Second Dataset',
          data: [
            {
              x: 10,
              y: 5
            },
            {
              x: 20,
              y: -30
            },
            {
              x: -25,
              y: 15
            },
            {
              x: -10,
              y: 5
            }
          ],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
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
  .scatter-chart {}
</style>
