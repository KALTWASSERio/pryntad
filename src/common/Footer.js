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
  height: 60px;
  box-shadow: 1px -1px 1px -1px rgba(0, 0, 0, 0.1);
`

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  color: #28233c;
  text-decoration: none;

  &.active {
    color: #d70064;
  }
`
const MenuItem = styled.h4`
  font-size: 0.8em;
  font-weight: bolder;
`

export default function Footer() {
  return (
    <Nav>
      <StyledLink exact to="/">
        <MdHome size="1.6em" /> <MenuItem>Home</MenuItem>
      </StyledLink>
      <StyledLink to="/dashboard">
        <MdList size="1.6em" />
        <MenuItem>Kampagnen</MenuItem>
      </StyledLink>
      <StyledLink to="/create">
        <MdAdd size="1.6em" />
        <MenuItem>Neue Kampagne</MenuItem>
      </StyledLink>
    </Nav>
  )
}
