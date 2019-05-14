import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loginUser: {
      logo: null,
      name: null,
      password: null,
      picture: null,
      redirect: null,
      slotsPublished: null,
      slotsPurchased: null,
      status: false,
      totalSlots: null,
      userName: null,
      userType: 'guest'
    }
  },
  getters,
  mutations,
  actions
})
