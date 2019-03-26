import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
  z-index: -1;
`

const StyledCampaign = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto 160px auto;
  border-radius: 8px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  box-shadow: 0 2px 4px #a0a09b;
  background: white;
`

const StyledCampaignLabels = styled.div`
  grid-column: 1 / 2;
  grid-auto-flow: column;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #dcdcdc;
  align-self: center;
  margin: 4px 12px 4px 12px;
`

const StyledCampaignContents = styled.div`
  font-size: 0.9em;
  grid-column: 2 / 7;
  margin: 4px 12px 4px 12px;
`

const StyledAd = styled.div`
  grid-column: 6 span;
`

const TagList = styled.ul`
  display: flex;
  align-self: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 4px 6px;
  background: #d70064;
  border-radius: 6px;
  color: white;
  font-size: 0.9em;
  font-weight: lighter;
`
const BrowseBack = styled.div`
  position: fixed;
  top: 10px;
  left: 4px;
  z-index: 11;
`

export default function Campaign({
  title,
  brand,
  scheduleFrom,
  scheduleTo,
  format,
  ad,
  placement,
  printSpace,
  colorSchema,
  location,
  gender,
  ageFrom,
  ageTo,
  tags,
  playlist,
  budget,
  bid,
  date,
  id,
}) {
  function renderTag(text, index) {
    return <Tag key={index}>{text}</Tag>
  }

  function goBack() {
    window.history.back()
  }

  console.log(date)

  var NumberFormat = require('react-number-format')
  return (
    <React.Fragment>
      <BrowseBack onClick={() => goBack()}>
        <MdKeyboardArrowLeft color="Black" size="2.5em" />
      </BrowseBack>
      <PageGrid>
        <StyledCampaign>
          <StyledCampaignLabels>Kampage</StyledCampaignLabels>
          <StyledCampaignContents
            style={{ color: '#28233c', fontWeight: 'bold', padding: '4px' }}
          >
            {title}
          </StyledCampaignContents>
          <StyledAd
            style={{
              backgroundImage: 'url(' + ad + ')',
              height: '100%',
              width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <StyledCampaignLabels>Marke</StyledCampaignLabels>
          <StyledCampaignContents>{brand}</StyledCampaignContents>
          <StyledCampaignLabels>Zeitraum</StyledCampaignLabels>
          <StyledCampaignContents>
            {dayjs(scheduleFrom).format('DD/MM/YYYY')} -{' '}
            {dayjs(scheduleTo).format('DD/MM/YYYY')}
          </StyledCampaignContents>
          <StyledCampaignLabels>Budget</StyledCampaignLabels>
          <StyledCampaignContents>
            <NumberFormat
              value={budget}
              displayType={'text'}
              thousandSeparator={true}
              decimalSeparator={'.'}
              suffix={' € EUR (Gesamt)'}
            />
          </StyledCampaignContents>
          <StyledCampaignLabels>Gebot</StyledCampaignLabels>
          <StyledCampaignContents>
            <NumberFormat
              value={bid}
              displayType={'text'}
              thousandSeparator={true}
              decimalSeparator={'.'}
              suffix={' € EUR (TAP)'}
            />
          </StyledCampaignContents>
          <StyledCampaignLabels>Format</StyledCampaignLabels>
          <StyledCampaignContents>{format}</StyledCampaignContents>
          <StyledCampaignLabels>Farbschema</StyledCampaignLabels>
          <StyledCampaignContents>{colorSchema}</StyledCampaignContents>
          <StyledCampaignLabels>Satzspiegel</StyledCampaignLabels>
          <StyledCampaignContents>{printSpace}</StyledCampaignContents>
          <StyledCampaignLabels>Platzierung</StyledCampaignLabels>
          <StyledCampaignContents>{placement}</StyledCampaignContents>
          <StyledCampaignLabels>Ort</StyledCampaignLabels>
          <StyledCampaignContents>{location}</StyledCampaignContents>
          <StyledCampaignLabels>Alter</StyledCampaignLabels>
          <StyledCampaignContents>
            {ageFrom} - {ageTo} Jahre
          </StyledCampaignContents>
          <StyledCampaignLabels>Geschlecht</StyledCampaignLabels>
          <StyledCampaignContents>{gender}</StyledCampaignContents>
          <StyledCampaignLabels>Keywords</StyledCampaignLabels>
          <StyledCampaignContents>
            {tags && <TagList>{tags.map(renderTag)}</TagList>}
          </StyledCampaignContents>
          <StyledCampaignLabels>Playlist</StyledCampaignLabels>
          <StyledCampaignContents>
            {playlist.map(item => item.product_title).join(', ')}
          </StyledCampaignContents>
        </StyledCampaign>
      </PageGrid>
    </React.Fragment>
  )
}
