import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import BrowseBackArrow from '../common/BrowseBackArrow'
import { getSingleCampaign } from '../services'

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
  color: #a0a09b;
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

export default function Campaign({ props }) {
  function renderTag(text, index) {
    return <Tag key={index}>{text}</Tag>
  }

  const [campaign, setCampaign] = useState()

  useEffect(() => {
    console.log(props.match.params._id)
    getSingleCampaign(props.match.params._id).then(res => {
      console.log(res.data)
      setCampaign(res.data)
    })
  }, [])

  const NumberFormat = require('react-number-format')
  return (
    <React.Fragment>
      <BrowseBackArrow />
      <PageGrid>
        <StyledCampaign>
          <StyledCampaignLabels>Kampage</StyledCampaignLabels>
          <StyledCampaignContents
            style={{ color: '#28233c', fontWeight: 'bold', padding: '4px' }}
          >
            {campaign && campaign.title}
          </StyledCampaignContents>
          <StyledAd
            style={{
              backgroundImage: 'url(' + (campaign && campaign.ad) + ')',
              height: '100%',
              width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <StyledCampaignLabels>Marke</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.brand}
          </StyledCampaignContents>
          <StyledCampaignLabels>Zeitraum</StyledCampaignLabels>
          <StyledCampaignContents>
            {dayjs(campaign && campaign.scheduleFrom).format('DD/MM/YYYY')} -{' '}
            {dayjs(campaign && campaign.scheduleTo).format('DD/MM/YYYY')}
          </StyledCampaignContents>
          <StyledCampaignLabels>Budget</StyledCampaignLabels>
          <StyledCampaignContents>
            <NumberFormat
              value={campaign && campaign.budget}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              suffix={' € EUR (Gesamt)'}
            />
          </StyledCampaignContents>
          <StyledCampaignLabels>Gebot</StyledCampaignLabels>
          <StyledCampaignContents>
            <NumberFormat
              value={campaign && campaign.bid}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              suffix={' € EUR (TAP)'}
            />
          </StyledCampaignContents>
          <StyledCampaignLabels>Format</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.format}
          </StyledCampaignContents>
          <StyledCampaignLabels>Farbschema</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.colorSchema}
          </StyledCampaignContents>
          <StyledCampaignLabels>Satzspiegel</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.printSpace}
          </StyledCampaignContents>
          <StyledCampaignLabels>Platzierung</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.placement}
          </StyledCampaignContents>
          <StyledCampaignLabels>Ort</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.location}
          </StyledCampaignContents>
          <StyledCampaignLabels>Alter</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.ageFrom} - {campaign && campaign.ageTo} Jahre
          </StyledCampaignContents>
          <StyledCampaignLabels>Geschlecht</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign && campaign.gender}
          </StyledCampaignContents>
          <StyledCampaignLabels>Keywords</StyledCampaignLabels>
          <StyledCampaignContents>
            <TagList>{campaign && campaign.tags.map(renderTag)}</TagList>
          </StyledCampaignContents>
          <StyledCampaignLabels>Playlist</StyledCampaignLabels>
          <StyledCampaignContents>
            {campaign &&
              campaign.playlist.map(item => item.product_title).join(', ')}
          </StyledCampaignContents>
        </StyledCampaign>
      </PageGrid>
    </React.Fragment>
  )
}
