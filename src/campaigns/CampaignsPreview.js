import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

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
  grid-template-rows: auto auto auto;
  border-radius: 8px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  box-shadow: 0 2px 4px #a0a09b;
  background: white;
`

const StyledCampaignLabels = styled.div`
  grid-column: 2 / 3;
  grid-auto-flow: column;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #a0a09b;
  align-self: center;
  margin: 4px 12px 4px 12px;
`

const StyledCampaignContents = styled.div`
  font-size: 0.9em;
  grid-column: 3 / 7;
  margin: 4px 12px 4px 12px;
`

const StyledCampaignLabelsMotiv = styled.div`
  display: flex;
  align-items: flex-start;
  grid-column: 2 / 3;
  grid-auto-flow: column;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #a0a09b;
  padding: 0;
  margin: 4px 12px 4px 12px;

  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAd = styled.img`
  width: 50%;
  grid-column: 3 / 7;
  margin: 4px 12px;

  @media (max-width: 600px) {
    grid-column: 6 span;
    width: 100%;
    margin: 0 0;
  }
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

export default function CampaignsPreview(campaign) {
  const NumberFormat = require('react-number-format')

  function renderTag(text, index) {
    return <Tag key={index}>{text}</Tag>
  }

  return (
    <React.Fragment>
      <PageGrid>
        <StyledCampaign>
          <StyledCampaignLabels>Kampage</StyledCampaignLabels>
          <StyledCampaignContents
            style={{ color: '#28233c', fontWeight: 'bold', padding: '4px' }}
          >
            {campaign.title}
          </StyledCampaignContents>
          <StyledCampaignLabelsMotiv>Motiv</StyledCampaignLabelsMotiv>
          <StyledAd src={campaign && campaign.ad} />
          <StyledCampaignLabels>Marke</StyledCampaignLabels>
          <StyledCampaignContents>{campaign.brand}</StyledCampaignContents>
          <StyledCampaignLabels>Zeitraum</StyledCampaignLabels>
          <StyledCampaignContents>
            {dayjs(campaign.scheduleFrom).format('DD/MM/YYYY')} -
            {dayjs(campaign.scheduleTo).format('DD/MM/YYYY')}
          </StyledCampaignContents>
          <StyledCampaignLabels>Budget</StyledCampaignLabels>
          <StyledCampaignContents>
            <NumberFormat
              value={campaign.budget}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              suffix={' € EUR (Gesamt)'}
            />
          </StyledCampaignContents>
          <StyledCampaignLabels>Gebot</StyledCampaignLabels>
          <StyledCampaignContents>
            <NumberFormat
              value={campaign.bid}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              isNumericString
              decimalScale={2}
              fixedDecimalScale
              suffix={' € EUR (TAP)'}
            />
          </StyledCampaignContents>
          <StyledCampaignLabels>Format</StyledCampaignLabels>
          <StyledCampaignContents>{campaign.format}</StyledCampaignContents>
          <StyledCampaignLabels>Farbschema</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign.colorSchema}
          </StyledCampaignContents>
          <StyledCampaignLabels>Satzspiegel</StyledCampaignLabels>
          <StyledCampaignContents>{campaign.printSpace}</StyledCampaignContents>
          <StyledCampaignLabels>Platzierung</StyledCampaignLabels>
          <StyledCampaignContents>{campaign.placement}</StyledCampaignContents>
          <StyledCampaignLabels>Ort</StyledCampaignLabels>
          <StyledCampaignContents>{campaign.location}</StyledCampaignContents>
          <StyledCampaignLabels>Alter</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign.ageFrom} - {campaign.ageTo} Jahre
          </StyledCampaignContents>
          <StyledCampaignLabels>Geschlecht</StyledCampaignLabels>
          <StyledCampaignContents>{campaign.gender}</StyledCampaignContents>
          <StyledCampaignLabels>Keywords</StyledCampaignLabels>
          <StyledCampaignContents>
            <TagList>{campaign.tags.map(renderTag)}</TagList>
          </StyledCampaignContents>
          <StyledCampaignLabels>Playlist</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign.playlist.map(item => item.product_title).join(', ')}
          </StyledCampaignContents>
        </StyledCampaign>
      </PageGrid>
    </React.Fragment>
  )
}
