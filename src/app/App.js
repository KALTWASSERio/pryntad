import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import CampaignsPage from '../campaigns/CampaignsPage'
import CreateCampaignPage from '../create/CreateCampaignPage'
import {
  getAllCampaigns,
  getCampaignsFromStorage,
  postNewCampaign,
  saveCampaignsToStorage,
} from '../services'
import GlobalStyle from './GlobalStyle'
import { Helmet } from 'react-helmet'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
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

function App() {
  const [campaigns, setCampaigns] = useState(getCampaignsFromStorage())

  useEffect(() => {
    getAllCampaigns().then(res => {
      setCampaigns(res.data)
    })
  }, [])

  useEffect(() => {
    saveCampaignsToStorage(campaigns)
  }, [campaigns])

  function createCampaign(data) {
    postNewCampaign(data).then(res => {
      setCampaigns([...campaigns, res.data])
    })
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>pryntad</title>
        <meta
          name="description"
          content="Der digitale Marktplatz für Print Media"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        >
      </Helmet>
      <Router>
        <Grid>
          <Route
            exact
            path="/"
            render={() => <CampaignsPage campaigns={campaigns} />}
          />
          <Route
            path="/create"
            render={() => <CreateCampaignPage onSubmit={createCampaign} />}
          />
          <Nav>
            <StyledLink exact to="/">
              Dashboard
            </StyledLink>
            <StyledLink to="/create">Kampagne</StyledLink>
          </Nav>
          <GlobalStyle />
        </Grid>
      </Router>
    </React.Fragment>
  )
}

export default App
