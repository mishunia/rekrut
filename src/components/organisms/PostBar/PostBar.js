import React from 'react'
import { PostBarStyled, PostBarActionStyled } from './styles/index'

const PostBar = props => {
  return (
    <PostBarStyled>
      <PostBarActionStyled
        showTypo={props.showTypo}
        hideTypo={props.hideTypo}
        onClick={props.toggleComment}
      >
        {props.togglerText}
      </PostBarActionStyled>
      <PostBarActionStyled onClick={props.addComment}>
        {props.actionTypo}
      </PostBarActionStyled>
    </PostBarStyled>
  )
}

export default PostBar
