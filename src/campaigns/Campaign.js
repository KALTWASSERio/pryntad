import React from 'react'
import styled from 'styled-components'
import cola from '../images/cola.jpg'

const StyledCampaign = styled.section`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(6, 1fr);
  padding: 12px;
  background: white;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
  position: relative;
`

const StyledCampaignContent = styled.section`
  grid-column: 5 span;
`

const TagList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 2px 6px;
  background: #502896;
  border-radius: 6px;
  color: white;
  font-size: 0.8em;
`
const StyledAd = styled.img`
  grid-column: 1 span;
  height: 200px;
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
        <StyledAd src={ad} alt="" style={{ width: '100%' }} />
        <StyledCampaignContent>
          <h3>Kampage: {title}</h3>
          <p>Marke: {brand}</p>
          <p>
            Zeitraum: {scheduleFrom} - {scheduleTo}{' '}
          </p>
          <p>Format: {format} </p>
          {tags && <TagList>{tags.map(renderTag)}</TagList>}
        </StyledCampaignContent>
      </StyledCampaign>
    </div>
  )
}
