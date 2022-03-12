export const state = () => ({
  currentProduct: null,
})

export const mutations = {
  setCurrentProduct(state, payload) {
    state.currentProduct = payload
  },
}

export const actions = {
  setProduct({ commit }, payload) {
    commit('setCurrentProduct', payload)
  },

  clearProduct({ commit }) {
    commit('setCurrentProduct', null)
  },
}
