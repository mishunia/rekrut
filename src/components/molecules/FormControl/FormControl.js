import React from 'react'
import {
  FormControlStyled,
  FormControlInputStyled,
  FormControlLabelStyled
} from './styles/index'
import Input from './../../atoms/Input/Input'
import Label from './../../atoms/Label/Label'

const FormControl = props => {
  return (
    <FormControlStyled>
      <FormControlLabelStyled>
        <Label>{props.label}</Label>
      </FormControlLabelStyled>
      <FormControlInputStyled>
        <Input value={props.value}></Input>
      </FormControlInputStyled>
    </FormControlStyled>
  )
}

export default FormControl
