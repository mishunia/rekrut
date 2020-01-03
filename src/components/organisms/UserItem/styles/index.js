import styled from 'styled-components'

const UserItemStyled = styled.div`
  padding: 20px;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.75);
`

const UserItemHeadStyled = styled.div`
  margin-bottom: 20px;
`

const UserItemContactStyled = styled.div`
  margin-bottom: 20px;

  a {
    display: block;
    color: black;
  }
`

const UserItemInfoStyled = styled.div`
  margin-bottom: 20px;
`

const UserItemActionStyled = styled.div`
  display: flex;
  justify-content: center;
`

export {
  UserItemStyled,
  UserItemHeadStyled,
  UserItemContactStyled,
  UserItemInfoStyled,
  UserItemActionStyled
}
