import React from 'react'
import styled from 'styled-components'

const StyledSections = styled.div`
  display: flex;
  border-bottom: 1px solid #dcdcdc;
  height: 30px;
  margin-top: 24px;
`
const StyledSectionHeadline = styled.h2`
  align-self: center;
  color: #28233c;
  font-size: 1.2em;
  font-weight: normal;
  text-transform: uppercase;
  padding: 4px;
`
export default function Sections(props) {
  return (
    <StyledSections>
      <StyledSectionHeadline>{props.text}</StyledSectionHeadline>
    </StyledSections>
  )
}
