<template lang="html">

  <section class="tooltips">
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic tooltip</h4>
            <p class="card-description">Basic tooltip demo that appears on hover</p>
            <p>Hover the below button for interactive demo</p>
            <b-btn v-b-tooltip.html.top
             title="I'm a tooltip!"
             variant="primary">
              Hover Me
            </b-btn>
          </div>
          <div class="card-body">
            <h4 class="card-title">Tooltip positions</h4>
            <p class="card-description">Add attribute <code>"v-b-tooltip.html.*"</code> prop for desired position</p>
            <div class="template-demo">
              <b-btn v-b-tooltip.html.top
               title="I'm a tooltip!"
               variant="warning">
                Top
              </b-btn>
              <b-btn v-b-tooltip.html.right
               title="I'm a tooltip!"
               variant="secondary">
                Right
              </b-btn>
              <b-btn v-b-tooltip.html.bottom
               title="I'm a tooltip!"
               variant="info">
                Bottom
              </b-btn>
              <b-btn v-b-tooltip.html.left
               title="I'm a tooltip!"
               variant="danger">
                Left
              </b-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic popover</h4>
            <p class="card-description">Basic popover demo that appears on click</p>
            <p>Click the below button for interactive demo</p>
            <b-btn :id="'exPopover1-'+top" variant="primary">
              Hover Me
            </b-btn>
            <b-popover :target="'exPopover1-'+top" :placement="placement" title="Popover!" triggers="hover focus" :content="`Popover content`">
            </b-popover>
          </div>
          <div class="card-body">
            <h4 class="card-title">Popover positions</h4>
            <p class="card-description">Add attribute <code>:placement="*placement"</code> for desired position</p>
            <b-row>
              <b-col md="4" class="py-2" v-for="placement in placements" :key="placement">
                <b-btn :id="'exPopover1-'+placement" variant="primary">
                  {{ placement }}
                </b-btn>
                <b-popover :target="'exPopover1-'+placement" :placement="placement" title="Popover!" triggers="hover focus" :content="`Placement ${placement}`">
                </b-popover>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'tooltips',
  data () {
    return {
      placements: [
        'topright', 'top', 'topleft',
        'bottomright', 'bottom', 'bottomleft',
        'righttop', 'right', 'lefttop',
        'rightbottom', 'left', 'leftbottom'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .tooltips {}
</style>
