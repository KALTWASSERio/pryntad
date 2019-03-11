import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import SelectPlacement from './SelectPlacement'
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
const StyledRadioHeadline = styled.p`
  color: #28233c;
  display: flex;
  align-items: flex-end;
  margin-top: 12px;
  margin-bottom: 8px;
`

const StyledRadioInputGrid = styled.div`
  display: flex;
  flex-direction: row;
`
const StyledRadioLabel = styled.label`
  color: #a0a09b;
  font-weight: lighter;
  display: inline-block;
  width: 50%;
  background-color: white;
  border: 1px solid #dcdcdc;
  font-size: 0.9em;
  font-weight: lighter;
  text-align: center;
  padding: 6px 14px;
  justify-content: center;
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
      <Sections text="2. Werbemittel" />
      <Select onChange={onInputChange} name="format" value={data.format} />
      <SelectPlacement
        onChange={onInputChange}
        name="placement"
        value={data.placement}
      />
      <StyledRadioHeadline>Satzspiegel</StyledRadioHeadline>
      <StyledRadioInputGrid>
        <StyledRadioLabel htmlFor="print_space__input-anschnitt">
          Anschnitt
        </StyledRadioLabel>
        <input
          id="print_space__input-anschnitt"
          type="radio"
          name="printSpace"
          value="Anschnitt"
          checked={data.printSpace === 'Anschnitt' ? data.printSpace : ''}
          onChange={onInputChange}
        />
        <StyledRadioLabel htmlFor="print_space__input-satzspiegel">
          Satzspiegel
        </StyledRadioLabel>
        <input
          id="print_space__input-satzspiegel"
          type="radio"
          name="printSpace"
          value="Satzspiegel"
          checked={data.printSpace === 'Satzspiegel' ? data.printSpace : ''}
          onChange={onInputChange}
        />
      </StyledRadioInputGrid>
      <StyledRadioHeadline>Satzspiegel</StyledRadioHeadline>
      <StyledRadioInputGrid>
        <StyledRadioLabel htmlFor="colorschema__input-bw">s/w</StyledRadioLabel>
        <input
          id="colorschema__input-bw"
          type="radio"
          name="colorSchema"
          value="s/w"
          checked={data.colorSchema === 's/w' ? data.colorSchema : ''}
          onChange={onInputChange}
        />
        <StyledRadioLabel htmlFor="colorschema__input-2c">2c</StyledRadioLabel>
        <input
          id="colorschema__input-2c"
          type="radio"
          name="colorSchema"
          value="2c"
          checked={data.colorSchema === '2c' ? data.colorSchema : ''}
          onChange={onInputChange}
        />
        <StyledRadioLabel htmlFor="colorschema__input-3c">3c</StyledRadioLabel>
        <input
          id="colorschema__input-3c"
          type="radio"
          name="colorSchema"
          value="3c"
          checked={data.colorSchema === '3c' ? data.colorSchema : ''}
          onChange={onInputChange}
        />
        <StyledRadioLabel htmlFor="colorschema__input-4c">4c</StyledRadioLabel>
        <input
          id="colorschema__input-4c"
          type="radio"
          name="colorSchema"
          value="4c"
          checked={data.colorSchema === '4c' ? data.colorSchema : ''}
          onChange={onInputChange}
        />
      </StyledRadioInputGrid>
      <StyledInputArea>
        <StyledLabel htmlFor="ad__input">Creative Upload</StyledLabel>
        <input
          id="ad__input"
          type="file"
          value={data.ad}
          name="ad"
          onChange={onImageUpload}
          style={{ color: 'white', border: 'none' }}
        />
      </StyledInputArea>
      <Sections text="3. Zielgruppe definieren" />
      <StyledInputArea>
        <StyledLabel htmlFor="tags__input">Detailliertes Targeting</StyledLabel>
        <input
          id="tags__input"
          onInput={onInputChange}
          value={data.tags}
          type="text"
          placeholder="Demografie, Interessen oder Verhalten"
          name="tags"
        />
      </StyledInputArea>
      <button>Hinzufügen</button>
    </PageGrid>
  )
}
