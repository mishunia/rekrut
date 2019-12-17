import styled from 'styled-components'

const CommentListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  height: 100%;
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
`

const CommentListItemStyled = styled.li`
  width: 100%;
  margin-bottom: 20px;
`

export { CommentListItemStyled, CommentListStyled }
