import React, { useState } from 'react'
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
import FormAddComment from './../../Forms/FormAddComment'

export default function ModalAddComment(props) {
  return (
    <>
      <ModalStyled
        isOpen={props.isOpen}
        onBackgroundClick={props.onBackgroundClick}
        onEscapeKeydown={props.onEscapeKeydown}
      >
        <ModalHeadStyled>
          <ModalHeadTitleStyled>
            <Paragraph>Add comment</Paragraph>
          </ModalHeadTitleStyled>
          <ModalHeadActionStyled onClick={props.toggleModal}>
            X
          </ModalHeadActionStyled>
        </ModalHeadStyled>
        <ModalContainerStyled>
          <ModalContainerTitleStyled>
            <Paragraph center>Add comment form</Paragraph>
          </ModalContainerTitleStyled>
          <ModalContainerContentStyled>
            <FormAddComment
              postId={props.postId}
              closeModal={props.toggleModal}
            />
          </ModalContainerContentStyled>
        </ModalContainerStyled>
      </ModalStyled>
    </>
  )
}
