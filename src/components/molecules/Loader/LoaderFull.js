import React from 'react'
import Spinner from 'react-spinkit'
import { LoaderFullContainerStyled } from './styles'

const LoaderFull = props => {
  return (
    <LoaderFullContainerStyled loaderBg={props.loaderBg}>
      <Spinner fadeIn="none" name="ball-pulse-rise" color={props.loaderColor} />
    </LoaderFullContainerStyled>
  )
}

export default LoaderFull
