import styled, { css } from 'styled-components'

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.gutter.s};
  font-size: ${({ theme }) => theme.fontSizes.s3};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.gutter.l};

  height: 30px;
  width: 100%;

  outline: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.dark};
  }

  ${({ newsletter }) =>
    newsletter &&
    css`
      border-radius: ${({ theme }) => theme.gutter.xl};
      height: 46px;
      max-width: 100%;
    `};

  ${({ textarea }) =>
    textarea &&
    css`
      min-width: 100%;
      height: 100%;
      min-height: 182px;
    `};
`

export default Input
