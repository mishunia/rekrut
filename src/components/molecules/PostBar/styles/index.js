import styled from 'styled-components'

const PostBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`

const PostBarActionStyled = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`

export { PostBarStyled, PostBarActionStyled }
