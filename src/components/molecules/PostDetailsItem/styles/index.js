import styled from 'styled-components'

const PostDetailsItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.gutter.xxl} 0;
`
const PostDetailsItemHeadStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 32px;
`

const PostDetailsItemContentStyled = styled.div`
  width: 100%;
`

export {
  PostDetailsItemStyled,
  PostDetailsItemHeadStyled,
  PostDetailsItemContentStyled
}
