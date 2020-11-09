<template lang="html">

  <section class="buttons">
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Normal buttons</h4>
            <p class="card-description">Use<code> &lt;b-button&gt; </code> for buttons basic buttons</p>
            <div class="template-demo">
              <b-button variant="primary" class="btn-fw">Primary</b-button>
              <b-button variant="secondary" class="btn-fw">Seconday</b-button>
              <b-button variant="success" class="btn-fw">Success</b-button>
              <b-button variant="danger" class="btn-fw">Danger</b-button>
              <b-button variant="warning" class="btn-fw">Warning</b-button>
              <b-button variant="info" class="btn-fw">Info</b-button>
              <b-button variant="light" class="btn-fw">Light</b-button>
              <b-button variant="dark" class="btn-fw">Dark</b-button>
              <b-button href="#" class="btn-fw btn-link">Link</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Inverse buttons</h4>
            <p class="card-description">Use <code>.btn-inverse-*</code> with <code> &lt;b-button&gt; </code> for inverse styling</p>
            <div class="template-demo">
              <b-button class="btn-fw btn-inverse-primary">Primary</b-button>
              <b-button class="btn-fw btn-inverse-secondary">Seconday</b-button>
              <b-button class="btn-fw btn-inverse-success">Success</b-button>
              <b-button class="btn-fw btn-inverse-danger">Danger</b-button>
              <b-button class="btn-fw btn-inverse-warning">Warning</b-button>
              <b-button class="btn-fw btn-inverse-info">Info</b-button>
              <b-button class="btn-fw btn-inverse-light">Light</b-button>
              <b-button class="btn-fw btn-inverse-dark">Dark</b-button>
              <b-button href="#" class="btn-fw btn-link">Link</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rounded buttons</h4>
            <p class="card-description">Use <code>.btn-rounded</code> with <code> &lt;b-button&gt; </code> for rounded buttons</p>
            <div class="template-demo">
              <b-button variant="primary" class="btn-fw btn-rounded">Primary</b-button>
              <b-button variant="secondary" class="btn-fw btn-rounded">Seconday</b-button>
              <b-button variant="success" class="btn-fw btn-rounded">Success</b-button>
              <b-button variant="danger" class="btn-fw btn-rounded">Danger</b-button>
              <b-button variant="warning" class="btn-fw btn-rounded">Warning</b-button>
              <b-button variant="info" class="btn-fw btn-rounded">Info</b-button>
              <b-button variant="light" class="btn-fw btn-rounded">Light</b-button>
              <b-button variant="dark" class="btn-fw btn-rounded">Dark</b-button>
              <b-button href="#" class="btn-fw btn-link btn-rounded">Link</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rounded Inverse buttons</h4>
            <p class="card-description">Use <code>.btn-rounded</code> with <code> &lt;b-button&gt; </code> for rounded buttons</p>
            <div class="template-demo">
              <b-button class="btn-fw btn-inverse-primary btn-rounded">Primary</b-button>
              <b-button class="btn-fw btn-inverse-secondary btn-rounded">Seconday</b-button>
              <b-button class="btn-fw btn-inverse-success btn-rounded">Success</b-button>
              <b-button class="btn-fw btn-inverse-danger btn-rounded">Danger</b-button>
              <b-button class="btn-fw btn-inverse-warning btn-rounded">Warning</b-button>
              <b-button class="btn-fw btn-inverse-info btn-rounded">Info</b-button>
              <b-button class="btn-fw btn-inverse-light btn-rounded">Light</b-button>
              <b-button class="btn-fw btn-inverse-dark btn-rounded">Dark</b-button>
              <b-button href="#" class="btn-fw btn-link btn-rounded">Link</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Default buttons</h4>
            <p class="card-description">Buttons without fixed width (Auto width)</p>
            <div class="template-demo">
              <b-button variant="primary">Primary</b-button>
              <b-button variant="secondary">Seconday</b-button>
              <b-button variant="success">Success</b-button>
              <b-button variant="danger">Danger</b-button>
              <b-button variant="warning">Warning</b-button>
              <b-button variant="info">Info</b-button>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Outlined buttons</h4>
            <div class="template-demo">
              <b-button variant="outline-primary">Primary</b-button>
              <b-button variant="outline-secondary">Seconday</b-button>
              <b-button variant="outline-success">Success</b-button>
              <b-button variant="outline-danger">Danger</b-button>
              <b-button variant="outline-warning">Warning</b-button>
              <b-button variant="outline-info">Info</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Button sizes</h4>
            <div class="wrapper template-demo">
              <b-button variant="light" size="lg">btn-lg</b-button>
              <b-button variant="primary" size="lg">btn-lg</b-button>
            </div>
            <div class="wrapper template-demo">
              <b-button variant="light">btn-md</b-button>
              <b-button variant="primary">btn-md</b-button>
            </div>
            <div class="wrapper template-demo">
              <b-button variant="light" size="sm">btn-sm</b-button>
              <b-button variant="primary" size="sm">btn-sm</b-button>
            </div>
            <div class="wrapper template-demo">
              <b-button variant="light" size="xs">btn-xs</b-button>
              <b-button variant="primary" size="xs">btn-xs</b-button>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Icon buttons</h4>
            <div class="template-demo">
              <b-button variant="success"><i class="mdi mdi-cloud-download"></i>Upload</b-button>
              <b-button variant="warning"><i class="mdi mdi-message-text"></i>Comments</b-button>
              <b-button variant="danger"><i class="mdi mdi-upload"></i>Upload</b-button>
              <b-button variant="info"><i class="mdi mdi-delete"></i>Delete</b-button>
              <b-button variant="primary"><i class="mdi mdi-printer"></i>Print</b-button>
              <b-button variant="dark"><i class="mdi mdi-loop"></i>Reset</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Grouped buttons</h4>
            <p class="card-description">These are the different buttons group component</p>
            <div class="template-demo">
              <b-button-group>
                <b-button variant="outline-secondary">1</b-button>
                <b-button variant="outline-secondary">2</b-button>
                <b-button variant="outline-secondary">3</b-button>
              </b-button-group>
            </div>
            <div class="template-demo">
              <b-button-group>
                <b-button variant="success">1</b-button>
                <b-button variant="success">2</b-button>
                <b-button variant="success">3</b-button>
              </b-button-group>
            </div>
            <div class="template-demo">
              <b-button-group>
                <b-button variant="outline-secondary" class="icon-btn"><i class="mdi mdi-heart-outline"></i></b-button>
                <b-button variant="outline-secondary" class="icon-btn"><i class="mdi mdi-clock"></i></b-button>
                <b-button variant="outline-secondary" class="icon-btn"><i class="mdi mdi-border-color"></i></b-button>
              </b-button-group>
            </div>
            <div class="template-demo">
              <b-button-group>
                <b-button variant="danger" class="icon-btn"><i class="mdi mdi-heart-outline"></i></b-button>
                <b-button variant="danger" class="icon-btn"><i class="mdi mdi-clock"></i></b-button>
                <b-button variant="danger" class="icon-btn"><i class="mdi mdi-border-color"></i></b-button>
              </b-button-group>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Button toolbar</h4>
            <div class="template-demo">
              <b-button-toolbar>
                <b-button-group>
                  <b-button variant="secondary">1</b-button>
                  <b-button variant="secondary">2</b-button>
                  <b-button variant="secondary">3</b-button>
                </b-button-group>
                <b-button-group>
                  <b-button variant="secondary">5</b-button>
                  <b-button variant="secondary">6</b-button>
                </b-button-group>
                <b-button-group>
                  <b-button variant="secondary">8</b-button>
                </b-button-group>
              </b-button-toolbar>
            </div>
            <div class="template-demo">
              <b-button-toolbar>
                <b-button-group>
                  <b-button variant="primary">1</b-button>
                  <b-button variant="primary">2</b-button>
                </b-button-group>
                <b-button-group>
                  <b-button variant="primary">3</b-button>
                  <b-button variant="primary">4</b-button>
                  <b-button variant="primary">5</b-button>
                </b-button-group>
                <b-button-group>
                  <b-button variant="primary">6</b-button>
                </b-button-group>
              </b-button-toolbar>
            </div>
            <div class="template-demo">
              <b-button-toolbar>
                <b-button-group>
                  <b-button variant="success">1</b-button>
                  <b-button variant="success">2</b-button>
                  <b-button variant="success">3</b-button>
                </b-button-group>
                <b-button-group>
                  <b-button variant="success">4</b-button>
                  <b-button variant="success">5</b-button>
                </b-button-group>
                <b-button-group>
                  <b-button variant="success">6</b-button>
                </b-button-group>
              </b-button-toolbar>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Social Buttons</h4>
            <p class="card-description">These are the different buttons group component</p>
            <div class="template-demo">
              <b-button variant="primary" class="social-btn"><i class="mdi mdi-facebook"></i></b-button>
              <b-button variant="info" class="social-btn"><i class="mdi mdi-twitter"></i></b-button>
              <b-button variant="success" class="social-btn"><i class="mdi mdi-dribbble"></i></b-button>
              <b-button variant="danger" class="social-btn"><i class="mdi mdi-linkedin"></i></b-button>
              <b-button variant="warning" class="social-btn"><i class="mdi mdi-google-plus"></i></b-button>
              <br>
              <b-button variant="facebook" class="social-btn"><i class="mdi mdi-facebook"></i></b-button>
              <b-button variant="twitter" class="social-btn"><i class="mdi mdi-twitter"></i></b-button>
              <b-button variant="dribbble" class="social-btn"><i class="mdi mdi-dribbble"></i></b-button>
              <b-button variant="linkedin" class="social-btn"><i class="mdi mdi-linkedin"></i></b-button>
              <b-button variant="google" class="social-btn"><i class="mdi mdi-google-plus"></i></b-button>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Social buttons rounded</h4>
            <div class="template-demo">
              <b-button variant="primary" class="social-btn btn-rounded"><i class="mdi mdi-facebook"></i></b-button>
              <b-button variant="info" class="social-btn btn-rounded"><i class="mdi mdi-twitter"></i></b-button>
              <b-button variant="success" class="social-btn btn-rounded"><i class="mdi mdi-dribbble"></i></b-button>
              <b-button variant="danger" class="social-btn btn-rounded"><i class="mdi mdi-linkedin"></i></b-button>
              <b-button variant="warning" class="social-btn btn-rounded"><i class="mdi mdi-google-plus"></i></b-button>
              <br>
              <b-button variant="facebook" class="social-btn btn-rounded"><i class="mdi mdi-facebook"></i></b-button>
              <b-button variant="twitter" class="social-btn btn-rounded"><i class="mdi mdi-twitter"></i></b-button>
              <b-button variant="dribbble" class="social-btn btn-rounded"><i class="mdi mdi-dribbble"></i></b-button>
              <b-button variant="linkedin" class="social-btn btn-rounded"><i class="mdi mdi-linkedin"></i></b-button>
              <b-button variant="google" class="social-btn btn-rounded"><i class="mdi mdi-google-plus"></i></b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'buttons'
}
</script>

<style scoped lang="scss">
.buttons {

}
</style>
