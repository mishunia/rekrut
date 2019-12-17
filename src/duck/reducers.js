import types from './types'
import { declaredPredicate } from '@babel/types'

const initState = {
  users: ['Michal'],
  posts: ['Test Post'],
  comments: ['post test'],
  dupa: ['elo']
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

    default:
      return state
  }
}

export default rootReducer
