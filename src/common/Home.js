import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import Plattform from '../images/pryntad-plattform-white.png'
import { withRouter } from 'react-router'
import '../assets/fonts/MyFontsWebfontsKit.css'

const PageGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto auto;
  overflow-y: scroll;
  justify-content: center;
  width: 100%;
  max-width: 800px;
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
const StyledButton = styled.button`
  background: #d70064;
  border: 2px solid white;
  justify-self: center;
  padding: 8px 16px;
  margin-bottom: 72px;

  :hover {
    background-color: white;
    border: 2px solid #d70064;
    color: #d70064;
  }
`

const StyledTitle = styled.h1`
  font-family: HurmeGeometricSans3-Bold;
  font-weight: normal;
  font-size: normal;
`

function Home(props) {
  return (
    <React.Fragment>
      <PageGrid>
        <StyledImage src={Plattform} alt="" />
        <StyledTitle
          style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}
        >
          Printwerbung einfach und effizient buchen
        </StyledTitle>
        {/* <StyledButton onClick={() => props.history.push('/create')}> Kampagne anlegen </StyledButton> */}
      </PageGrid>
      <Footer />
    </React.Fragment>
  )
}

export default withRouter(Home)
