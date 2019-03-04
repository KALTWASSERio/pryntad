import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 40px 60px 40px 48px;
`

export default function Form({ data, onSubmit, onInputChange }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        onChange={onInputChange}
        value={data.title}
        type="text"
        placeholder="Kampagnenname"
        name="title"
      />
      <input
        onChange={onInputChange}
        value={data.brand}
        placeholder="Brand"
        name="brand"
      />
      <input
        onChange={onInputChange}
        value={data.tags}
        type="text"
        placeholder="Tags"
        name="tags"
      />
      <button>Hinzufügen</button>
    </StyledForm>
  )
}
