import axios from 'axios'
export const state = () => ({
  user: null,
  repos: [],
  orgs: [],
  stars: []

})

export const getters = {
  user(state) {
    return state.user
  },

  repos(state) {
    return state.repos
  },

  reposItemCount(state) {
    return state.repos.length
  },

  orgs(state) {
    return state.orgs
  },

  stars(state) {
    return state.stars
  },

  starsItemCount(state) {
    return state.stars.length
  },
}
export const mutations = {
  SET_USER(state, data){
    state.user = data
  },
  SET_REPOS(state, data) {
    state.repos = data
  },
  SET_ORGS(state, data) {
    state.orgs = data
  },
  SET_STARS(state, data) {
    state.stars = data
  }
}
export const actions = {
  async getUser({commit}){
    try {
        let response = await axios.get(`https://api.github.com/users/${process.env.USERNAME}`)
        commit ('SET_USER', response.data)
    } catch (e) {
        commit('SET_USER', null)
    }
  },
  async getRepos({commit}){
    try {
        let response = await axios.get(`https://api.github.com/users/${process.env.USERNAME}/repos`)
        commit ('SET_REPOS', response.data)
    } catch (e) {
        commit('SET_REPOS', null)
    }
  },
  async getOrgs({commit}){
    try {
        let response = await axios.get('https://api.github.com/user/orgs')
        commit ('SET_ORGS', response.data)
    } catch (e) {
        commit('SET_ORGS', null)
    }
  },
  async getStarred({commit}){
    try {
        let response = await axios.get('https://api.github.com/user/starred')
        commit ('SET_STARS', response.data)
    } catch (e) {
        commit('SET_STARS', null)
    }
  },
}
