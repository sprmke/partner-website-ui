import Vue from 'vue';
import Vuex from 'vuex';

// shared
import authUser from './modules/_shared/auth-user';

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    // shared
    authUser
  }
})
