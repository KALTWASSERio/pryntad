import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 80px 80px 80px 80px 48px;
`
const StyledInputArea = styled.section`
  display: grid;
  grid-auto-flow: rows;
`
const StyledInputAreaDates = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px;
  grid-gap: 4px;
`
const StyledSectionFrom = styled.section`
  display: grid;
  grid-template-rows: auto auto;
`

const StyledSectionTo = styled.section`
  display: grid;
  grid-template-rows: auto auto;
`

const StyledLabel = styled.label`
  color: #d70064;
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`

export default function Form({ data, onSubmit, onInputChange }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputArea>
        <StyledLabel for="kampagnenname__input">Kampagne</StyledLabel>
        <input
          id="kampagnenname__input"
          label={'Test'}
          onInput={onInputChange}
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
          onInput={onInputChange}
          value={data.brand}
          type="Text"
          placeholder="Brand"
          name="brand"
        />
      </StyledInputArea>
      <StyledInputAreaDates>
        <StyledSectionFrom>
          <StyledLabel for="schedule__input__from">Zeitraum (von)</StyledLabel>
          <input
            id="schedule__input__from"
            onInput={onInputChange}
            type="date"
            name="scheduleFrom"
            value={data.scheduleFrom}
          />
        </StyledSectionFrom>
        <StyledSectionTo>
          <StyledLabel for="schedule__input__to">Zeitraum (bis)</StyledLabel>
          <input
            id="schedule__input__to"
            onInput={onInputChange}
            type="date"
            name="scheduleTo"
            value={data.scheduleTo}
          />
        </StyledSectionTo>
      </StyledInputAreaDates>
      <StyledInputArea>
        <StyledLabel for="tags__input">Tags</StyledLabel>
        <input
          id="tags__input"
          onInput={onInputChange}
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
