// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import BootstrapVue from 'bootstrap-vue'

import VueSweetalert2 from 'vue-sweetalert2'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import { store } from './store/store'
import VeeValidate from 'vee-validate'
import SortedTablePlugin from 'vue-sorted-table'

Vue.use(SortedTablePlugin)
Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let outputRouter
  to.matched.some(record => { outputRouter = record.meta })
  if (outputRouter.requiresAuth) {
    if (!store.getters.getLoginUser.status) {
      next({
        name: 'login'
      })
    } else {
      if (store.getters.getLoginUser.userType === outputRouter.type) {
        next()
        console.log('allow to go next route')
      } else {
        next({name: 'login'})
        console.log('not allow to go next route')
      }
    }
  } else if (outputRouter.requiresVisitor) {
    if (store.getters.getLoginUser.status === outputRouter.type) {
      next({
        name: outputRouter.redirect
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})