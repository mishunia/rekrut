import styled from 'styled-components'

const CommentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const CommentItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.75);
`

const CommentItemHeadStyled = styled.div`
  background-color: #000;
  padding: 20px;
  color: #fff;

  a {
    color: #fff;
  }
`

const CommentItemContentStyled = styled.div`
  width: 100%;
  padding: 20px;
`

export {
  CommentContainerStyled,
  CommentItemStyled,
  CommentItemHeadStyled,
  CommentItemContentStyled
}
