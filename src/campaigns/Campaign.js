import React from 'react'
import styled from 'styled-components'

const StyledCampaign = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 150px auto;
  grid-column-gap: 12px;
  padding: 12px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  position: relative;
`
const StyledAd = styled.div`
  grid-column: 6 span;
`

const StyledCampaignLabels = styled.p`
  color: #dcdcdc;
  grid-column: 1 / 2;
  font-size: 0.75em;
  text-transform: uppercase;
  align-self: center;
`
const StyledCampaignContents = styled.p`
  font-size: 0.9em;
  grid-column: 2 / 7;
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
  background: #502896;
  border-radius: 6px;
  color: white;
  font-size: 0.9em;
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
    <div css="padding: 10px 0 0; scroll-snap-align: start;">
      <StyledCampaign>
        <StyledAd
          style={{
            backgroundImage: 'url(' + ad + ')',
            height: '100%',
            width: '100%',
            //objectFit: 'cover',
            backgroundSize: '200px',
            backgroundRepeat: 'no-repeat',
            //maxWidth: '300px',
            //maxHeight: '300px',
          }}
        />
        <StyledCampaignLabels>Kampage</StyledCampaignLabels>
        <StyledCampaignContents>{title}</StyledCampaignContents>
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
