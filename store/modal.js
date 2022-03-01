export const state = () => ({
  showModal: false,
  modalID: null,
})

export const mutations = {
  toggleShowModal(state, payload) {
    state.showModal = payload
  },
  setModalID(state, payload) {
    state.modalID = payload
  },
}

export const actions = {
  popModal({ commit }, payload) {
    commit('toggleShowModal', true)
    commit('setModalID', payload)
  },

  hideModal({ commit }) {
    commit('toggleShowModal', false)
    commit('setModalID', null)
  },
}
