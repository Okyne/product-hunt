export const GET_COMMENTS = (state, payload) => {
  let comments = 0
  payload.posts.find((post) => {
    comments += post.comments_count
  })
  state.commentsCount = comments
}

export const GET_MAKERS = (state, payload) => {
  let makers = 0
  payload.posts.find((post) => {
    makers += post.makers.length
  })
  state.makersCount = makers
}

export const GET_POSTS = (state, payload) => {
  state.posts = payload.posts
}

export const GET_VOTES = (state, payload) => {
  let votes = 0
  payload.posts.find((post) => {
    votes += post.votes_count
  })
  state.votesCount = votes
}
