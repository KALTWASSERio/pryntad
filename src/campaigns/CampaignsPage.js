import React from 'react'
import styled from 'styled-components'
import Campaign from './Campaign'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin: 12px 12px 0 12px;
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
