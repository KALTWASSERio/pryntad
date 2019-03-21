import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { withRouter } from 'react-router'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  overflow: hidden;
  background: white !important;
  z-index: 10;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  position: relative;
`
const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  height: 30px;
  cursor: pointer;
`
function Header(props) {
  return (
    <StyledHeader>
      <StyledImage
        data-cy="header-logo"
        src={logo}
        alt="logo"
        onClick={() => props.history.push('/')}
      />
    </StyledHeader>
  )
}
export default withRouter(Header)
