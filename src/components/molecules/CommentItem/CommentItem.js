import React from 'react'
import {
  CommentItemStyled,
  CommentItemHeadStyled,
  CommentItemContentStyled
} from './styles/index'
import Paragraph from './../../atoms/Paragraph/Paragraph'

const CommentItem = props => {
  return (
    <CommentItemStyled>
      <CommentItemHeadStyled>
        <Paragraph upper>
          <strong>{props.name}</strong>
        </Paragraph>
        <Paragraph>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </Paragraph>
      </CommentItemHeadStyled>
      <CommentItemContentStyled>
        <Paragraph>{props.body}</Paragraph>
      </CommentItemContentStyled>
    </CommentItemStyled>
  )
}

export default CommentItem
