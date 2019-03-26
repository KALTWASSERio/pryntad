import React from 'react'
import Footer from '../common/Footer'
import CampaignListItem from '../campaigns/CampaignListItem'
import styled from 'styled-components'

const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
  z-index: -1;
`

export default function CampaignsList({ campaigns }) {
  return (
    <React.Fragment>
      <PageGrid>
        {campaigns
          .map(campaign => (
            <CampaignListItem {...campaign} key={campaign._id} />
          ))
          .sort((a, b) => {
            return a.date < b.date ? -1 : 1
          })}
      </PageGrid>
      <Footer />
    </React.Fragment>
  )
}
