<template lang="html">

  <section class="breadcrumbs">
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Breadcrumbs</h4>
            <p class="card-description">Use <code>&lt;b-breadcrumb :items="items"/&gt;</code> for basic breadcrumb</p>
            <div class="template-demo">
              <b-breadcrumb :items="items"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Inverse Breadcrumbs</h4>
            <p class="card-description">Add class <code>.bg-inverse-*</code> for inverse skin</p>
            <div class="template-demo">
              <b-breadcrumb :items="items" class="bg-inverse-primary"/>
              <b-breadcrumb :items="items" class="bg-inverse-info"/>
              <b-breadcrumb :items="items" class="bg-inverse-danger"/>
              <b-breadcrumb :items="items" class="bg-inverse-success"/>
              <b-breadcrumb :items="items" class="bg-inverse-warning"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Colored Breadcrumb Variations</h4>
            <p class="card-description">Add class <code>.bg-*</code> for solid colored breadcrumb</p>
            <div class="template-demo">
              <b-breadcrumb :items="items" class="bg-primary"/>
              <b-breadcrumb :items="items" class="bg-info"/>
              <b-breadcrumb :items="items" class="bg-danger"/>
              <b-breadcrumb :items="items" class="bg-success"/>
              <b-breadcrumb :items="items" class="bg-warning"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'breadcrumbs',
  data () {
    return {
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library',
        active: true
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {

}
</style>
