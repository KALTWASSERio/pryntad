import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MdHome } from 'react-icons/md'
import { MdList } from 'react-icons/md'
import { MdAdd } from 'react-icons/md'

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
  height: 48px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #28233c;
  color: white;
  text-decoration: none;

  &.active {
    background: #d70064;
  }
`
const MenuItem = styled.h4`
  font-size: 0.7em;
`

export default function Footer() {
  return (
    <Nav>
      <StyledLink exact to="/">
        <MdHome size="1.4em" /> <MenuItem>Home</MenuItem>
      </StyledLink>
      <StyledLink to="/create">
        <MdList size="1.4em" />
        <MenuItem>Kampagnen</MenuItem>
      </StyledLink>
      <StyledLink to="/create">
        <MdAdd size="1.4em" />
        <MenuItem>Hinzufügen</MenuItem>
      </StyledLink>
    </Nav>
  )
}
