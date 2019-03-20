import React from 'react'
import styled from 'styled-components'
import Campaign from './Campaign'
import { NavLink } from 'react-router-dom'

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
  background: white;
`
const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
  height: 48px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #28233c;
  color: white;
  text-decoration: none;

  &.active {
    background: #d70064;
  }
`

export default function CampaignsPage({ campaigns }) {
  return (
    <React.Fragment>
      <PageGrid>
        {campaigns.map(campaign => (
          <Campaign {...campaign} key={campaign._id} />
        ))}
      </PageGrid>
      <Nav>
        <StyledLink exact to="/">
          Dashoard
        </StyledLink>
        <StyledLink to="/create">Kampagne anlegen</StyledLink>
      </Nav>
    </React.Fragment>
  )
}
