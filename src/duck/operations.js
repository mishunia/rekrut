import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { receiveApiUsers, receiveApiPosts, receiveApiComments } from './actions'

export function getInitalUsers() {
  return function(dispatch) {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        dispatch(receiveApiUsers(data))
      })
  }
}

export function getUserPosts() {
  return function(dispatch) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(({ data }) => {
        dispatch(receiveApiPosts(data))
      })
  }
}

export function getPostComments() {
  return function(dispatch) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then(({ data }) => {
        dispatch(receiveApiComments(data))
      })
  }
}
