import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Header from '../common/Header'
import Home from '../common/Home'
import CampaignsList from '../campaigns/CampaignsList'
import CreateCampaignPage from '../create/CreateCampaignPage'
import Confirmation from '../create/Confirmation'
import Campaign from '../campaigns/Campaign'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
function App() {
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
        <link
          rel="stylesheet"
          type="text/css"
          href="../assets/fonts/MyFontsWebfontsKit.css"
        />
      </Helmet>
      <Router>
        <Grid>
          <Header />
          <Route exact path="/" component={Home} />
          <Route
            path="/dashboard"
            render={props => <CampaignsList props={props} />}
          />
          <Route
            path="/create"
            render={props => <CreateCampaignPage props={props} />}
          />
          <Route path="/confirmation" component={Confirmation} />
          <Route
            path="/campaign/:_id"
            render={props => <Campaign props={props} />}
          />
          <GlobalStyle />
        </Grid>
      </Router>
    </React.Fragment>
  )
}
export default App
