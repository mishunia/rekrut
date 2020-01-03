// import React, { useState } from 'react'
// import { createPortal } from 'react-dom'
// import {
//   ModalStyled,
//   ModalHeadStyled,
//   ModalHeadTitleStyled,
//   ModalHeadActionStyled,
//   ModalContainerStyled,
//   ModalContainerTitleStyled,
//   ModalContainerContentStyled
// } from './styles/index'
// import Paragraph from './../../atoms/Paragraph/Paragraph'

// import FormAddPost from './../Forms/FormAddPost'

// export default function FancyModalButton(props) {
//   return (
//     <>
//       <ModalStyled
//         isOpen={props.isOpen}
//         onBackgroundClick={props.onBackgroundClick}
//         onEscapeKeydown={props.onEscapeKeydown}
//       >
//         <ModalHeadStyled>
//           <ModalHeadTitleStyled>
//             <Paragraph>Title</Paragraph>
//           </ModalHeadTitleStyled>
//           <ModalHeadActionStyled onClick={props.toggleModal}>
//             X
//           </ModalHeadActionStyled>
//         </ModalHeadStyled>
//         <ModalContainerStyled>
//           <ModalContainerTitleStyled>
//             <Paragraph center>Title</Paragraph>
//           </ModalContainerTitleStyled>
//           <ModalContainerContentStyled>
//             <FormAddPost userId={props.userId} />
//           </ModalContainerContentStyled>
//         </ModalContainerStyled>
//       </ModalStyled>
//     </>
//   )
// }
