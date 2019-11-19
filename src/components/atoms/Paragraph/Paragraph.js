import styled, { css } from 'styled-components'

const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.base};
  font-size: ${props => props.theme.fontSizes.s2};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights.l};
  text-align: left;


  /* align */
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}

  /* alts */
  ${({ p2 }) =>
    p2 &&
    css`
      font-size: ${props => props.theme.fontSizes.m};
    `}

  ${({ p3 }) =>
    p3 &&
    css`
      font-size: ${props => props.theme.fontSizes.s};
    `}

  ${({ p4 }) =>
    p4 &&
    css`
      font-size: ${props => props.theme.fontSizes.s3};
      font-weight: ${props => props.theme.fontWeights.bold};
    `}

    ${({ p5 }) =>
      p5 &&
      css`
        font-size: ${props => props.theme.fontSizes.xxl2};
        font-weight: ${props => props.theme.fontWeights.light};
      `}
`

export default Paragraph
