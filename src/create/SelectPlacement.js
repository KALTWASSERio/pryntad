import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  color: #28233c;
  display: flex;
  align-items: flex-end;
  margin-top: 12px;
  margin-bottom: 8px;
`
const StyledInputArea = styled.section`
  display: flex;
  flex-direction: column;
`

export default function Select({ name, value, onChange }) {
  return (
    <StyledInputArea>
      <StyledLabel htmlFor="placement-select">Platzierung</StyledLabel>
      <select
        id="placement-select"
        name={name}
        onChange={onChange}
        value={value}
        required
      >
        <option value="">-- Wähle ein Platzierung --</option>
        <option value="Keine Platzierung">Keine Platzierung</option>
        <option value="U2 / Seite 2">U2 / Seite 2</option>
        <option value="U2 + Seite 3">U2 + Seite 3</option>
        <option value="U3">U3</option>
        <option value="U4">U4</option>
      </select>
    </StyledInputArea>
  )
}
