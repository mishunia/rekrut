import types from './types'

export const receiveApiUsers = data => ({
  type: types.DATA_INIT_USERS,
  payload: data
})

export const receiveApiPosts = posts => ({
  type: types.DATA_INIT_POSTS,
  payload: posts
})

export const receiveApiComments = comments => ({
  type: types.DATA_INIT_COMMENTS,
  payload: comments
})

export const addPost = post => ({
  type: types.ADD_POST,
  payload: post
})

export const removePost = post => ({
  type: types.REMOVE_POST,
  payload: post
})

export const addComment = comment => ({
  type: types.ADD_COMMENT,
  payload: comment
})
