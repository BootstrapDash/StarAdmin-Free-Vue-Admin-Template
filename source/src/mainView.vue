<template lang="html">

  <section class="main-view">
    <div class="container-scroller">
      <app-header/>
      <div class="container-fluid page-body-wrapper">
        <app-sidebar/>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <!-- content wrapper ends -->
          <app-footer/>
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>

</template>

<script lang="js">
import AppHeader from '../src/components/partials/AppHeader'
import AppSidebar from '../src/components/partials/AppSidebar'
import AppFooter from '../src/components/partials/AppFooter'
export default {
  name: 'main',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>

<style scoped lang="scss">
  .main-view {

  }
</style>
