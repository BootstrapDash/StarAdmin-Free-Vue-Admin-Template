<template lang="html">

  <section class="tables">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Table</h4>
            <p class="card-description">
              For displaying tabular data. <code>&lt;b-table&gt;</code> supports pagination, filtering, sorting, custom rendering, events, and asynchronous data.
            </p>
            <b-table responsive :items="items"></b-table>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Striped And Hoverable Table</h4>
            <p class="card-description">
              Use <code>hover striped</code> props for striped and hoverable styles
            </p>
            <b-table striped hover responsive :items="items"></b-table>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Contextual State Table</h4>
            <p class="card-description">
              Bootstrap contextual state applied to the row and column
            </p>
            <b-table hover responsive :items="itemsTwo"></b-table>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sortable Table</h4>
            <p class="card-description">
              Bootstrap contextual state applied to the row and column
            </p>
            <b-table striped hover responsive :items="items" :fields="fields"></b-table>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
const itemsTwo = [
  { Status: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { Status: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  {
    Status: false,
    age: 89,
    first_name: 'Geneva',
    last_name: 'Wilson',
    _rowVariant: 'danger'
  },
  {
    Status: true,
    age: 40,
    first_name: 'Thor',
    last_name: 'Macdonald',
    _cellVariants: { Status: 'success', age: 'info', first_name: 'warning' }
  },
  { Status: false, age: 29, first_name: 'Dick', last_name: 'Dunlap' }
]
export default {
  name: 'tables',
  data () {
    return {
      itemsTwo: itemsTwo,
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      fields: {
        last_name: {
          label: 'Person last name',
          sortable: true
        },
        first_name: {
          label: 'Person first name',
          sortable: false
        },
        foo: {
          // This key overrides `foo`!
          key: 'age',
          label: 'Person age',
          sortable: true
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tables {

}
</style>
