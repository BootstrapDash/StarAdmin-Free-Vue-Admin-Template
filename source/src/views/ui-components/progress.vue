<template lang="html">

  <section>
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Normal Progressbar</h4>
            <p class="page-description">Use <code>&lt;b-progress&gt;</code> for basic progressbar</p>
            <div class="template-demo">
              <b-progress :value="0" variant="primary"></b-progress>
              <b-progress :value="25" variant="primary"></b-progress>
              <b-progress :value="50" variant="primary"></b-progress>
              <b-progress :value="75" variant="primary"></b-progress>
              <b-progress :value="100" variant="primary"></b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Colored Progressbar</h4>
            <p class="page-description">Use <code>variant="*"</code> for styled progressbar</p>
            <div class="template-demo">
              <b-progress :value="0"></b-progress>
              <b-progress :value="25" variant="info"></b-progress>
              <b-progress :value="50" variant="primary"></b-progress>
              <b-progress :value="75" variant="warning"></b-progress>
              <b-progress :value="100" variant="danger"></b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Progressbar Striped</h4>
            <p class="page-description">Use <code>striped</code> prop for striped progressbar</p>
            <div class="template-demo">
              <b-progress :value="10" variant="danger" striped></b-progress>
              <b-progress :value="25" variant="warning" striped></b-progress>
              <b-progress :value="50" variant="info" striped></b-progress>
              <b-progress :value="75" variant="primary" striped></b-progress>
              <b-progress :value="100" variant="success" striped></b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Striped Animated</h4>
            <p class="page-description">Use <code>striped :animated="animate"</code> prop for animated progressbar</p>
            <div class="template-demo">
              <b-progress :value="10" variant="danger" striped :animated="animate"></b-progress>
              <b-progress :value="25" variant="warning" striped :animated="animate"></b-progress>
              <b-progress :value="50" variant="info" striped :animated="animate"></b-progress>
              <b-progress :value="75" variant="primary" striped :animated="animate"></b-progress>
              <b-progress :value="100" variant="success" striped :animated="animate"></b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">With Label</h4>
            <p class="page-description">Use <code>show-progress</code> prop for label</p>
            <div class="template-demo">
              <div class="d-flex justify-content-between">
                <small>Filled percentage</small>
                <small>60%</small>
              </div>
              <b-progress :value="60" height="1rem" show-progress></b-progress>
              <div class="d-flex justify-content-between mt-2">
                <small>Photoshop</small>
              </div>
              <b-progress :value="90" height="1rem" show-progress variant="success"></b-progress>
              <b-progress :value="60" height="1rem" show-progress variant="warning"></b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Progressbar Sizes</h4>
            <p class="page-description">Size add class progress sm, md, lg</p>
            <div class="template-demo">
              <b-progress :value="25" class="progress-sm" variant="primary"></b-progress>
              <b-progress :value="50" class="progress-md" variant="primary"></b-progress>
              <b-progress :value="75" class="progress-lg" variant="primary"></b-progress>
              <b-progress :value="100" class="progress-xl" variant="primary"></b-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'progress',
  data () {
    return {
      animate: true
    }
  }
}
</script>

<style scoped lang="scss">
.progress {

}
</style>
