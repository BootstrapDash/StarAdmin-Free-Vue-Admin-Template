import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

//  Widgets Components
import mainView from '../mainView'

import buttons from '../views/basic-elements/buttons'
import dropdowns from '../views/basic-elements/dropdowns'
import typography from '../views/basic-elements/typography'

//  Chart Components
import chartjs from '../views/charts/chartjs'

//  Icons Components
import mdiIcons from '../views/icons/mdi-icons'

import login from '../views/samples/user-pages/login'
import register from '../views/samples/user-pages/register'

//  Table Components
import basicTables from '../views/tables/basic-table'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/dashboard',
    component: mainView,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: '/buttons',
        name: 'buttons',
        component: buttons
      },
      {
        path: '/dropdowns',
        component: dropdowns
      },
      {
        path: '/typography',
        component: typography
      },
      {
        path: '/chartjs',
        component: chartjs
      },
      {
        path: '/mdiIcons',
        component: mdiIcons
      },
      {
        path: '/basic_table',
        name: 'basicTables',
        component: basicTables
      }
    ]
  },
  {
    path: '*',
    redirect: '/pages/error_404',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/pages/login',
        component: login
      },
      {
        path: '/pages/register',
        component: register
      }
    ]}
  ]
})
