import styled from 'styled-components'

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.iconColor};
  svg {
    height: 1em;
    width: ${props => props.iconWidth};
    font-size: ${props => props.iconHeight};
    fill: currentColor;
  }
`
export default IconWrapper
