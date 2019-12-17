import React from 'react'
import {
  PostDetailsItemStyled,
  PostDetailsItemHeadStyled,
  PostDetailsItemContentStyled
} from './styles/index'
import Heading from './../../atoms/Heading/Heading'
import Paragraph from './../../atoms/Paragraph/Paragraph'

const PostDetailsItem = props => {
  return (
    <PostDetailsItemStyled>
      <PostDetailsItemHeadStyled>
        <Heading h2>{props.title}</Heading>
      </PostDetailsItemHeadStyled>
      <PostDetailsItemContentStyled>
        <Paragraph>{props.content}</Paragraph>
      </PostDetailsItemContentStyled>
    </PostDetailsItemStyled>
  )
}

export default PostDetailsItem
