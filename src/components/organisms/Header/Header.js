import React from 'react'
import {
  HeaderStyled,
  HeaderBackStyled,
  HeaderTitleStyled,
  HeaderActionStyled
} from './styles'

const Header = props => {
  return (
    <HeaderStyled>
      <HeaderBackStyled onClick={props.back}>Back</HeaderBackStyled>
      <HeaderTitleStyled>{props.title}</HeaderTitleStyled>
      <div>
        {props.action ? (
          <HeaderActionStyled onClick={props.action}>add</HeaderActionStyled>
        ) : (
          ''
        )}
      </div>
    </HeaderStyled>
  )
}

export default Header
