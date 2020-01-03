import types from './types'

const initState = {
  users: ['user1'],
  posts: [{ userId: 999, id: 999, title: 'test' }],
  comments: ['comment1']
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case types.DATA_INIT_USERS:
      return {
        ...state,
        users: action.payload
      }
    case types.DATA_INIT_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case types.DATA_INIT_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case types.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case types.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    case types.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    default:
      return state
  }
}

export default rootReducer
