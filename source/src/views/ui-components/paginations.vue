<template lang="html">

  <section class="paginations">
    <div class="row">
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Paginations</h4>
            <p class="card-description">Default bordered pagination</p>
            <b-pagination :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Flat Pagination</h4>
            <p class="card-description">Add calss <code>.flat</code></p>
            <b-pagination class="flat pagination-success" :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Separated  Pagination</h4>
            <p class="card-description">Add calss <code>.separated</code></p>
            <b-pagination class="separated pagination-danger" :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bordered Rounded</h4>
            <p class="card-description">Add calss <code>.rounded</code></p>
            <b-pagination class="rounded" :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Flat Rounded Pagination</h4>
            <p class="card-description">Add calss <code>.rounded-flat</code></p>
            <b-pagination class="rounded-flat pagination-success" :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Separated Rounded</h4>
            <p class="card-description">Add calss <code>.rounded-separated</code></p>
            <b-pagination class="rounded-separated pagination-danger" :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Left Position</h4>
            <p class="card-description">Left Pagination</p>
            <b-pagination :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Center Position</h4>
            <p class="card-description">Centered Pagination</p>
            <b-pagination align="center" :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Right Position</h4>
            <p class="card-description">Right Pagination</p>
            <b-pagination align="right" :total-rows="20" v-model="currentPage" :per-page="5">
            </b-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'paginations'
}
</script>

<style scoped lang="scss">
.paginations {

}
</style>
