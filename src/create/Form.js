import React from 'react'
import styled from 'styled-components'
import Select from './Select'
import SelectPlacement from './SelectPlacement'
import InputTag from './InputTag'
import Sections from '../common/Sections'
import publisher from '../data/publisher.json'
import donna from '../images/donna.png'
import greenLifestyleMag from '../images/green-lifestyle-mag.png'
import happinez from '../images/happinez.png'
import happyWay from '../images/happy-way.png'
import herzstueck from '../images/herzstueck.png'
import landidee from '../images/landidee.png'
import landlust from '../images/landlust.png'
import hygge from '../images/hygge.png'
import myself from '../images/myself.png'
import yogajournal from '../images/yoga-journal.png'

const PageGrid = styled.form`
  display: grid;
  grid-gap: 12px;
  @media (max-width: 800px) {
    margin: 12px;
  }
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
const StyledRadioAreas = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 6px 12px;
  font-family: 'OpenSans', sans-serif;
  align-self: center;
  margin-right: 12px;

  :last-of-type {
    margin: 0;
  }
`
const StyledRadioInput = styled.input`
  align-self: center;
`
const StyledHintHeadline = styled.h3`
  color: #28233c;
  font-size: 0.9em;
  font-weight: bold;
  margin-top: 24px;
`

const StyledHint = styled.p`
  color: #28233c;
  font-size: 0.8em;
  @media (min-width: 800px) {
    width: 50%;
  }
`

export default function Form({
  tagsInput,
  tagsArray,
  data,
  onSubmit,
  onTagsInputChange,
  onInputChange,
  onImageUpload,
  inputKeyDown,
  removeTag,
}) {
  return (
    <PageGrid onSubmit={onSubmit}>
      <Sections text="1. Kampagne erstellen" />
      <StyledInputArea>
        <StyledLabel htmlFor="campaign__name__input">Kampagne</StyledLabel>
        <input
          name="title"
          id="campaign__name__input"
          onInput={onInputChange}
          value={data.title}
          type="text"
          placeholder="Kampagnenname"
        />
      </StyledInputArea>
      <StyledInputArea>
        <StyledLabel htmlFor="brand__input">Brand</StyledLabel>
        <input
          name="brand"
          id="brand__input"
          onInput={onInputChange}
          value={data.brand}
          type="Text"
          placeholder="Brand"
        />
      </StyledInputArea>
      <StyledInputAreaDates>
        <StyledSectionFrom>
          <StyledLabel htmlFor="schedule__input__from">
            Zeitraum (von)
          </StyledLabel>
          <input
            name="scheduleFrom"
            id="schedule__input__from"
            onInput={onInputChange}
            type="date"
            value={data.scheduleFrom}
            required
          />
        </StyledSectionFrom>
        <StyledSectionTo>
          <StyledLabel htmlFor="schedule__input__to">
            Zeitraum (bis)
          </StyledLabel>
          <input
            name="scheduleTo"
            id="schedule__input__to"
            onInput={onInputChange}
            type="date"
            value={data.scheduleTo}
            required
          />
        </StyledSectionTo>
      </StyledInputAreaDates>
      <Sections text="2. Werbemittel" />
      <Select onChange={onInputChange} name="format" value={data.format} />
      <SelectPlacement
        name="placement"
        onChange={onInputChange}
        value={data.placement}
      />
      <StyledRadioAreas>
        <StyledRadioHeadline>Satzspiegel</StyledRadioHeadline>
        <StyledRadioInputGrid>
          <StyledRadioInput
            name="printSpace"
            id="print_space__input-anschnitt"
            type="radio"
            value="Anschnitt"
            checked={data.printSpace === 'Anschnitt' ? data.printSpace : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="print_space__input-anschnitt">
            Anschnitt
          </StyledRadioLabel>
          <StyledRadioInput
            name="printSpace"
            id="print_space__input-satzspiegel"
            type="radio"
            value="Satzspiegel"
            checked={data.printSpace === 'Satzspiegel' ? data.printSpace : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="print_space__input-satzspiegel">
            Satzspiegel
          </StyledRadioLabel>
        </StyledRadioInputGrid>
      </StyledRadioAreas>
      <StyledRadioAreas>
        <StyledRadioHeadline>Farbigkeit</StyledRadioHeadline>
        <StyledRadioInputGrid>
          <StyledRadioInput
            name="colorSchema"
            id="colorschema__input-bw"
            type="radio"
            value="s/w"
            checked={data.colorSchema === 's/w' ? data.colorSchema : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="colorschema__input-bw">
            s/w
          </StyledRadioLabel>
          <StyledRadioInput
            name="colorSchema"
            id="colorschema__input-2c"
            type="radio"
            value="2c"
            checked={data.colorSchema === '2c' ? data.colorSchema : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="colorschema__input-2c">
            2c
          </StyledRadioLabel>
          <StyledRadioInput
            name="colorSchema"
            id="colorschema__input-3c"
            type="radio"
            value="3c"
            checked={data.colorSchema === '3c' ? data.colorSchema : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="colorschema__input-3c">
            3c
          </StyledRadioLabel>
          <StyledRadioInput
            name="colorSchema"
            id="colorschema__input-4c"
            type="radio"
            value="4c"
            checked={data.colorSchema === '4c' ? data.colorSchema : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="colorschema__input-4c">
            4c
          </StyledRadioLabel>
        </StyledRadioInputGrid>
      </StyledRadioAreas>
      <StyledInputArea>
        <StyledLabel htmlFor="ad__input">Creative Upload</StyledLabel>
        <input
          name="ad"
          id="ad__input"
          type="file"
          value={data.ad}
          onChange={onImageUpload}
          style={{ color: 'white', border: 'none' }}
        />
      </StyledInputArea>
      <Sections text="3. Zielgruppe definieren" />
      <StyledInputArea>
        <StyledLabel htmlFor="location__input">Ort</StyledLabel>
        <input
          name="location"
          id="location__input"
          onInput={onInputChange}
          value={data.location}
          type="text"
          placeholder="Orte"
        />
      </StyledInputArea>
      <StyledInputAreaDates>
        <StyledSectionFrom>
          <StyledLabel htmlFor="age__input__from">Alter (ab)</StyledLabel>
          <input
            name="ageFrom"
            id="age__input__from"
            onInput={onInputChange}
            type="number"
            min="10"
            placeholder="min. 10 Jahre"
            value={data.ageFrom}
            required
          />
        </StyledSectionFrom>
        <StyledSectionTo>
          <StyledLabel htmlFor="age__input__to">Alter (bis)</StyledLabel>
          <input
            name="ageTo"
            id="age__input__to"
            onInput={onInputChange}
            type="number"
            max="65+"
            placeholder="max. 65+ Jahre"
            value={data.ageTo}
            required
          />
        </StyledSectionTo>
      </StyledInputAreaDates>
      <StyledRadioAreas>
        <StyledRadioHeadline>Geschlecht</StyledRadioHeadline>
        <StyledRadioInputGrid>
          <StyledRadioInput
            name="gender"
            id="gender__input-both"
            type="radio"
            value="Männer und Frauen"
            checked={data.gender === 'Männer und Frauen' ? data.gender : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="gender__input-both">
            Beide
          </StyledRadioLabel>
          <StyledRadioInput
            name="gender"
            id="gender__input-women"
            type="radio"
            value="Frauen"
            checked={data.gender === 'Frauen' ? data.gender : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="gender__input-women">
            Frauen
          </StyledRadioLabel>
          <StyledRadioInput
            name="gender"
            id="gender__input-men"
            type="radio"
            value="Männer"
            checked={data.gender === 'Männer' ? data.gender : ''}
            onChange={onInputChange}
            style={{ display: 'none', left: '-9999px' }}
          />
          <StyledRadioLabel htmlFor="gender__input-men">
            Männer
          </StyledRadioLabel>
        </StyledRadioInputGrid>
      </StyledRadioAreas>
      <StyledInputArea>
        <StyledLabel htmlFor="tags__input">Detailliertes Targeting</StyledLabel>
        <InputTag
          tagsInput={tagsInput}
          tagsArray={tagsArray}
          inputKeyDown={inputKeyDown}
          removeTag={removeTag}
          name="tags"
          id="tags__input"
          onTagsInputChange={onTagsInputChange}
          type="text"
          placeholder="Demografie, Interessen oder Verhalten"
        />
      </StyledInputArea>
      <Sections text="4. Publisher-Playlist" />
      <StyledInputArea>
        {publisher.map((publisherDetail, index) => {
          return (
            <div>
              <img src={publisherDetail.product_image} alt="" />
              <h1>{publisherDetail.product_title}</h1>
              <p>{publisherDetail.product_description}</p>
            </div>
          )
        })}
      </StyledInputArea>
      <Sections text="5. Budget" />
      <StyledInputArea>
        <StyledLabel htmlFor="budget__input">Budget</StyledLabel>
        <input
          name="budget"
          id="budget__input"
          onInput={onInputChange}
          value={data.budget}
          type="number"
          min="1"
          placeholder="Gesamtbudget in € EUR"
        />
      </StyledInputArea>
      <StyledInputArea>
        <StyledLabel htmlFor="bid__input">Gebot</StyledLabel>
        <input
          name="bid"
          id="bid__input"
          onInput={onInputChange}
          value={data.bid}
          type="number"
          min="1"
          placeholder="TAP in € EUR"
        />
        <StyledHintHeadline>Erklärung TAP</StyledHintHeadline>
        <StyledHint>
          Der Tausend-Auflagen-Preis (TAP) gibt den Geldbetrag an, wie viel eine
          Anzeige für 1.000 Exemplare eines Werbeträgers kostet.
        </StyledHint>
      </StyledInputArea>
      <button>Hinzufügen</button>
    </PageGrid>
  )
}
