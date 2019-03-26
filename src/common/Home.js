import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import Plattform from '../images/pryntad-plattform-white.png'
import { withRouter } from 'react-router'
import '../assets/fonts/MyFontsWebfontsKit.css'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr auto;
  overflow-y: scroll;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  scroll-behavior: auto;
  padding: 14px 14px 0 14px;
  ::-webkit-scrollbar {
    display: none;
  }
  background: #d70064;
`

const StyledImage = styled.img`
  justify-self: center;
  height: 50vh;
  width: 50vh;
  grid-row: 1 / 2;
`
const StyledTitle = styled.h1`
  font-family: HurmeGeometricSans3-Bold;
  font-weight: normal;
  font-size: normal;
`

const StyledInfoText = styled.div`
  font-size: 1.2em;
  font-family: 'Open Sans', sans-serif;
  color: white;
  text-align: center;
  line-height: 1.5em;
  max-width: 50%;
  padding: 12px;
  margin: 0 auto;

  @media (max-width: 560px) {
    display: none;
  }
`

function Home(props) {
  return (
    <React.Fragment>
      <PageGrid>
        <StyledImage src={Plattform} alt="" />
        <section>
          <StyledTitle
            style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}
          >
            Printwerbung einfach und effizient buchen
          </StyledTitle>
          <StyledInfoText>
            <p>
              pryntad bringt Advertiser, Agenturen und Publisher auf einem
              digitalen Marktplatz zusammen.
            </p>
            <p>
              Anzeigenbuchungen werden gegen Gebot und Targeting möglich.
              Publisher, deren Titel matchen, entscheiden, welche Gebote sie
              annehmen.
            </p>
          </StyledInfoText>
        </section>
      </PageGrid>
      <Footer />
    </React.Fragment>
  )
}

export default withRouter(Home)
