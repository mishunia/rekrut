import React from 'react'
import {
  HeaderStyled,
  HeaderBackStyled,
  HeaderTitleStyled,
  HeaderActionStyled
} from './styles'

export default function Header(props) {
  return (
    <HeaderStyled>
      <HeaderBackStyled onClick={props.back}>Back</HeaderBackStyled>
      <HeaderTitleStyled>{props.title}</HeaderTitleStyled>
      <HeaderActionStyled onClick={props.action}>add</HeaderActionStyled>
    </HeaderStyled>
  )
}
