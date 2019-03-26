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
  color: #dcdcdc;
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

const StyledDetail = styled.div`
  grid-column: 7 / 8;
  align-self: center;

  @media (max-width: 690px) {
    display: block;
    padding: 12px 0 0;
  }
`

const StyledLink = styled(Link)`
  color: #d70064;
  text-decoration: none;
`

export default function CampaignListItem({
  title,
  brand,
  scheduleFrom,
  scheduleTo,
  budget,
  bid,
  date,
  _id,
}) {
  var NumberFormat = require('react-number-format')
  return (
    <StyledCampaign>
      <StyledLine>
        <StyledCampaignLabels>Kampage</StyledCampaignLabels>
        <StyledLink to={`/campaign/${_id}`}>
          <StyledCampaignContents
          /*  style={{ color: '#28233c', fontWeight: 'bold', padding: '4px' }} */
          >
            {title}
          </StyledCampaignContents>
        </StyledLink>
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
            thousandSeparator={true}
            decimalSeparator={'.'}
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
            thousandSeparator={true}
            decimalSeparator={'.'}
            suffix={' €'}
          />
        </StyledCampaignContents>
      </StyledLine>
      <StyledDetail>
        <StyledLink to={`/campaign/${_id}`}>
          <MdKeyboardArrowRight color="#d70064" size="1.5em" />
        </StyledLink>
      </StyledDetail>
    </StyledCampaign>
  )
}
