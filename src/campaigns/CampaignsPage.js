import React from 'react'
import styled from 'styled-components'
import Campaign from './Campaign'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
`

export default function CampaignsPage({ campaigns }) {
  return (
    <PageGrid>
      {campaigns.map(campaign => (
        <Campaign {...campaign} key={campaign._id} />
      ))}
    </PageGrid>
  )
}
