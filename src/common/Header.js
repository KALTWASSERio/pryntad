import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import logo from './logo.png'

const StyledHeader = styled.header`
  overflow: hidden;
`
const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  height: 30px;
`

export default function Header() {
  return (
    <StyledHeader>
      <Title>
        <StyledImage src={logo} alt="logo" />
      </Title>
    </StyledHeader>
  )
}
