import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Header from '../common/Header'
import CampaignsPage from '../campaigns/CampaignsPage'
import CreateCampaignPage from '../create/CreateCampaignPage'
import {
  getAllCampaigns,
  getCampaignsFromStorage,
  postNewCampaign,
  saveCampaignsToStorage,
} from '../services'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 60px auto 48px;
  position: fixed;
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
        <title>pryntad</title>
        <meta
          name="description"
          content="pryntad der ditale Marktplatz für Print Media. Lokalisiere deine Zielgruppe und buche deine Anzeige gegen Gebot - jetzt ausprobieren!"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <Router>
        <Grid>
          <Header />
          <Route
            exact
            path="/"
            render={() => <CampaignsPage campaigns={campaigns} />}
          />
          <Route
            path="/create"
            render={() => <CreateCampaignPage onSubmit={createCampaign} />}
          />
          <Route path="/marketplace" render={() => <div>success</div>} />
          <Nav>
            <StyledLink exact to="/">
              Dashoard
            </StyledLink>
            <StyledLink to="/create">Kampagne anlegen</StyledLink>
          </Nav>
          <GlobalStyle />
        </Grid>
      </Router>
    </React.Fragment>
  )
}

export default App
