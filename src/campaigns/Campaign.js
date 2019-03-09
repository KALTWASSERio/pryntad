import React from 'react'
import styled from 'styled-components'

const StyledCampaign = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto 160px auto;
  grid-column-gap: 12px;
  border-radius: 6px;
  box-shadow: 0 2px 4px #a0a09b;
  margin: 12px;
  scroll-snap-align: start;
`

const StyledCampaignLabels = styled.p`
  grid-column: 1 / 2;
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
  tags,
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
          {scheduleFrom} - {scheduleTo}
        </StyledCampaignContents>
        <StyledCampaignLabels>Format</StyledCampaignLabels>
        <StyledCampaignContents>{format}</StyledCampaignContents>
        <StyledCampaignLabels>Keywords</StyledCampaignLabels>
        <StyledCampaignContents>
          {tags && <TagList>{tags.map(renderTag)}</TagList>}
        </StyledCampaignContents>
      </StyledCampaign>
    </div>
  )
}
