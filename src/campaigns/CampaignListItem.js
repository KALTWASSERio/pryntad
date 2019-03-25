import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const StyledCampaign = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`

export default function CampaignListItem({
  title,
  brand,
  scheduleFrom,
  scheduleTo,
  budget,
  bid,
  _id,
}) {
  var NumberFormat = require('react-number-format')
  return (
    <StyledLink to={`/campaign/${_id}`}>
      <StyledCampaign>
        <StyledCampaignLabels>Kampage</StyledCampaignLabels>
        <StyledCampaignContents
          style={{ color: '#28233c', fontWeight: 'bold', padding: '4px' }}
        >
          {title}
        </StyledCampaignContents>
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
      </StyledCampaign>
    </StyledLink>
  )
}
