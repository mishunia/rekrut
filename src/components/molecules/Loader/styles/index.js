import styled, { css } from 'styled-components'

const LoaderFullContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderBoxContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export { LoaderFullContainerStyled, LoaderBoxContainerStyled }
