const state = {
  siteName: 'Site Name'
}

const getters = {
  getSiteName : (state) => {
    return state.siteName
  }
}

const actions = {

}

const mutations = {

}

export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}