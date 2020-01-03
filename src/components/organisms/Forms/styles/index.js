import styled from 'styled-components'

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`

// Control
const FormControlStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

const FormControlLabelStyled = styled.div`
  margin-bottom: 8px;
`

const FormControlInputStyled = styled.div`
  width: 100%;
`

const FormActionStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const FormActionItemStyled = styled.div`
  width: 100%;
  margin-bottom: 12px;
`

export {
  FormStyled,
  FormControlStyled,
  FormControlInputStyled,
  FormControlLabelStyled,
  FormActionStyled,
  FormActionItemStyled
}
