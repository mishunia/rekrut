import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addPost } from './../../../duck/actions'
import Button from './../../atoms/Button/Button'
import FormControlStyled from './../../molecules/FormControl/FormControl'

const FormAddPost = props => {
  const titleInput = useRef('dupa')
  const bodyInput = useRef(null)

  const submitHandler = e => {
    e.preventDefault()
    console.log({ ...titleInput.current.value })
    console.log(bodyInput.current.value)

    const xd = {
      userId: props.userId,
      id: Math.floor(Math.random() * 10 + 1) * 56,
      title: titleInput.current.value,
      body: bodyInput.current.value
    }

    console.log(xd)

    props.addPostItem(xd)
  }

  return (
    <form onSubmit={submitHandler}>
      {/* <FormControlStyled label="title"></FormControlStyled>
      <FormControlStyled label="body"></FormControlStyled> */}
      <label>Title</label>
      <input type="text" placeholder="name" ref={titleInput}></input>
      <label>Body</label>
      <textarea type="text" placeholder="body" ref={bodyInput}></textarea>
      <Button>Cancel</Button>
      <button type="submit">Add</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  addPostItem: post => dispatch(addPost(post))
})

export default connect(null, mapDispatchToProps)(FormAddPost)
