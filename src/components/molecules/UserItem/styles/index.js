import styled from 'styled-components'

const UserItemStyled = styled.div`
  padding: 20px;
  border: 1px solid black;
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
