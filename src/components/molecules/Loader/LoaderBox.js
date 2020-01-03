import React from 'react'
import Spinner from 'react-spinkit'
import { LoaderBoxContainerStyled } from './styles'

const LoaderBox = props => {
  return (
    <LoaderBoxContainerStyled loaderBg={props.loaderBg}>
      <Spinner fadeIn="none" name="ball-grid-pulse" />
    </LoaderBoxContainerStyled>
  )
}

export default LoaderBox
