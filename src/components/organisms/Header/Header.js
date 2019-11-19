import React from 'react'
import {
  HeaderStyled,
  HeaderBackStyled,
  HeaderTitleStyled,
  HeaderActionStyled
} from './styles'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <HeaderStyled>
      <HeaderBackStyled>
        <Link to="/">Back</Link>
      </HeaderBackStyled>
      <HeaderTitleStyled>{props.title}</HeaderTitleStyled>
      <HeaderActionStyled>add</HeaderActionStyled>
    </HeaderStyled>
  )
}
