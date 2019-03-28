import React, { useState, useEffect } from 'react'
import Footer from '../common/Footer'
import CampaignListItem from '../campaigns/CampaignListItem'
import styled from 'styled-components'
import { getAllCampaigns } from '../services'

const PageGrid = styled.div`
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
const StyledTitle = styled.div`
  background: white;
  margin-bottom: 12px;
  padding: 12px 8px;
  background: white;
  align-content: center;
  color: #28233c;
  font-size: 1.1em;
  font-weight: bolder;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`

export default function CampaignsList() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    getAllCampaigns().then(res => {
      setCampaigns(res.data)
      console.log(campaigns)
    })
  }, [])

  function ConditionalSections() {
    if (campaigns.length === 0) {
      return <StyledTitle> Du hast keine Kampagnen angelegt</StyledTitle>
    } else {
      return <StyledTitle> Deine Kampagnen </StyledTitle>
    }
  }

  return (
    <React.Fragment>
      <PageGrid>
        <ConditionalSections />
        {campaigns &&
          campaigns.map(campaign => (
            <CampaignListItem {...campaign} key={campaign._id} />
          ))}
      </PageGrid>
      <Footer />
    </React.Fragment>
  )
}
