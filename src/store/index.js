import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const URL_ABOUT = 'http://localhost:8080/#/about'

export default new Vuex.Store({
  state: {
    childWindow: null
  },
  mutations: {
  },
  actions: {
    openNewTab({state}) {
      state.childWindow = window.open('#/about', '_blank',
      'directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=800,width=600');


      window.addEventListener("message", function(data) {
        console.log('Recieved message', data)
        // Set focus using main window
        window.focus()
      });
    }
  },
  modules: {
  }
})
