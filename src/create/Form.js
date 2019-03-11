import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import SelectPlacement from './SelectPlacement'
import Sections from '../common/Sections'
/* import InputRange from 'react-input-range' */

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
  margin-right: 6px;
`

const StyledSectionTo = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
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
  text-align: center;
  padding: 6px 14px;
  font-family: 'OpenSans', sans-serif;
  align-self: center;
  margin-right: 12px;
`
const StyledRadioInput = styled.input`
  align-self: center;
`

export default function Form({ data, onSubmit, onInputChange, onImageUpload }) {
  return (
    <PageGrid onSubmit={onSubmit}>
      <Sections text="1. Kampagne erstellen" />
      <StyledInputArea>
        <StyledLabel htmlFor="campaign__name__input">Kampagne</StyledLabel>
        <input
          id="campaign__name__input"
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
        <StyledRadioInput
          id="print_space__input-anschnitt"
          type="radio"
          name="printSpace"
          value="Anschnitt"
          checked={data.printSpace === 'Anschnitt' ? data.printSpace : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="print_space__input-anschnitt">
          Anschnitt
        </StyledRadioLabel>
        <StyledRadioInput
          id="print_space__input-satzspiegel"
          type="radio"
          name="printSpace"
          value="Satzspiegel"
          checked={data.printSpace === 'Satzspiegel' ? data.printSpace : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="print_space__input-satzspiegel">
          Satzspiegel
        </StyledRadioLabel>
      </StyledRadioInputGrid>
      <StyledRadioHeadline>Farbigkeit</StyledRadioHeadline>
      <StyledRadioInputGrid>
        <StyledRadioInput
          id="colorschema__input-bw"
          type="radio"
          name="colorSchema"
          value="s/w"
          checked={data.colorSchema === 's/w' ? data.colorSchema : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="colorschema__input-bw">s/w</StyledRadioLabel>
        <StyledRadioInput
          id="colorschema__input-2c"
          type="radio"
          name="colorSchema"
          value="2c"
          checked={data.colorSchema === '2c' ? data.colorSchema : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="colorschema__input-2c">2c</StyledRadioLabel>
        <StyledRadioInput
          id="colorschema__input-3c"
          type="radio"
          name="colorSchema"
          value="3c"
          checked={data.colorSchema === '3c' ? data.colorSchema : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="colorschema__input-3c">3c</StyledRadioLabel>
        <StyledRadioInput
          id="colorschema__input-4c"
          type="radio"
          name="colorSchema"
          value="4c"
          checked={data.colorSchema === '4c' ? data.colorSchema : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="colorschema__input-4c">4c</StyledRadioLabel>
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
        <StyledLabel htmlFor="location__input">Ort</StyledLabel>
        <input
          id="location__input"
          onInput={onInputChange}
          value={data.location}
          type="text"
          placeholder="Orte"
          name="location"
        />
      </StyledInputArea>
      <StyledInputAreaDates>
        <StyledSectionFrom>
          <StyledLabel htmlFor="age__input__from">Alter (ab)</StyledLabel>
          <input
            id="age__input__from"
            onInput={onInputChange}
            type="number"
            min="10"
            name="ageFrom"
            placeholder="min. 10 Jahre"
            value={data.ageFrom}
            required
          />
        </StyledSectionFrom>
        <StyledSectionTo>
          <StyledLabel htmlFor="age__input__to">Alter (bis)</StyledLabel>
          <input
            id="age__input__to"
            onInput={onInputChange}
            type="number"
            max="65+"
            name="ageTo"
            placeholder="max. 65+ Jahre"
            value={data.ageTo}
            required
          />
        </StyledSectionTo>
      </StyledInputAreaDates>
      <StyledRadioHeadline>Geschlecht</StyledRadioHeadline>
      <StyledRadioInputGrid>
        <StyledRadioInput
          id="gender__input-both"
          type="radio"
          name="gender"
          value="Männer und Frauen"
          checked={data.gender === 'Männer und Frauen' ? data.gender : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="gender__input-both">Beide</StyledRadioLabel>
        <StyledRadioInput
          id="gender__input-women"
          type="radio"
          name="gender"
          value="Frauen"
          checked={data.gender === 'Frauen' ? data.gender : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="gender__input-women">
          Frauen
        </StyledRadioLabel>
        <StyledRadioInput
          id="gender__input-men"
          type="radio"
          name="gender"
          value="Männer"
          checked={data.gender === 'Männer' ? data.gender : ''}
          onChange={onInputChange}
          style={{ display: 'none' }}
        />
        <StyledRadioLabel htmlFor="gender__input-men">Männer</StyledRadioLabel>
      </StyledRadioInputGrid>
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
