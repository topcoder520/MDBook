import { createStore } from 'vuex'

export default createStore({
  state: {
    layoutState:true,
  },
  getters: {
  },
  mutations: {
    setLayoutState(state,value){
      state.layoutState = value
    }
  },
  actions: {
  },
  modules: {
  }
})
