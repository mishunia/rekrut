import styled from 'styled-components'

const PostItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.75);

  padding: 20px;
`
const PostItemRemoveStyled = styled.div`
  flex: 1;
  max-width: 40px;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    transition: 0.2s ease;
  }

  &:hover {
    svg {
      transform: rotate(-30deg);
    }
  }
`

const PostItemContentStyled = styled.div`
  flex: 3;
`

const PostItemOpenStyled = styled.div`
  flex: 1;
  max-width: 100px;
`

export {
  PostItemStyled,
  PostItemRemoveStyled,
  PostItemContentStyled,
  PostItemOpenStyled
}
