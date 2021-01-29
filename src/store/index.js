import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      showLink: false,
      showLoading: {
         type: false,
         title: '',
         text: ''
      },
   },
   mutations: {
      SETSHOWLINK(state, val) {
         state.showLink = val
      },
      SETSHOWLOADING(state, val) {
         state.showLoading.type = val.type
         state.showLoading.title = val.title
         state.showLoading.text = val.text
         state.showLoading.url = val.url
      },
   },
   actions: {
      setshowlink({ commit }, val) {
         commit('SETSHOWLINK', val)
      },
      setshowloading({ commit }, val) {
         commit('SETSHOWLOADING', val)
      },
   },
   getters: {
      getshowlink:state => state.showLink,
      getshowloading:state => state.showLoading,
   },
   modules: {

   }
});
