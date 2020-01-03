import React from 'react'
import {
  ModalStyled,
  ModalHeadStyled,
  ModalHeadTitleStyled,
  ModalHeadActionStyled,
  ModalContainerStyled,
  ModalContainerTitleStyled,
  ModalContainerContentStyled
} from './../styles/index'
import Paragraph from './../../../atoms/Paragraph/Paragraph'
import FormAddPost from './../../Forms/FormAddPost'

const ModalAddPost = props => {
  return (
    <>
      <ModalStyled
        isOpen={props.isOpen}
        onBackgroundClick={props.onBackgroundClick}
        onEscapeKeydown={props.onEscapeKeydown}
      >
        <ModalHeadStyled>
          <ModalHeadTitleStyled>
            <Paragraph>Title</Paragraph>
          </ModalHeadTitleStyled>
          <ModalHeadActionStyled onClick={props.toggleModal}>
            X
          </ModalHeadActionStyled>
        </ModalHeadStyled>
        <ModalContainerStyled>
          <ModalContainerTitleStyled>
            <Paragraph center>Title</Paragraph>
          </ModalContainerTitleStyled>
          <ModalContainerContentStyled>
            <FormAddPost userId={props.userId} closeModal={props.toggleModal} />
          </ModalContainerContentStyled>
        </ModalContainerStyled>
      </ModalStyled>
    </>
  )
}

export default ModalAddPost
