import api from '../api/productHunt'

export const getPosts = ({ commit }, period) => {
  api.getPosts(period)
    .then((posts) => {
      commit('GET_COMMENTS', posts)
      commit('GET_MAKERS', posts)
      commit('GET_POSTS', posts)
      commit('GET_VOTES', posts)
    })
}
