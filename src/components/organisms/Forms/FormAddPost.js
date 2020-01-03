import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addPost } from './../../../duck/actions'
import Button from './../../atoms/Button/Button'
import {
  FormControlStyled,
  FormControlInputStyled,
  FormControlLabelStyled,
  FormActionStyled,
  FormActionItemStyled
} from './styles/index'
import Input from './../../atoms/Input/Input'
import Label from './../../atoms/Label/Label'

const FormAddPost = props => {
  const titleInput = useRef(null)
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
      <FormControlStyled>
        <FormControlLabelStyled>
          <Label>Post title</Label>
        </FormControlLabelStyled>
        <FormControlInputStyled>
          <Input type="text" placeholder="name" ref={titleInput} />
        </FormControlInputStyled>
      </FormControlStyled>
      <FormControlStyled>
        <FormControlLabelStyled>
          <Label>Post body</Label>
        </FormControlLabelStyled>
        <FormControlInputStyled>
          <Input textarea type="text" placeholder="body" ref={bodyInput} />
        </FormControlInputStyled>
      </FormControlStyled>
      <FormActionStyled>
        <FormActionItemStyled>
          <Button type="submit">Add</Button>
        </FormActionItemStyled>
        <FormActionItemStyled>
          <Button onClick={props.closeModal}>Cancel</Button>
        </FormActionItemStyled>
      </FormActionStyled>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  addPostItem: post => dispatch(addPost(post))
})

export default connect(null, mapDispatchToProps)(FormAddPost)
