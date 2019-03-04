import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'
import Campaign from './Campaign'
import CampaignContainer from './CampaignContainer'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`

export default function CampaignsPage({ campaigns }) {
  return (
    <PageGrid>
      <Header />
      <CampaignContainer>
        {campaigns.map(campaign => (
          <Campaign {...campaign} key={campaign._id} />
        ))}
      </CampaignContainer>
    </PageGrid>
  )
}
