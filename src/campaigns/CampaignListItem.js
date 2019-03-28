import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const StyledCampaign = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr 0.3fr;
  grid-template-rows: auto;
  justify-content: space-evenly;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px #a0a09b;
  background: white;

  @media (max-width: 690px) {
    display: flex;
    flex-direction: column;
    padding: 12px 0 0;
  }
`
const StyledLine = styled.div`
  grid-auto-flow: row;

  @media (max-width: 690px) {
    display: flex;
    flex-direction: row;
  }
`

const StyledCampaignLabels = styled.div`
  grid-auto-flow: column;
  font-size: 0.9em;
  text-transform: uppercase;
  color: #a0a09b;
  margin: 4px 12px 4px 12px;

  @media (max-width: 690px) {
    display: grid;
    grid-template-columns: minmax(100px, 100px);
  }
`

const StyledCampaignContents = styled.div`
  font-size: 0.9em;
  justify-self: flex-start;
  margin: 4px 12px 4px 12px;
  padding-bottom: 12px;

  @media (max-width: 690px) {
    padding-bottom: 0;
  }
`

const StyledLineD = styled.div`
  grid-auto-flow: row;
  background: #d70064;
  border-radius: 0 8px 8px 0;

  @media (max-width: 690px) {
    display: flex;
    flex-direction: row;
    border-radius: 0 0 8px 8px;
    justify-content: center;
  }
`

const StyledLink = styled(Link)`
  background: #d70064;
  color: white;
  text-decoration: none;
  font-weight: bold;
  align-self: stretch;
  justify-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 8px 8px 0;

  @media (max-width: 690px) {
    display: flex;
    flex-direction: row;
    border-radius: 0 0 8px 8px;
    justify-content: center;
  }
`
const StyledTextLink = styled(Link)`
  color: #d70064;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1em;
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
  const NumberFormat = require('react-number-format')

  return (
    <StyledCampaign>
      <StyledLine>
        <StyledCampaignLabels>Kampage</StyledCampaignLabels>
        <StyledTextLink to={`/campaign/${_id}`}>
          <StyledCampaignContents>{title}</StyledCampaignContents>
        </StyledTextLink>
      </StyledLine>
      <StyledLine>
        <StyledCampaignLabels>Marke</StyledCampaignLabels>
        <StyledCampaignContents>{brand}</StyledCampaignContents>
      </StyledLine>
      <StyledLine>
        <StyledCampaignLabels>Zeitraum</StyledCampaignLabels>
        <StyledCampaignContents>
          {dayjs(scheduleFrom).format('DD/MM/YYYY')} -{' '}
          {dayjs(scheduleTo).format('DD/MM/YYYY')}
        </StyledCampaignContents>
      </StyledLine>
      <StyledLine>
        <StyledCampaignLabels>Budget</StyledCampaignLabels>
        <StyledCampaignContents>
          <NumberFormat
            value={budget}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            suffix={' €'}
          />
        </StyledCampaignContents>
      </StyledLine>
      <StyledLine>
        <StyledCampaignLabels>Gebot</StyledCampaignLabels>
        <StyledCampaignContents>
          <NumberFormat
            value={bid}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            suffix={' €'}
          />
        </StyledCampaignContents>
      </StyledLine>
      <StyledLink to={`/campaign/${_id}`}>
        <StyledLineD>
          <MdKeyboardArrowRight color="white" size="1.6em" />
        </StyledLineD>
      </StyledLink>
    </StyledCampaign>
  )
}
