import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addComment } from './../../../duck/actions'
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

const FormAddComment = props => {
  const emailInput = useRef(null)
  const titleInput = useRef(null)
  const bodyInput = useRef(null)

  const submitHandler = e => {
    e.preventDefault()

    const commentItem = {
      postId: props.postId,
      id: Math.floor(Math.random() * 10 + 1) * 56,
      name: titleInput.current.value,
      email: emailInput.current.value,
      body: bodyInput.current.value
    }

    props.addCommentItem(commentItem)
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControlStyled>
        <FormControlLabelStyled>
          <Label>Your mail</Label>
        </FormControlLabelStyled>
        <FormControlInputStyled>
          <Input type="text" placeholder="name" ref={emailInput} />
        </FormControlInputStyled>
      </FormControlStyled>
      <FormControlStyled>
        <FormControlLabelStyled>
          <Label>Comment title</Label>
        </FormControlLabelStyled>
        <FormControlInputStyled>
          <Input type="text" placeholder="name" ref={titleInput} />
        </FormControlInputStyled>
      </FormControlStyled>
      <FormControlStyled>
        <FormControlLabelStyled>
          <Label>Comment body</Label>
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
  addCommentItem: comment => dispatch(addComment(comment))
})

export default connect(null, mapDispatchToProps)(FormAddComment)
