import axios from 'axios'

const initState = {
  data: ['lol'],
  posts: []
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DATA_INITIALIZED':
      return {
        ...state,
        data: action.payload
      }
    case 'DATA_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'ADD_ITEM':
      return {
        ...state,
        persons: [...state.persons, action.person]
      }
    default:
      return state
  }
}

export const receiveApiData = data => ({
  type: 'DATA_INITIALIZED',
  payload: data
})

export const receiveApiPosts = posts => ({
  type: 'DATA_POSTS',
  payload: posts
})

export function getInitalData() {
  return function(dispatch) {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        // console.log('pepe', data)
        dispatch(receiveApiData(data))
      })
  }
}

export function getUserPosts() {
  return function(dispatch) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(({ data }) => {
        console.log('userki', data)
        dispatch(receiveApiPosts(data))
      })
  }
}

export default rootReducer
