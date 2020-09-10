<template lang="html">
  <section class="chartjs">
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Line chart</h4>
            <line-chart height="250"></line-chart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bar chart</h4>
            <bar-chart height="250"></bar-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Area chart</h4>
            <area-chart height="250"></area-chart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Doughnut chart</h4>
            <doughnut-chart height="200"></doughnut-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Pie chart</h4>
            <pie-chart height="200"></pie-chart>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Scatter chart</h4>
            <scatter-chart height="200"></scatter-chart>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import lineChart from '../../components/charts/examples/lineChart'
import barChart from '../../components/charts/examples/barChart'
import areaChart from '../../components/charts/examples/areaChart'
import doughnutChart from '../../components/charts/examples/DoughnutChart'
import pieChart from '../../components/charts/examples/pieChart'
import scatterChart from '../../components/charts/examples/scatterChart'
export default {
  name: 'chartjs',
  components: {
    lineChart,
    barChart,
    areaChart,
    doughnutChart,
    pieChart,
    scatterChart
  }
}
</script>

<style scoped lang="scss">
  .chartjs {}
</style>
