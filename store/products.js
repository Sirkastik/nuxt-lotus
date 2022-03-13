export const state = () => ({
  products: [],
  category: null,
})

export const mutations = {
  setProducts(state, payload) {
    state.products.push(payload)
  },
  setCategory(state, payload) {
    state.category = payload
  },
  clearProducts(state) {
    state.products = []
  },
}

const getPhoto = async (category, prev) => {
  let { url } = await fetch(
    `https://source.unsplash.com/random/800x800/?furniture?${category}`
  )
  if (prev === '') return url
  const [prevPhoto] = prev.split('?')
  const [currentPhoto] = url.split('?')
  if (prevPhoto === currentPhoto) return await getPhoto(category, prev)
  else return url
}

export const actions = {
  async getProducts({ commit, state }, payload) {
    if (state.category === payload) return
    commit('setCategory', payload)
    commit('clearProducts')
    let prev = ''
    for (let i = 0; i < 12; i++) {
      const url = await getPhoto(payload, prev)
      commit('setProducts', url)
      prev = url
    }
  },
}
