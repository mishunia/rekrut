import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.gutter.xl};
  margin-bottom: ${({ theme }) => theme.gutter.xxxl};
`

const HeaderBackStyled = styled.div`
  color: ${({ theme }) => theme.colors.white};
`

const HeaderTitleStyled = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const HeaderActionStyled = styled.div`
  color: ${({ theme }) => theme.colors.white};
`

export { HeaderStyled, HeaderBackStyled, HeaderTitleStyled, HeaderActionStyled }
