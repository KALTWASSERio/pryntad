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
      <StyledLabel htmlFor="ad-select">Anzeigenformat</StyledLabel>
      <select
        id="ad-select"
        name={name}
        onChange={onChange}
        value={value}
        required
      >
        <option value="">-- Wähle ein Format --</option>
        <option value="1/4 hoch">1/4 hoch</option>
        <option value="1/4 quer">1/4 quer</option>
        <option value="1/3 hoch">1/3 hoch</option>
        <option value="1/3 quer">1/3 quer</option>
        <option value="1/2 hoch">1/2 hoch</option>
        <option value="1/2 quer">1/2 quer</option>
        <option value="2/3 hoch">2/3 hoch</option>
        <option value="2/3 quer">2/3 quer</option>
        <option value="1/1">1/1</option>
        <option value="2/1">2/1</option>
      </select>
    </StyledInputArea>
  )
}
