import React from 'react'
import styled from 'styled-components'

const StyledSections = styled.div`
  display: flex;
  border-bottom: 2px solid #dcdcdc;
  height: 30px;
  margin-top: 12px;

  @media (max-width: 560px) {
    margin-top: 0;
  }
`
const StyledSectionHeadline = styled.h2`
  align-self: center;
  color: #28233c;
  font-size: 1em;
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
