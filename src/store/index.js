import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  commentsCount: 0,
  makersCount: 0,
  posts: [],
  votesCount: 0
}

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: true
})

export default store
