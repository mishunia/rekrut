import React from 'react'
import Spinner from 'react-spinkit'
import { LoaderBoxContainerStyled } from './styles'

const LoaderBox = props => {
  return (
    <LoaderBoxContainerStyled loaderBg={props.loaderBg}>
      <Spinner
        fadeIn="0"
        name="ball-grid-pulse"
        loaderColor={props.loaderColor}
      />
    </LoaderBoxContainerStyled>
  )
}

export default LoaderBox
