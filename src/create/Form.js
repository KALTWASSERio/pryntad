import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import Sections from '../common/Sections'

const PageGrid = styled.form`
  display: grid;
  grid-gap: 12px;
`

const StyledInputArea = styled.section`
  display: flex;
  flex-direction: column;
`

const StyledInputAreaDates = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledSectionFrom = styled.section`
  display: flex;
  flex-direction: column;
`

const StyledSectionTo = styled.section`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: #28233c;
  display: flex;
  align-items: flex-end;
  margin-top: 12px;
  margin-bottom: 8px;
`

export default function Form({ data, onSubmit, onInputChange, onImageUpload }) {
  return (
    <PageGrid onSubmit={onSubmit}>
      <Sections text="1. Kampagne erstellen" />
      <StyledInputArea>
        <StyledLabel htmlFor="campaign__name__input">Kampagne</StyledLabel>
        <input
          id="campaign__name__input"
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
        <StyledLabel htmlFor="ad__input">Werbemittel</StyledLabel>
        <input
          id="ad__input"
          type="file"
          value={data.ad}
          name="ad"
          onChange={onImageUpload}
          style={{ color: 'white', border: 'none' }}
        />
      </StyledInputArea>
      <Sections text="2. Zielgruppe definieren" />
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
    </PageGrid>
  )
}
