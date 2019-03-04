import React from 'react'
import styled from 'styled-components'

const StyledCampaign = styled.section`
  padding: 18px 18px 0;
  background: white;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
  position: relative;
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

export default function Campaign({ title, brand, shedule, tags }) {
  function renderTag(text, index) {
    return <Tag key={index}>{text}</Tag>
  }

  return (
    <div css="padding: 10px 0 0; scroll-snap-align: start;">
      <StyledCampaign>
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{shedule}</p>
        {tags && <TagList>{tags.map(renderTag)}</TagList>}
      </StyledCampaign>
    </div>
  )
}
