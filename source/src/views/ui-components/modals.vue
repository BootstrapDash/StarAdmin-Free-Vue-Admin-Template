<template lang="html">

  <section class="modals">
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Large Modal</h4>
          <p class="card-description">Large sized modal with max-width set to <code>90%</code></p>
          <!-- Modal starts -->
          <div class="text-center">
            <b-btn v-b-modal.modallg variant="primary">Click for demo <i class="mdi mdi-play-circle ml-1"></i></b-btn>
          </div>
          <b-modal id="modallg" title="Bootstrap-Vue" size="lg">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
          <!-- Modal Ends -->
        </div>
      </div>
    </div>
    <div class="col-md-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Medium Modal</h4>
          <p class="card-description">Normal modal with default bootstrap settings</p>
          <!-- Modal starts -->
          <div class="text-center">
            <b-btn v-b-modal.modalmd variant="primary">Click for demo <i class="mdi mdi-play-circle ml-1"></i></b-btn>
          </div>
          <b-modal id="modalmd" title="Bootstrap-Vue" size="md">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
          <!-- Modal Ends -->
        </div>
      </div>
    </div>
    <div class="col-md-6 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Small Modal</h4>
          <p class="card-description">Small modal with max-width set to <code>300px</code></p>
          <!-- Modal starts -->
          <div class="text-center">
            <b-btn v-b-modal.modalsm variant="primary">Click for demo <i class="mdi mdi-play-circle ml-1"></i></b-btn>
          </div>
          <b-modal id="modalsm" title="Bootstrap-Vue" size="sm">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
          <!-- Modal Ends -->
        </div>
      </div>
    </div>
  </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'modals'
}
</script>

<style scoped lang="scss">
.modals {

}
</style>
