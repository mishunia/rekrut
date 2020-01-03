import styled, { css } from 'styled-components'

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  border: 1px solid transparent;

  color: ${({ theme }) => theme.colors.white};
  background-color: #000;
  padding: 12px 24px;

  height: 40px;
  min-width: 100%;

  outline: none;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.button};

  &:hover {
    background-color: transparent;
    border-color: #000;
    color: #000;
  }
  
  /* colors */
  ${({ sec }) =>
    sec &&
    css`
      background-color: #08a6e4;
    `}

  ${({ ter }) =>
    ter &&
    css`
      background-color: #5bddaf;
    `}

  /* sizes */
  ${({ medium }) =>
    medium &&
    css`
      height: 46px;
      font-size: ${({ theme }) => theme.fontSizes.s2};
      font-weight: ${props => props.theme.fontWeights.semiBold};
    `}

  ${({ big }) =>
    big &&
    css`
      height: 60px;
      min-width: 203px;
      font-size: ${({ theme }) => theme.fontSizes.m};
      font-weight: ${props => props.theme.fontWeights.semiBold};
    `}

    ${({ disabled }) =>
      disabled &&
      css`
        pointer-events: none;
        background-color: gray;
      `}
`

export default Button
