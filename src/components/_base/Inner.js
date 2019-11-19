import styled from 'styled-components'

const InnerStyled = styled.div`
  max-width: ${props => props.theme.size.inner};
  padding: ${props => props.theme.gutter.xl} ${props => props.theme.gutter.l};
  width: 100%;
  margin: 0 auto;
`

export default InnerStyled
