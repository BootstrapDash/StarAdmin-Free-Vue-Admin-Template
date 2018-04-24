<template lang="html">

  <section class="alerts">
    <div class="row">
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Alert</h4>
            <p class="card-description">
            Use <code>&lt; b-alert show&gt; </code> for basic alert.
            </p>
            <div class="template-demo">
              <div class="row">
                <div class="container">
                  <b-alert show>Default Alert</b-alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Alert Color Variations</h4>
            <p class="card-description">
            Use <code>&lt; b-alert variant="primary" show&gt; </code> for basic alert.
            </p>
            <div class="template-demo">
              <div class="row">
                <div class="container">
                  <b-alert variant="primary" show>Primary Alert</b-alert>
                  <b-alert variant="secondary" show>Secondary Alert</b-alert>
                  <b-alert variant="success" show>Success Alert</b-alert>
                  <b-alert variant="warning" show>Warning Alert</b-alert>
                  <b-alert variant="danger" show>Danger Alert</b-alert>
                  <b-alert variant="info" show>Info Alert</b-alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Dismissible Alert</h4>
                <p class="card-description">
                Use <code>&lt; b-alert variant="primary" show&gt; </code> for basic alert.
                </p>
                <div class="template-demo">
                  <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
                    Dismissible Alert!
                  </b-alert>
                  <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
                    Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
                  </b-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Alert With Timeout</h4>
                <p class="card-description">
                Use <code>&lt; b-alert variant="primary" show&gt; </code> for basic alert.
                </p>
                <div class="template-demo">
                  <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
                    <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
                    <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
                  </b-alert>
                  <b-btn @click="showAlert" variant="info" class="m-1">
                    Show alert with count-down timer
                  </b-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Alert With HTML</h4>
            <p class="card-description">
            Use <code>&lt; b-alert show&gt; </code> for basic alert.
            </p>
            <div class="template-demo">
              <div class="row">
                <div class="container">
                  <b-alert show variant="success">
                    <h4 class="alert-heading">Well done!</h4>
                    <p>
                      Aww yeah, you successfully read this important alert message.
                      This example text is going to run a bit longer so that you can see
                      how spacing within an alert works with this kind of content.
                    </p>
                    <hr>
                    <p class="mb-0">
                      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                  </b-alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'alerts',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style scoped lang="scss">
  .alerts {}
</style>
