import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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

export default function Footer() {
  return (
    <Nav>
      <StyledLink exact to="/">
        Dashoard
      </StyledLink>
      <StyledLink to="/create">Kampagne anlegen</StyledLink>
    </Nav>
  )
}
