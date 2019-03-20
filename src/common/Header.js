import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  /* border-bottom: 1px solid #dcdcdc; */
  overflow: hidden;
  z-index: 6502;
  /*  border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
  background: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`
const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  height: 30px;
`

export default function Header() {
  return (
    <StyledHeader>
      <StyledImage data-cy="header-logo" src={logo} alt="logo" />
    </StyledHeader>
  )
}
