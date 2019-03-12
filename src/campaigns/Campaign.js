import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const StyledCampaign = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 160px auto;
  grid-column-gap: 12px;
  border-radius: 6px;
  box-shadow: 0 2px 4px #a0a09b;
  margin: 12px;
  @media (max-width: 800px) {
    margin: 12px;
  }
`

const StyledCampaignLabels = styled.p`
  grid-column: 1 / 2;
  grid-auto-flow: column;
  font-size: 0.8em;
  text-transform: uppercase;
  color: #dcdcdc;
  align-self: center;
  padding-left: 12px;
`

const StyledCampaignContents = styled.p`
  font-size: 0.9em;
  grid-column: 2 / 7;
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
  budget,
  bid,
}) {
  function renderTag(text, index) {
    return <Tag key={index}>{text}</Tag>
  }

  return (
    <div css="scroll-snap-align: start">
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
        <StyledCampaignLabels>Budget (Gesamt)</StyledCampaignLabels>
        <StyledCampaignContents>{budget} € EUR</StyledCampaignContents>
        <StyledCampaignLabels>Gebot (TAP)</StyledCampaignLabels>
        <StyledCampaignContents>{bid} € EUR</StyledCampaignContents>
        <StyledCampaignLabels>Format (Farbigkeit)</StyledCampaignLabels>
        <StyledCampaignContents>
          {format} ({colorSchema})
        </StyledCampaignContents>
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
      </StyledCampaign>
    </div>
  )
}
