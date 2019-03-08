import React from 'react'
import styled from 'styled-components'
import Campaign from './Campaign'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  overflow: scroll;
  margin: 12px;
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
