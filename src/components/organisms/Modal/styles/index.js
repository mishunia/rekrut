import styled from 'styled-components'
import Modal from 'styled-react-modal'

const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalStyled = Modal.styled`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: ${props => props.theme.colors.white};
`

const ModalHeadStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 12px;
  color: #fff;
  width: 100%;
`

const ModalHeadTitleStyled = styled.div`
  color: #fff;
`

const ModalHeadActionStyled = styled.div`
  color: #fff;
  cursor: pointer;
`

const ModalContainerStyled = styled.div`
  padding: 20px;
  background-color: #fff;
  width: 100%;
`

const ModalContainerTitleStyled = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

const ModalContainerContentStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export {
  SpecialModalBackground,
  ModalStyled,
  ModalHeadStyled,
  ModalHeadTitleStyled,
  ModalHeadActionStyled,
  ModalContainerStyled,
  ModalContainerTitleStyled,
  ModalContainerContentStyled
}
