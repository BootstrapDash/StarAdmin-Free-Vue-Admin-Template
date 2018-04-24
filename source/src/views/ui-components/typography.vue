<template lang="html">

  <section class="typography">
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Headings</h4>
            <p class="card-description">
              Add tags <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> or class <code>.h1</code> to <code>.h6</code>
            </p>
            <div class="template-demo">
              <h1>h1. Heading</h1>
              <h2>h2. Heading</h2>
              <h3>h3. Heading</h3>
              <h4>h4. Heading</h4>
              <h5>h5. Heading</h5>
              <h6>h6. Heading</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Headings with secondary text</h4>
            <p class="card-description">
              Add faded secondary text to headings
            </p>
            <div class="template-demo">
              <h1>
                h1. Heading
                <small class="text-muted">
                  Secondary text
                </small>
              </h1>
              <h2>
                h2. Heading
                <small class="text-muted">
                  Secondary text
                </small>
              </h2>
              <h3>
                h3. Heading
                <small class="text-muted">
                  Secondary text
                </small>
              </h3>
              <h4>
                h4. Heading
                <small class="text-muted">
                  Secondary text
                </small>
              </h4>
              <h5>
                h5. Heading
                <small class="text-muted">
                  Secondary text
                </small>
              </h5>
              <h6>
                h6. Heading
                <small class="text-muted">
                  Secondary text
                </small>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Display headings</h4>
            <p class="card-description">
              Add class <code>.display1</code> to <code>.display-4</code>
            </p>
            <div class="template-demo">
              <h1 class="display-1">Display 1</h1>
              <h1 class="display-2">Display 2</h1>
              <h1 class="display-3">Display 3</h1>
              <h1 class="display-4">Display 4</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex align-items-stretch">
        <div class="row">
          <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Paragraph</h4>
                <p class="card-description">
                  Write text in <code>&lt;p&gt;</code> tag
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley not only five centuries,
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Icon size</h4>
                <p class="card-description">
                  Add class <code>.icon-lg</code>, <code>.icon-md</code>, <code>.icon-sm</code>
                </p>
                <div class="row">
                  <div class="col-md-4 d-flex align-items-center">
                    <div class="d-flex flex-row align-items-center">
                      <i class="mdi mdi-compass icon-lg text-warning"></i>
                      <p class="mb-0 ml-1">
                        Icon-lg
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 d-flex align-items-center">
                    <div class="d-flex flex-row align-items-center">
                      <i class="mdi mdi-compass icon-md text-success"></i>
                      <p class="mb-0 ml-1">
                        Icon-md
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 d-flex align-items-center">
                    <div class="d-flex flex-row align-items-center">
                      <i class="mdi mdi-compass icon-sm text-danger"></i>
                      <p class="mb-0 ml-1">
                        Icon-sm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Blockquotes</h4>
            <p class="card-description">
              Wrap content inside<code>&lt;blockquote class="blockquote"&gt;</code>
            </p>
            <blockquote class="blockquote">
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            </blockquote>
          </div>
          <div class="card-body">
            <blockquote class="blockquote blockquote-primary">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Address</h4>
            <p class="card-description">
              Use <code>&lt;address&gt;</code> tag
            </p>
            <div class="row">
              <div class="col-md-6">
                <address>
                  <p class="font-weight-bold">Victory imc</p>
                  <p>
                    695 lsom Ave,
                  </p>
                  <p>
                     Suite 00
                  </p>
                  <p>
                    San Francisco, CA 94107
                  </p>
                </address>
              </div>
              <div class="col-md-6">
                <address class="text-primary">
                  <p class="font-weight-bold">
                    E-mail
                  </p>
                  <p class="mb-2">
                    johndoe@examplemeail.com
                  </p>
                  <p class="font-weight-bold">
                    Web Address
                  </p>
                  <p>
                    www.Victory.com
                  </p>
                </address>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Lead</h4>
            <p class="card-description">
              Use class <code>.lead</code>
            </p>
            <p class="lead">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Text colors</h4>
            <p class="card-description">
              Use class <code>.text-primary</code>, <code>.text-secondary</code> etc. for text in theme colors
            </p>
            <div class="row">
              <div class="col-md-6">
                <p class="text-primary">.text-primary</p>
                <p class="text-success">.text-success</p>
                <p class="text-danger">.text-danger</p>
                <p class="text-warning">.text-warning</p>
                <p class="text-info">.text-info</p>
              </div>
              <div class="col-md-6">
                <p class="text-light bg-dark pl-1">.text-light</p>
                <p class="text-secondary">.text-secondary</p>
                <p class="text-dark">.text-dark</p>
                <p class="text-muted">.text-muted</p>
                <p class="text-white bg-dark pl-1">.text-white</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Top aligned media</h4>
            <div class="media">
              <i class="mdi mdi-earth icon-md text-info d-flex align-self-start mr-3"></i>
              <div class="media-body">
                <p class="card-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Center aligned media</h4>
            <div class="media">
              <i class="mdi mdi-earth icon-md text-info d-flex align-self-center mr-3"></i>
              <div class="media-body">
                <p class="card-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bottom aligned media</h4>
            <div class="media">
              <i class="mdi mdi-earth icon-md text-info d-flex align-self-end mr-3"></i>
              <div class="media-body">
                <p class="card-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Highlighted Text</h4>
            <p class="card-description">
              Wrap the text in <code>&lt;mark&gt;</code> to highlight text
            </p>
            <p>
              It is a long <mark class="bg-warning text-white">established</mark> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">List Unordered</h4>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bold text</h4>
            <p class="card-description">
              Use class<code>.font-weight-bold</code>
            </p>
            <p>
              It is a long <span class="font-weight-bold">established fact</span> that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">List Ordered</h4>
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit></li>
            </ol>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-primary">Underline</h4>
            <p class="card-description">
              Wrap in <code>&lt;u&gt;</code> tag for underline
            </p>
            <p>
              <u>lorem ipsum dolor sit amet, consectetur
                mod tempor incididunt ut labore et dolore
                magna aliqua.</u>
            </p>
          </div>
          <div class="card-body">
            <h4 class="card-title text-danger">Lowercase</h4>
            <p class="card-description">
              Use class <code>.text-lowercase</code>
            </p>
            <p class="text-lowercase">
              lorem ipsum dolor sit amet, consectetur
                mod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>
          </div>
          <div class="card-body">
            <h4 class="card-title text-warning">Uppercase</h4>
            <p class="card-description">
              Use class <code>.text-uppercase</code>
            </p>
            <p class="text-uppercase">
              lorem ipsum dolor sit amet, consectetur
                mod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Mute</h4>
            <p class="card-description">
              Use class <code>.text-muted</code>
            </p>
            <p class="text-muted">
              lorem ipsum dolor sit amet, consectetur
                mod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>
          </div>
          <div class="card-body">
            <h4 class="card-title text-success">Strike</h4>
            <p class="card-description">
              Wrap content in <code>&lt;del&gt;</code> tag
            </p>
            <p>
              <del>
                lorem ipsum dolor sit amet, consectetur
                mod tempor incididunt ut labore et dolore
                magna aliqua.
              </del>
            </p>
          </div>
          <div class="card-body">
            <h4 class="card-title text-info">Capitalized</h4>
            <p class="card-description">
              Use class <code>.text-capitalize</code>
            </p>
            <p class="text-capitalize">
              lorem ipsum dolor sit amet, consectetur
                mod tempor incididunt ut labore et dolore
                magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">List with icon</h4>
            <p class="card-description">Add class <code>.list-ticked</code> to <code>&lt;ul&gt;</code></p>
            <ul class="list-ticked">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">List with icon</h4>
            <p class="card-description">Add class <code>.list-arrow</code> to <code>&lt;ul&gt;</code></p>
            <ul class="list-arrow">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">List with icon</h4>
            <p class="card-description">Add class <code>.list-star</code> to <code>&lt;ul&gt;</code></p>
            <ul class="list-star">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'typography'
}
</script>

<style scoped lang="scss">
.typography {
}
</style>
