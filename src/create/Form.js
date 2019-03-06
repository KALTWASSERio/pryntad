import React from 'react'
import styled from 'styled-components'
import Select from './Select'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 80px 80px 80px 80px 80px 48px;
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
        <StyledLabel htmlFor="kampagnenname__input">Kampagne</StyledLabel>
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
        <StyledLabel htmlFor="brand__input">Brand</StyledLabel>
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
          <StyledLabel htmlFor="schedule__input__from">
            Zeitraum (von)
          </StyledLabel>
          <input
            id="schedule__input__from"
            onInput={onInputChange}
            type="date"
            name="scheduleFrom"
            value={data.scheduleFrom}
            required
          />
        </StyledSectionFrom>
        <StyledSectionTo>
          <StyledLabel htmlFor="schedule__input__to">
            Zeitraum (bis)
          </StyledLabel>
          <input
            id="schedule__input__to"
            onInput={onInputChange}
            type="date"
            name="scheduleTo"
            value={data.scheduleTo}
            required
          />
        </StyledSectionTo>
      </StyledInputAreaDates>
      <Select onChange={onInputChange} name="format" value={data.format} />
      <StyledInputArea>
        <StyledLabel htmlFor="tags__input">Tags</StyledLabel>
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
