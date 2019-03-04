import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 80px 80px 80px 48px;
`
const StyledInputArea = styled.section`
  display: grid;
  grid-auto-flow: rows;
`

const StyledLabel = styled.label`
  display: block;
  padding: 4px;
`

export default function Form({ data, onSubmit, onInputChange }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputArea>
        <StyledLabel for="kampagnenname__input">Kampagne</StyledLabel>
        <input
          id="kampagnenname__input"
          label={'Test'}
          onChange={onInputChange}
          value={data.title}
          type="text"
          placeholder="Kampagnenname"
          name="title"
        />
      </StyledInputArea>
      <StyledInputArea>
        <StyledLabel for="brand__input">Brand</StyledLabel>
        <input
          id="brand__input"
          onChange={onInputChange}
          value={data.brand}
          placeholder="Brand"
          name="brand"
        />
      </StyledInputArea>
      <StyledInputArea>
        <StyledLabel for="tags__input">Tags</StyledLabel>
        <input
          id="tags__input"
          onChange={onInputChange}
          value={data.tags}
          type="text"
          placeholder="Tags"
          name="tags"
        />
      </StyledInputArea>
      <button>Hinzufügen</button>
    </StyledForm>
  )
}
