import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  color: #d70064;
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`
const StyledInputArea = styled.section`
  display: grid;
`

export default function Select({ name, value, onChange }) {
  return (
    <StyledInputArea>
      <StyledLabel for="ad-select">Anzeigenformat</StyledLabel>
      <select id="ad-select" name={name} onChange={onChange} value={value}>
        <option value="">-- Wähle ein Format --</option>
        <option value="1/4">1/4</option>
        <option value="1/3">1/3</option>
        <option value="1/2">1/2</option>
        <option value="1/1">1/1</option>
      </select>
    </StyledInputArea>
  )
}
