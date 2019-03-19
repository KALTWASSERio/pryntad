import React, { useState } from 'react'
import styled from 'styled-components'
import Select from './Select'
import SelectPlacement from './SelectPlacement'
import InputTag from './InputTag'
import Sections from '../common/Sections'

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
const StyledRadioHeadline = styled.div`
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

const StyledPlaylistEntry = styled.div`
  display: grid;
  grid-gap: 12px;
  margin-top: 12px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2px;
  }
`

const StyledDivider = styled.div`
  border: 0.5px solid #dcdcdc;
  margin-top: 12px;
  margin-bottom: 12px;
`

const StyledPlaylistImage = styled.img`
  display: flex;
  max-height: 150px;
  grid-row: 1 / 4;

  @media (max-width: 560px) {
    max-height: 120px;
    grid-column: 1 / 2;
  }
`
const StyledPlaylistProduct = styled.div`
  margin: 0;
  grid-column: 2 / 3;
  @media (max-width: 560px) {
    grid-column: 2 / 5;
  }
`

const StyledPlaylistProductDetail = styled.div`
  color: #28233c;
  font-size: 1em;
  font-weight: bold;
  grid-column: 3 / 5;
  grid-gap: 12px;

  @media (max-width: 560px) {
    grid-column: 2 / 4;
  }
`

const StyledProduct = styled.h3`
  color: #28233c;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 560px) {
    font-size: 1.2em;
    grid-column: 2 / 4;
    margin-bottom: 6px;
  }
`
const StyledPublisher = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #d70064;
  margin-bottom: 12px;

  @media (max-width: 560px) {
    grid-column: 2 / 4;
    font-size: 0.6em;
    margin: 0;
  }
`
const StyledReach = styled.div`
  font-size: 1.2em;
  color: #28233c;
  margin-bottom: 12px;
  grid-column: 3 / 5;

  @media (max-width: 560px) {
    font-size: 1em;
    margin-bottom: 6px;
  }
`
const StyledCirculation = styled.div`
  font-size: 1.2em;
  color: #28233c;
  margin-bottom: 12px;
  grid-column: 3 / 5;

  @media (max-width: 560px) {
    font-size: 1em;
    margin-bottom: 6px;
  }
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
  line-height: 1.5em;
  @media (min-width: 800px) {
    width: 50%;
  }
`
const StyledExplanation = styled.p`
  color: #28233c;
  font-size: 1em;
  line-height: 1.5em;
`
const StyledButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const StyledButtonPassiv = styled.button`
  background: #fac8d7;

  :hover {
    background-color: white;
    border: 2px solid #fac8d7;
    color: #fac8d7;
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
  playlistArray,
  playlistUpdate,
}) {
  const [step, setStep] = useState(0)

  var NumberFormat = require('react-number-format')

  function onClickPlaylistLoad(event) {
    setStep(4)
    playlistUpdate()
  }

  return (
    <PageGrid onSubmit={onSubmit}>
      {step === 0 ? (
        <React.Fragment>
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
          <StyledButtonArea>
            <button onClick={() => setStep(1)}>Weiter</button>
          </StyledButtonArea>
        </React.Fragment>
      ) : null}
      {step === 1 ? (
        <React.Fragment>
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
                checked={
                  data.printSpace === 'Satzspiegel' ? data.printSpace : ''
                }
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
          <StyledButtonArea>
            <StyledButtonPassiv onClick={() => setStep(0)}>
              Zurück
            </StyledButtonPassiv>
            <button onClick={() => setStep(2)}>Weiter</button>
          </StyledButtonArea>
        </React.Fragment>
      ) : null}
      {step === 2 ? (
        <React.Fragment>
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
            <StyledLabel htmlFor="tags__input">
              Detailliertes Targeting
            </StyledLabel>
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
          <StyledButtonArea>
            <StyledButtonPassiv onClick={() => setStep(1)}>
              Zurück
            </StyledButtonPassiv>
            <button onClick={() => setStep(3)}>Weiter</button>
          </StyledButtonArea>
        </React.Fragment>
      ) : null}
      {step === 3 ? (
        <React.Fragment>
          <Sections text="4. Publisher-Playlist" />
          <StyledInputArea>
            <StyledExplanation>
              Deine Publisher Playlist wird auf Basis deiner
              Kampagneninformationen erzeugt und zeigt alle Printerzeugnisse,
              die zu deinem Targeting matchen.
            </StyledExplanation>

            {playlistArray
              ? playlistArray.map(publisherDetail => {
                  return (
                    <React.Fragment>
                      <StyledPlaylistEntry>
                        <StyledPlaylistImage
                          src={publisherDetail.product_image}
                          alt={publisherDetail.product_title}
                        />
                        <StyledPlaylistProduct key={publisherDetail.id}>
                          <StyledProduct>
                            {publisherDetail.product_title}
                          </StyledProduct>
                          <StyledPublisher>
                            {publisherDetail.publisher}
                          </StyledPublisher>
                        </StyledPlaylistProduct>
                        <StyledPlaylistProductDetail>
                          <StyledReach>
                            <NumberFormat
                              value={publisherDetail.reach}
                              displayType={'text'}
                              thousandSeparator={true}
                              decimalSeparator={'.'}
                              prefix={'Reichweite Gesamt: '}
                            />
                          </StyledReach>

                          <StyledCirculation>
                            <NumberFormat
                              value={publisherDetail.paid_circulation}
                              displayType={'text'}
                              thousandSeparator={true}
                              decimalSeparator={'.'}
                              prefix={'Verkaufte Auflage: '}
                            />
                          </StyledCirculation>
                        </StyledPlaylistProductDetail>
                      </StyledPlaylistEntry>
                      <StyledDivider />
                    </React.Fragment>
                  )
                })
              : null}
          </StyledInputArea>
          <StyledButtonArea>
            <StyledButtonPassiv onClick={() => setStep(2)}>
              Zurück
            </StyledButtonPassiv>
            <button onClick={() => onClickPlaylistLoad()}>Weiter</button>
          </StyledButtonArea>
        </React.Fragment>
      ) : null}
      {step === 4 ? (
        <React.Fragment>
          <Sections text="5. Budget" />
          <StyledInputArea>
            <StyledLabel htmlFor="budget__input">Budget (€)</StyledLabel>
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
            <StyledLabel htmlFor="bid__input">Gebot (€)</StyledLabel>
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
              Der Tausend-Auflagen-Preis (TAP) gibt den Geldbetrag an, wie viel
              eine Anzeige für 1.000 Exemplare eines Werbeträgers kostet.
            </StyledHint>
          </StyledInputArea>
          <StyledButtonArea>
            <StyledButtonPassiv onClick={() => setStep(3)}>
              Zurück
            </StyledButtonPassiv>
            <button onClick={() => setStep(5)}>Weiter</button>
          </StyledButtonArea>
        </React.Fragment>
      ) : null}
      {step === 5 ? <button>Hinzufügen</button> : null}
    </PageGrid>
  )
}
