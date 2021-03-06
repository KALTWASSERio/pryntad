import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import Select from './Select'
import SelectPlacement from './SelectPlacement'
import InputTag from './InputTag'
import Sections from '../common/Sections'
import CampaignsPreview from '../campaigns/CampaignsPreview'
import BrowseBack from '../common/BrowseBackArrow'
import Stepper from './Stepper'
import Tooltip from './Tooltip'

const PageGrid = styled.form`
  display: grid;
  grid-gap: 12px;
  @media (max-width: 1000px) {
    position: 'relative';
  }
`

const StyledInputArea = styled.section`
  display: flex;
  flex-direction: column;
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

  @media (max-width: 600px) {
    max-height: 120px;
    grid-column: 1 / 2;
    padding-right: 6px;
  }
`
const StyledPlaylistProduct = styled.div`
  margin: 0;
  grid-column: 2 / 3;
  grid-row: 1/ -1;
  @media (max-width: 600px) {
    grid-column: 2 / 3;
  }
`

const StyledPlaylistProductDetail = styled.div`
  color: #28233c;
  font-size: 1em;
  grid-row: 1 / 2;
  grid-column: 3 / 5;
  grid-gap: 12px;

  @media (max-width: 600px) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }
`

const StyledProduct = styled.h3`
  color: #28233c;
  font-size: 1.5em;
  font-weight: bold;
  grid-row: 1 / -1;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 1.2em;
    grid-column: 2 / 4;
    margin-bottom: 6px;
  }
`
const StyledPublisher = styled.div`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #d70064;
  grid-row: 1 / 1;
  margin-bottom: 12px;

  @media (max-width: 600px) {
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

  @media (max-width: 600px) {
    font-size: 1em;
    margin-bottom: 6px;
  }
`
const StyledCirculation = styled.div`
  font-size: 1.2em;
  color: #28233c;
  margin-bottom: 12px;
  grid-column: 3 / 5;

  @media (max-width: 600px) {
    font-size: 1em;
    margin-bottom: 6px;
  }
`

const StyledHint = styled.p`
  color: #a0a09b;
  font-size: 0.8em;
  line-height: 1.5em;
  @media (min-width: 800px) {
    width: 50%;
    justify-self: center;
  }
`
const StyledExplanation = styled.p`
  color: #28233c;
  font-size: 1em;
  line-height: 1.5em;
`

const StyledButtonArea = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 24px;
  margin: 24px 0;
  justify-self: center;
`

const StyledButtonPassiv = styled.button`
  background: white;
  border: 2px solid #d70064;
  justify-content: center;
  color: #d70064;

  :hover {
    background-color: #d70064;
    border: 2px solid #d70064;
    color: white;
  }
`

const StyledButtonActive = styled.button`
  background: #d70064;
  border: 2px solid #d70064;
  justify-self: stretch;

  :hover {
    background-color: white;
    border: 2px solid #d70064;
    color: #d70064;
  }
`

const AbortLink = styled.div`
  color: #dcdcdc;
  text-decoration: underline;
  font-size: 0.8em;
  grid-column: 1 / -1;
  justify-self: center;
  cursor: pointer;
`

const StyledButtonCommit = styled.button`
  background: #64a56e;
  border: 2px solid #64a56e;
  justify-content: space-evenly;

  :hover {
    background-color: white;
    border: 2px solid #64a56e;
    color: #64a56e;
  }
`
const StyledDelete = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  grid-row: 1 / 2;
  grid-column: 4 / 5;

  @media (max-width: 600px) {
    grid-gap: 2px;
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    align-self: flex-start;
    justify-self: flex-end;
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
  removePublisher,
  playlistArray,
  ad,
  props,
  step,
  setStep,
}) {
  const NumberFormat = require('react-number-format')

  return (
    <React.Fragment>
      <PageGrid onSubmit={onSubmit} style={{ position: 'relative' }}>
        {step === 0 && (
          <React.Fragment>
            <BrowseBack />
            <Sections text="Schritt 1/6: Kampagne anlegen" />
            <Stepper step={step} />
            <StyledInputArea>
              <StyledLabel htmlFor="campaign__name__input">
                Kampagne
              </StyledLabel>
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

            <StyledButtonArea>
              <StyledButtonPassiv onClick={() => props.history.push('/')}>
                Zurück
              </StyledButtonPassiv>
              <StyledButtonActive onClick={() => setStep(1)}>
                Weiter
              </StyledButtonActive>
              <AbortLink onClick={() => props.history.push('/')}>
                Abbrechen
              </AbortLink>
            </StyledButtonArea>
          </React.Fragment>
        )}
        {step === 1 && (
          <React.Fragment>
            <BrowseBack />
            <Sections text="Schritt 2/6: Werbemittel" />
            <Stepper step={step} />
            <Select
              onChange={onInputChange}
              name="format"
              value={data.format}
            />
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
                  checked={
                    data.printSpace === 'Anschnitt' ? data.printSpace : ''
                  }
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
                style={{ color: 'white', border: 'none', padding: '0' }}
              />
            </StyledInputArea>
            <StyledButtonArea>
              <StyledButtonPassiv onClick={() => setStep(0)}>
                Zurück
              </StyledButtonPassiv>
              <StyledButtonActive onClick={() => setStep(2)}>
                Weiter
              </StyledButtonActive>
              <AbortLink onClick={() => props.history.push('/')}>
                Abbrechen
              </AbortLink>
            </StyledButtonArea>
          </React.Fragment>
        )}
        {step === 2 && (
          <React.Fragment>
            <BrowseBack />
            <Sections text="Schritt 3/6: Targeting" />
            <Stepper step={step} />
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
            <StyledRadioAreas>
              <StyledRadioHeadline>Geschlecht</StyledRadioHeadline>
              <StyledRadioInputGrid>
                <StyledRadioInput
                  name="gender"
                  id="gender__input-both"
                  type="radio"
                  value="Männer und Frauen"
                  checked={
                    data.gender === 'Männer und Frauen' ? data.gender : ''
                  }
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
              <StyledButtonActive onClick={() => setStep(3)}>
                Weiter
              </StyledButtonActive>
              <AbortLink onClick={() => props.history.push('/')}>
                Abbrechen
              </AbortLink>
            </StyledButtonArea>
          </React.Fragment>
        )}
        {step === 3 && (
          <React.Fragment>
            <BrowseBack />
            <Sections text="Schritt 4/6: Titel-Playlist" />
            <Stepper step={step} />
            <StyledInputArea>
              <StyledExplanation>
                Deine Titel-Playlist wird auf Basis deiner
                Kampagneninformationen erzeugt und zeigt alle Printerzeugnisse,
                die zu deinem Targeting matchen.
              </StyledExplanation>

              {playlistArray
                ? playlistArray.map((publisher, i) => {
                    return (
                      <React.Fragment>
                        <StyledPlaylistEntry key={publisher.id}>
                          <StyledPlaylistImage
                            src={publisher.product_image}
                            alt={publisher.product_title}
                          />
                          <StyledPlaylistProduct>
                            <StyledProduct>
                              {publisher.product_title}
                            </StyledProduct>
                            <StyledPublisher>
                              {publisher.publisher}
                            </StyledPublisher>
                          </StyledPlaylistProduct>
                          <StyledPlaylistProductDetail>
                            <StyledReach>
                              <NumberFormat
                                value={publisher.reach}
                                displayType={'text'}
                                thousandSeparator={'.'}
                                decimalSeparator={','}
                                prefix={'Reichweite Gesamt: '}
                              />
                            </StyledReach>
                            <StyledCirculation>
                              <NumberFormat
                                value={publisher.paid_circulation}
                                displayType={'text'}
                                thousandSeparator={'.'}
                                decimalSeparator={','}
                                prefix={'Verkaufte Auflage: '}
                              />
                            </StyledCirculation>
                          </StyledPlaylistProductDetail>
                          <StyledDelete>
                            <MdClose
                              color="#dc695a"
                              size="1.5em"
                              onClick={() => removePublisher(i)}
                            />
                          </StyledDelete>
                        </StyledPlaylistEntry>
                        <StyledDivider />
                      </React.Fragment>
                    )
                  })
                : null}
            </StyledInputArea>
            <StyledHint>
              Mit Klick auf Weiter bestätigst du deine Playlist. Alle Publisher
              dieser Playlist werden dein Angebot einsehen und annehmen können.
            </StyledHint>
            <StyledButtonArea>
              <StyledButtonPassiv onClick={() => setStep(2)}>
                Zurück
              </StyledButtonPassiv>
              <StyledButtonActive onClick={() => setStep(4)}>
                Weiter
              </StyledButtonActive>
              <AbortLink onClick={() => props.history.push('/')}>
                Abbrechen
              </AbortLink>
            </StyledButtonArea>
          </React.Fragment>
        )}
        {step === 4 && (
          <React.Fragment>
            <BrowseBack />
            <Sections text="Schritt 5/6: Budget" />
            <Stepper step={step} />
            <StyledInputArea>
              <StyledLabel htmlFor="budget__input">
                Budget (€)
                <Tooltip props={props} text="Dein Budget wird maximal ausgeschöpft, sofern das Publisher-Netzwerk dein Angebot in Höhe des vollstädnigen Budgets annimmt. Andernfalls werden nur Teilbudgets abgenommen." />
              </StyledLabel>
              <input
                name="budget"
                id="budget__input"
                onInput={onInputChange}
                value={data.budget}
                type="number"
                min="1"
                placeholder="Gesamtbudget in € EUR"
                allowEmptyFormatting={true}
              />
            </StyledInputArea>
            <StyledInputArea>
              <StyledLabel htmlFor="bid__input">Gebot (€)<Tooltip props={props} text="Wir bieten nicht mehr als diesen Betrag pro 1.000 gedruckter Anzeigen. Sollte dieser Betrag zu niedrig gewählt sein, kannst du möglicherweise dein Budget nicht ausschöpfen." /></StyledLabel>
              <input
                name="bid"
                id="bid__input"
                onInput={onInputChange}
                value={data.bid}
                type="number"
                min="1"
                step=".01"
                placeholder="TAP* in € EUR"
                allowEmptyFormatting={true}
              />
              <StyledHint>
                *Der Tausend-Auflagen-Preis (TAP) gibt den Eurobetrag an, wie
                viel eine Anzeige für 1.000 Exemplare eines Werbeträgers kostet.
              </StyledHint>
            </StyledInputArea>
            <StyledButtonArea>
              <StyledButtonPassiv onClick={() => setStep(3)}>
                Zurück
              </StyledButtonPassiv>
              <StyledButtonActive onClick={() => setStep(5)}>
                Weiter
              </StyledButtonActive>
              <AbortLink onClick={() => props.history.push('/')}>
                Abbrechen
              </AbortLink>
            </StyledButtonArea>
          </React.Fragment>
        )}
        {step === 5 && (
          <React.Fragment>
            <BrowseBack />
            <Sections text="Schritt 6/6: Bestätigung" />
            <Stepper step={step} />
            <StyledExplanation>
              Deine Kampagne ist startklar, überprüfe deine Einstellungen für
              diese Kampagne.
            </StyledExplanation>
            <CampaignsPreview
              title={data.title}
              ad={ad}
              brand={data.brand}
              scheduleFrom={data.scheduleFrom}
              sheduleTo={data.scheduleTo}
              budget={data.budget}
              bid={data.bid}
              format={data.format}
              colorSchema={data.colorSchema}
              printSpace={data.printSpace}
              location={data.location}
              placement={data.placement}
              ageFrom={data.ageFrom}
              ageTo={data.ageTo}
              gender={data.gender}
              tags={tagsArray}
              playlist={playlistArray}
              step={step}
            />
            <StyledHint>
              Mit Klick auf Bestätigung, wird die Kampagne auf den Marktplatz
              von pryntad gestellt und ist für Publisher sichtbar.
            </StyledHint>
            <StyledButtonArea>
              <StyledButtonPassiv onClick={() => setStep(4)}>
                Zurück
              </StyledButtonPassiv>
              <StyledButtonCommit>Bestätigen</StyledButtonCommit>
              <AbortLink onClick={() => props.history.push('/')}>
                Abbrechen
              </AbortLink>
            </StyledButtonArea>
          </React.Fragment>
        )}
      </PageGrid>
    </React.Fragment>
  )
}
