import React from 'react'
import styled from 'styled-components'

const StyledSections = styled.div`
  display: flex;
  background: white;
`
const StyledSectionHeadline = styled.h2`
  align-self: center;
  justify-self: center;
  color: #28233c;
  font-size: 1.1em;
  font-weight: bolder;
  background: white;
  padding: 4px;
`
export default function Sections(props) {
  return (
    <StyledSections>
      <StyledSectionHeadline>{props.text}</StyledSectionHeadline>
    </StyledSections>
  )
}
