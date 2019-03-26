import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const StyledBrowseBack = styled.div`
  position: fixed;
  top: 10px;
  left: 4px;
  z-index: 11;
`

export default function BrowseBack() {
  function goBack() {
    window.history.back()
  }

  return (
    <StyledBrowseBack onClick={() => goBack()}>
      <MdKeyboardArrowLeft color="Black" size="2.5em" />
    </StyledBrowseBack>
  )
}
