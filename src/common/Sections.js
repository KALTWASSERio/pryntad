import React from 'react'
import styled from 'styled-components'

const StyledSections = styled.div`
  display: flex;
  /* border-bottom: 2px solid #dcdcdc; */
  height: 30px;
`
const StyledSectionHeadline = styled.h2`
  align-content: center;
  color: #28233c;
  font-size: 1.1em;
  font-weight: bolder;
  /* text-transform: uppercase; */
  padding: 4px;
`
export default function Sections(props) {
  return (
    <StyledSections>
      <StyledSectionHeadline>{props.text}</StyledSectionHeadline>
    </StyledSections>
  )
}
